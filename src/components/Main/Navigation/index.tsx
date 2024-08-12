import Image from "next/image";

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

interface NavigationProps {
  selectedItem: string;
  setSelectedItem: (item: string) => void;
}

export default function ({ selectedItem, setSelectedItem }: NavigationProps) {
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
      <div>
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
                    : "hover:bg-[#35353580] "
                }`}
                onClick={() => handleClick(item.title)}
              >
                <div className="mr-1">
                  {isActive ? item.activeIcon : item.icon}
                </div>
                <span>{item.title}</span>
                {item.unread && (
                  <span className="ml-auto text-xxs font-medium">
                    {item.unread}
                  </span>
                )}
              </div>
            );
          })}
        </div>

        {/* Socials */}
      </div>
    </div>
  );
}
