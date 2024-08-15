"use client";
import { useState } from "react";
import Navigation from "@/components/Connectivity/navigation";

export default function Connectivity() {
  const [isSecondColumnCollapsed, setIsSecondColumnCollapsed] = useState(false);
  return (
    <div className="flex flex-grow">
      <div
        className={`transition-all duration-300 bg-darkest border-l h-full border-black ${
          isSecondColumnCollapsed ? "w-0 overflow-hidden" : " w-[232px]"
        } bg-gray-100`}
      >
        <Navigation
        //   selectedItem={selectedItem}
        //   setSelectedItem={setSelectedItem}
        />
      </div>
    </div>
  );
}
