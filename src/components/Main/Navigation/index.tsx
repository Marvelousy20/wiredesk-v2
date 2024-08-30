import Image from "next/image";
import DropdownMenu from "./dropdown";
import { Dispatch, SetStateAction } from "react";
import CustomDropdown from "./CustomDropdownWithMenu";
import { Item, Section } from "@/type";

type SelectedItemType = "Inbox" | "Search";

const navItems = [
  {
    title: "Search",
    icon: (
      <Image src="/main/second/search.svg" alt="inbox" width={20} height={20} />
    ),

    activeIcon: (
      <Image
        src="/main/second/searchfilled.svg"
        alt="inbox"
        width={20}
        height={20}
      />
    ),
  },
  {
    title: "Inbox",
    unread: "254",
    icon: (
      <Image
        src="/main/second/inboxfilled.svg"
        alt="inbox"
        width={20}
        height={20}
      />
    ),

    activeIcon: (
      <Image
        src="/main/second/inboxfilled.svg"
        alt="inbox"
        width={20}
        height={20}
      />
    ),
  },
  {
    title: "Mentions",
    unread: "30",
    icon: (
      <Image
        src="/main/second/alternate_email.svg"
        alt="inbox"
        width={20}
        height={20}
      />
    ),
    activeIcon: (
      <Image
        src="/main/second/alternate_email.svg"
        alt="inbox"
        width={20}
        height={20}
      />
    ),
  },
  {
    title: "Unassigned",
    unread: "48",
    icon: (
      <Image
        src="/main/second/person_cancel.svg"
        alt="inbox"
        width={20}
        height={20}
      />
    ),
    activeIcon: (
      <Image
        src="/main/second/person_cancel.svg"
        alt="inbox"
        width={20}
        height={20}
      />
    ),
  },
];

// const teamItems = [
//   { label: "Mentions", number: 12, icon: "/main/second/mentions.png" },
//   { label: "Social", number: 43, icon: "/main/second/socials.png" },
//   { label: "Tier/Support", number: 17, icon: "/main/second/support.png" },
//   { label: "Technical", number: 26, icon: "/main/second/technical.png" },
// ];

// const teammateItems = [
//   { label: "James Anderson", number: 12, icon: "/main/second/james.svg" },
//   { label: "Ashley Nyugen", number: 43, icon: "/main/second/ashley.svg" },
// ];

// const channelItems = [
//   { label: "Whatsapp", number: 12, icon: "/main/second/WA.svg" },
//   { label: "Instagram", number: 43, icon: "/main/second/IG.svg" },
//   { label: "Gmail", number: 43, icon: "/main/second/Gmail.svg" },
//   { label: "Facebook", number: 43, icon: "/main/second/FB.svg" },
// ];

interface NavigationProps {
  selectedItem: string;
  setSelectedItem: Dispatch<SetStateAction<SelectedItemType>>;
}

