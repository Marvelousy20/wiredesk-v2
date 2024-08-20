"use client";
import React from "react";
import { usePathname } from "next/navigation";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import { ReactNode } from "react";

interface SidebarIconProps {
  href: string;
  activeIcon: ReactNode;
  inactiveIcon: ReactNode;
  altText: string;
}

const SidebarIcon: React.FC<SidebarIconProps> = ({
  href,
  activeIcon,
  inactiveIcon,
  altText,
}) => {
  const pathName = usePathname();
  const isActive =
    href === "/"
      ? pathName === href
      : pathName === href || pathName.startsWith(`${href}/`);

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <Link href={href}>
            <div
              className={`flex items-center justify-center p-1 rounded-[4px] mb-3 cursor-pointer ${
                isActive
                  ? "bg-primary p-1.5"
                  : "bg-transparent hover:bg-[#CCCCCC0D]"
              } hover:bg-gray-700`}
              aria-label={altText}
            >
              {isActive ? activeIcon : inactiveIcon}
            </div>
          </Link>
        </TooltipTrigger>

        <div className="tooltip-container">
          <TooltipContent side="right" className="custom-tooltip">
            <p className="bg-black py-2 px-3 rounded-[4px]">{altText}</p>
          </TooltipContent>
        </div>
      </Tooltip>
    </TooltipProvider>
  );
};

export default SidebarIcon;
