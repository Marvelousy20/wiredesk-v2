"use client";
import { useState } from "react";
import Navigation from "@/components/Main/Navigation";
import ChatList from "@/components/Main/ChatList/Inbox";
import ChatInfo from "@/components/Main/ChatInfo";
// import Details from "@/components/Main/Details";
import Tools from "@/components/Main/Toolss";

export default function Home() {
  const [isSecondColumnCollapsed, setIsSecondColumnCollapsed] = useState(false);
  const [isFifthColumnCollapsed, setIsFifthColumnCollapsed] = useState(false);
  const [selectedItem, setSelectedItem] = useState("Inbox");

  return (
    <div className="flex flex-grow">
      <div
        className={`transition-all duration-300 bg-darkest border-l border-black ${
          isSecondColumnCollapsed ? "w-0 overflow-hidden" : "w-[15.34%]"
        } bg-gray-100`}
      >
        <Navigation
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
        />
      </div>
      <div className="w-[19.05%] border-r border-divider-on-light flex-shrink-0">
        {selectedItem === "Inbox" && <ChatList />}
      </div>
      <div
        className={`transition-all relative border-r border-divider-on-light flex-grow h-screen ${
          isSecondColumnCollapsed ? "flex-grow" : "w-[41.4%]"
        } bg-gray-50`}
      >
        <ChatInfo />
      </div>

      <div
        className={`transition-all duration-300 ${
          isFifthColumnCollapsed ? "w-[20.63%]" : "w-[3.17%]"
        } bg-gray-300`}
      >
        <Tools />
      </div>
    </div>
  );
}
