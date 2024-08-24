'use client'
import { createContext, useContext, ReactNode } from "react";
import {useState} from 'react'

interface userType {
    isSubscribed: boolean;
    name: string;
  }
interface UserContextProps {
    children: ReactNode;
  }
 
export const UserContext = createContext< userType  | undefined>(undefined)

export const UserProvider: React.FC<UserContextProps> = ({
    children,
  }) =>{
   
    const [user] = useState<userType>({
        isSubscribed: true,
        name: 'joy'
      })


   
    return (
        <UserContext.Provider
          value={user}
        >
          {children}
        </UserContext.Provider>
      );
}

export function useUserContext() {
    const context = useContext(UserContext);
    if (context === undefined) {
      throw new Error("useUserContext must be used within a UserProvider");
    }
    return context;
  }

