

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Trial from "@/components/Main/Trial";
import Sidebar from "@/components/Common/Sidebar/Sidebar";
import {UserProvider} from '../context/index'


import { QueryProvider } from "@/providers/queryClientProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     
        <body className={`${inter.className} w-full overflow-hidden`}>
        <QueryProvider>
        <UserProvider>
          <Trial />
          
          <main className="flex">
            <nav className="w-[3.57%] min-w-[54px] bg-gray flex-shrink-0">
              <Sidebar />
            
            </nav>
            {children}
          </main>
        </UserProvider>
        </QueryProvider>
        </body>
        
      
    </html>
  );
}

