"use client";
import React, { useState } from "react";
import Image from "next/image";
import { InfoIcon, CommentIcon, NoteIcon } from "./icons";

export default function Tools() {
  const [selectedSidebar, setSelectedSidebar] = useState("Info");

  return (
    <div>
      <div className="flex items-center justify-center h-[56px] border-b border-divider-on-light">
        <div className="bg-primary h-[28px] w-[28px] flex items-center justify-center rounded-[4px]">
          <Image
            src="/main/toolss/tools.svg"
            alt="tools"
            width={20}
            height={20}
          />
        </div>
      </div>

      <div className="flex justify-center mt-2">
        <ul className="space-y-3">
          <li
            className={`h-7 w-7 flex items-center justify-center cursor-pointer rounded-[4px] ${
              selectedSidebar === "Info"
                ? "bg-primary-light"
                : "hover:bg-[#35353580]"
            }`}
            onClick={() => setSelectedSidebar("Info")}
          >
            <InfoIcon
              fill={selectedSidebar === "Info" ? "#6941C6" : "#232529"}
            />
          </li>
          <li
            className={`h-7 w-7 flex items-center justify-center cursor-pointer rounded-[4px] ${
              selectedSidebar === "Comment"
                ? "bg-primary-light"
                : "hover:bg-[#35353580]"
            }`}
            onClick={() => setSelectedSidebar("Comment")}
          >
            <CommentIcon
              fill={selectedSidebar === "Comment" ? "#6941C6" : "#232529"}
            />
          </li>
          <li
            className={`h-7 w-7 flex items-center justify-center cursor-pointer rounded-[4px] ${
              selectedSidebar === "Notes"
                ? "bg-primary-light"
                : "hover:bg-[#35353580]"
            }`}
            onClick={() => setSelectedSidebar("Notes")}
          >
            <NoteIcon
              fill={selectedSidebar === "Comment" ? "#6941C6" : "#232529"}
            />
          </li>
        </ul>
      </div>
    </div>
  );
}
