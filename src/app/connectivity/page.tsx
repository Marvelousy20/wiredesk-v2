"use client";
import { useState } from "react";
import Navigation from "@/components/Connectivity/navigation";
import Applications from "@/components/Connectivity/Applications";
import Installed from "@/components/Connectivity/Installed";

export default function Connectivity() {
  const [isSecondColumnCollapsed, setIsSecondColumnCollapsed] = useState(false);
  const [selectedItem, setSelectedItem] = useState("Applications");

  return (
    <div className="flex">
      <div
        className={`transition-all flex-shrink-0 duration-300 bg-darkest border-l h-full border-black ${
          isSecondColumnCollapsed ? "w-0 overflow-hidden" : " w-[232px]"
        } bg-gray-100`}
      >
        <Navigation
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
        />
      </div>

      <div className="flex-grow">
        {selectedItem === "Applications" && <Applications />}
        {selectedItem === "Installed" && <Installed />}
      </div>
    </div>
  );
}
