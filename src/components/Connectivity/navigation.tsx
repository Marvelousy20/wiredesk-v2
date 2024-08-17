"use client";
import Image from "next/image";
import { ApplicationsIcon, InstalledIcon } from "./icons";

const navItems = [
  {
    icon: <ApplicationsIcon />,
    title: "Applications",
    number: 128,
    activeIcon: <ApplicationsIcon fill="#B699F9" />,
  },

  {
    icon: <InstalledIcon />,
    title: "Installed",
    number: 19,
    activeIcon: <InstalledIcon fill="#B699F9" />,
  },
];

interface NavigationProps {
  selectedItem: string;
  setSelectedItem: (item: string) => void;
}

export default function Connectivity({
  selectedItem,
  setSelectedItem,
}: NavigationProps) {
  const handleClick = (item: string) => {
    setSelectedItem(item);
  };

  return (
    <div>
      <div className="flex justify-between items-center h-[56px] border-b border-black px-3">
        <div className="text-md font-semibold text-white ">Connectivity</div>

        <Image
          src="/main/second/collapse-left.svg"
          alt="collapse-left"
          width={20}
          height={20}
        />
      </div>

      <div className="px-3 mt-1.5">
        {navItems.map((item) => {
          const isActive = selectedItem === item.title;

          return (
            <div
              key={item.title}
              className={`cursor-pointer py-1.5 px-2 flex items-center text-xs font-medium text-[#BFBFBF] rounded-[3px] ${
                isActive
                  ? "bg-primary-highlight text-primary-v2"
                  : "hover:bg-[#35353580]"
              }`}
              onClick={() => handleClick(item.title)}
            >
              <div className="mr-1">
                {isActive ? item.activeIcon : item.icon}
              </div>
              <span>{item.title}</span>
              {item.number && (
                <span className="ml-auto text-xxs font-medium">
                  {item.number}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