export default function Navigation({
  selectedItem,
  setSelectedItem,
}: NavigationProps) {
  const handleClick = (item: SelectedItemType) => {
    setSelectedItem(item);
  };

  const sections: Section[] = [
    {
      label: "WireDesk",
      items: [
        { label: "James Anderson", number: 12, icon: "/main/second/james.svg" },
        { label: "Ashley Nyugen", number: 43, icon: "/main/second/ashley.svg" },
      ],
    },
    {
      label: "Teams",
      items: [
        { label: "James Anderson", number: 12, icon: "/main/second/james.svg" },
        { label: "Ashley Nyugen", number: 43, icon: "/main/second/ashley.svg" },
      ],
    },
    {
      label: "Teammates",
      items: [
        { label: "Mentions", number: 12, icon: "/main/second/mentions.png" },
        { label: "Social", number: 43, icon: "/main/second/socials.png" },
        { label: "Tier/Support", number: 17, icon: "/main/second/support.png" },
        { label: "Technical", number: 26, icon: "/main/second/technical.png" },
      ],
    },
    {
      label: "Tickets",
      items: [
        { label: "Mentions", number: 12, icon: "/main/second/mentions.png" },
        { label: "Social", number: 43, icon: "/main/second/socials.png" },
        { label: "Tier/Support", number: 17, icon: "/main/second/support.png" },
        { label: "Technical", number: 26, icon: "/main/second/technical.png" },
      ],
    },
    {
      label: "Channels",
      items: [
        { label: "Mentions", number: 12, icon: "/main/second/mentions.png" },
        { label: "Social", number: 43, icon: "/main/second/socials.png" },
        { label: "Tier/Support", number: 17, icon: "/main/second/support.png" },
        { label: "Technical", number: 26, icon: "/main/second/technical.png" },
      ],
    },
  ];

  const handleHorizontalDotClick = (label: string) => {
    console.log('Horizontal dot clicked for section:', label);
    // Handle the click event, e.g., open a modal
  };

  return (
    <div>
      <div className="flex justify-between items-center h-[56px] border-b border-black px-3">
        <div className="text-md font-semibold text-white ">WireDesk</div>

        <Image
          src="/main/second/collapse-left.svg"
          alt="collapse-left"
          width={20}
          height={20}
        />
      </div>

      {/* Main section starts here */}
      <div className="flex flex-col content-height">
        {/* Navigation menu starts here */}
        <div className="px-3 mt-1.5">
          {navItems.map((item) => {
            const isActive = selectedItem === item.title;

            return (
              <div
                key={item.title}
                className={`cursor-pointer py-1.5 px-2 flex items-center text-xs font-medium text-[#BFBFBF] rounded-[3px] mb-1 ${
                  isActive
                    ? "bg-primary-highlight text-primary-v2"
                    : "hover:bg-[#35353580]"
                }`}
                onClick={() => handleClick(item.title as SelectedItemType)}
              >
                <div className="mr-1">
                  {isActive ? item.activeIcon : item.icon}
                </div>
                <span>{item.title}</span>
                {item.unread && (
                  <span className="ml-auto text-xxs font-medium">
                    {" "}
                    {item.unread}
                  </span>
                )}
              </div>
            );
          })}
        </div>

        {/* Socials */}
        <div className="px-3 text-[#BFBFBF] mt-3">
          {/* <DropdownMenu label="WireDesk" items={teamItems} />
          <DropdownMenu label="Teams" items={teamItems} />
          <DropdownMenu label="Teammates" items={teammateItems} />
          <DropdownMenu label="Tickets" items={teamItems} />
          <DropdownMenu label="Channels" items={channelItems} /> */}
          <CustomDropdown
            sections={sections}
            onHorizontalDotClick={handleHorizontalDotClick}
          />
        </div>

        <div className="flex-grow"></div>

        {/* Bottom */}
        <div className="text-[#BFBFBF] px-3 space-y-1">
          <div
            className={`pl-2 flex items-center justify-between py-1.5 rounded-[3px] px-2  ${
              selectedItem === "Spam"
                ? "bg-primary-highlight text-primary-v2"
                : "hover:bg-[#35353580]"
            }`}
            onClick={() => handleClick("Spam" as SelectedItemType)}
          >
            <div className="flex items-center text-xs gap-2">
              <Image
                src="/main/second/spam.svg"
                alt="width"
                width={20}
                height={20}
              />
              Spam
            </div>
            <span className="text-xxs">30</span>
          </div>

          <div
            className={`pl-2 flex items-center justify-between py-1.5 rounded-[3px] px-2  ${
              selectedItem === "Manage"
                ? "bg-primary-highlight text-primary-v2"
                : "hover:bg-[#35353580]"
            }`}
            onClick={() => handleClick("Manage" as SelectedItemType)}
          >
            <div className="flex items-center text-xs gap-2">
              <Image
                src="/main/second/manage.svg"
                alt="width"
                width={20}
                height={20}
              />
              Manage
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
