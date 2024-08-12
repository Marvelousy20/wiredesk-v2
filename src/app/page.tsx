"use client";
import { useState } from "react";
import Navigation from "@/components/Main/Navigation";

export default function Home() {
  const [isSecondColumnCollapsed, setIsSecondColumnCollapsed] = useState(false);
  const [isFifthColumnCollapsed, setIsFifthColumnCollapsed] = useState(false);
  const [selectedItem, setSelectedItem] = useState("Inbox")

  return (
    <div className="flex flex-grow">
      <div
        className={`transition-all duration-300 bg-darkest border-l border-black ${
          isSecondColumnCollapsed ? "w-0 overflow-hidden" : "w-[15.34%]"
        } bg-gray-100`}
      >
        <Navigation selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
        {/* Second column content */}
      </div>
      <div className="w-[19.05%] bg-green-500 flex-shrink-0">
        {/* Third column content */}
        {/* {selectedItem === 'Inbox' && <InboxContent />}
        {selectedItem === 'Mentions' && <MentionsContent />}
        {selectedItem === 'Unassigned' && <UnassignedContent />} */}
      </div>
      <div
        className={`transition-all bg-yellow duration-300 flex-grow ${
          isSecondColumnCollapsed ? "flex-grow" : "w-[41.4%]"
        } bg-gray-50`}
      >
        {/* Fourth column content */}
      </div>
      <div
        className={`transition-all bg-violet-500 duration-300 ${
          isFifthColumnCollapsed ? "w-0 overflow-hidden" : "w-[17.46%]"
        } bg-gray-200`}
      >
        {/* Fifth column content */}
      </div>
      <div
        className={`transition-all bg-blue-600 duration-300 ${
          isFifthColumnCollapsed ? "w-[20.63%]" : "w-[3.17%]"
        } bg-gray-300`}
      >
        {/* Sixth column content */}
        Sixth hello hello
      </div>
    </div>
  );
}
