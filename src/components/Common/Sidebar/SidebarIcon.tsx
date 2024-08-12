"use client";

import { usePathname } from "next/navigation";
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
    <Link href={href}>
      <div
        className={`flex items-center justify-center p-1 rounded-[4px] mb-3  cursor-pointer ${
          isActive ? "bg-primary p-1.5" : "bg-transparent hover:bg-[#CCCCCC0D]"
        } hover:bg-gray-700`}
        aria-label={altText}
      >
        {isActive ? activeIcon : inactiveIcon}
      </div>
    </Link>
  );
};

export default SidebarIcon;
