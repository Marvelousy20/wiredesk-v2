"use client";
import { useState } from "react";
import Navigation from "@/components/Main/Navigation";
import ChatList from "@/components/Main/ChatList/Inbox";
import ChatInfo from "@/components/Main/ChatInfo";
// import Details from "@/components/Main/Details";
import Tools from "@/components/Main/Toolss";
import Search from "@/components/Search";

interface CollapsedStates {
  isSecondColumnCollapsed: boolean;
  isFifthColumnCollapsed: boolean;
}

type SelectedItemType = "Inbox" | "Search";

const sectionComponents = (collpasedStates: CollapsedStates) => ({
  Inbox: () => (
    <>
      <div
        className={`w-[19.05%] border-divider-on-light flex-shrink-0 border-r`}
      >
        <ChatList />
      </div>
      <div
        className={`transition-all
               border-r relative border-divider-on-light flex-grow h-screen ${
                 collpasedStates.isSecondColumnCollapsed
                   ? "flex-grow"
                   : "w-[41.4%]"
               } bg-gray-50`}
      >
        <ChatInfo />
      </div>

      <div
        className={`transition-all duration-300 ${
          collpasedStates.isFifthColumnCollapsed ? "w-[20.63%]" : "w-[3.17%]"
        } bg-gray-300`}
      >
        <Tools />
      </div>
    </>
  ),

  Search: () => <Search />,
});

export default function Home() {
  const [isSecondColumnCollapsed, setIsSecondColumnCollapsed] = useState(false);
  const [isFifthColumnCollapsed, setIsFifthColumnCollapsed] = useState(false);
  const [selectedItem, setSelectedItem] = useState<SelectedItemType>("Inbox");

  const SelectedComponent =
    sectionComponents({
      isSecondColumnCollapsed,
      isFifthColumnCollapsed,
    })[selectedItem] || (() => <div>No component selected</div>);

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

      <SelectedComponent />
    </div>
  );
}
