import Image from "next/image";
import DropdownMenu from "./dropdown";

const navItems = [
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

const teamItems = [
  { label: "Mentions", number: 12, icon: "/main/second/mentions.png" },
  { label: "Social", number: 43, icon: "/main/second/socials.png" },
  { label: "Tier/Support", number: 17, icon: "/main/second/support.png" },
  { label: "Technical", number: 26, icon: "/main/second/technical.png" },
];

const teammateItems = [
  { label: "James Anderson", number: 12, icon: "/main/second/james.svg" },
  { label: "Ashley Nyugen", number: 43, icon: "/main/second/ashley.svg" },
];

const channelItems = [
  { label: "Whatsapp", number: 12, icon: "/main/second/WA.svg" },
  { label: "Instagram", number: 43, icon: "/main/second/IG.svg" },
  { label: "Gmail", number: 43, icon: "/main/second/Gmail.svg" },
  { label: "Facebook", number: 43, icon: "/main/second/FB.svg" },
];

interface NavigationProps {
  selectedItem: string;
  setSelectedItem: (item: string) => void;
}

export default function Navigation({
  selectedItem,
  setSelectedItem,
}: NavigationProps) {
  const handleClick = (item: string) => {
    setSelectedItem(item);
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
        <div className="pl-3 mt-1">
          <div className="px-2.5 flex items-center gap-1 h-[32px]">
            <Image
              src="/main/second/search.svg"
              alt="seach"
              width={20}
              height={20}
            />

            <input
              type="text"
              placeholder="Search"
              className="border-none outline-none bg-transparent text-white text-xs"
            />
          </div>
        </div>

        {/* Navigation menu starts here */}
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
        <div className="px-2 text-[#BFBFBF] mt-3">
          <DropdownMenu label="WireDesk" items={teamItems} />
          <DropdownMenu label="Teams" items={teamItems} />
          <DropdownMenu label="Teammates" items={teammateItems} />
          <DropdownMenu label="Tickets" items={teamItems} />
          <DropdownMenu label="Channels" items={channelItems} />
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
            onClick={() => handleClick("Spam")}
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
            onClick={() => handleClick("Manage")}
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
