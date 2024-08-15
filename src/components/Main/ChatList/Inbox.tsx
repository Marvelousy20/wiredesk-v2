import Image from "next/image";
import StatusDropdown from "./StatusDropDown";
import { ChatMessage } from "@/type";
import ChatListCard from "./ChatListCard";

export default function ChatList() {
  const statusOptions = [
    { value: "open", label: "Open" },
    { value: "closed", label: "Closed" },
    { value: "starred", label: "Starred" },
    { value: "snoozed", label: "Snoozed" },
  ];

  const sortOptions = [
    { value: "newest", label: "Newest" },
    { value: "oldest", label: "Oldest" },
    { value: "priority", label: "Priority" },
  ];

  const handleStatusChange = (value: string) => {
    console.log("Selected status:", value);
    // Handle the status change here
  };

  const handleSortChange = (value: string) => {
    console.log("Selected sort:", value);
    // Handle the sort change here
  };

  const messages: ChatMessage[] = [
    {
      id: "1",
      sender: {
        name: "Lucas Hernandes",
        avatar: "/main/chatlist/lucas.svg",
      },
      message: "Received it, thank you.",
      time: "Now",
      isStarred: true,
      isUnread: true,
      platform: "instagram",
    },

    {
      id: "2",
      sender: {
        name: "James Books",
        avatar: "/main/chatlist/james.svg",
      },
      message: "I'm great, thanks for asking.",
      time: "23m",
      isStarred: true,
      isUnread: false,
      platform: "whatsapp",
    },

    {
      id: "3",
      sender: {
        name: "Chuka Enyioma",
        initials: "CE",
      },
      message: "Thank you, I have been able to.",
      time: "45m",
      isStarred: false,
      isUnread: false,
      platform: "whatsapp",
    },

    {
      id: "4",
      sender: {
        name: "Susan Nguyen",
        initials: "SN",
      },
      message: "Thank you, I have been able to.",
      time: "45m",
      isStarred: false,
      isUnread: false,
    },

    {
      id: "5",
      sender: {
        name: "John Boyega",
        avatar: "/main/chatlist/john.svg",
      },
      message: "Okay I'll check in back in a..",
      time: "2h",
      isStarred: false,
      isUnread: true,
      platform: "gmail",
    },

    {
      id: "6",
      sender: {
        name: "Damian Wayne",
        initials: "DW",
      },
      message: "I made a complaint a few...",
      time: "2h",
      isStarred: false,
      isUnread: false,
      platform: "gmail",
    },

    {
      id: "7",
      sender: {
        name: "Martha Judge",
        initials: "MJ",
      },
      message: "Sent",
      time: "3h",
      isStarred: false,
      isUnread: false,
      platform: "gmail",
    },
  ];

  return (
    <div className="">
      <div className="px-3 border-b border-divider-on-light">
        <div className="flex items-center justify-between h-[56px] px-2">
          <h1 className="text-black text-md font-semibold">Inbox</h1>

          <Image
            src="/main/chatlist/edit.svg"
            alt="edit"
            width={20}
            height={20}
          />
        </div>
      </div>

      <div className="mt-2 px-3">
        <div className="flex items-center justify-between px-2">
          <div className="bg-green-500">
            <StatusDropdown
              options={statusOptions}
              defaultValue="open"
              onValueChange={handleStatusChange}
            />
          </div>

          <div className="!bg-red-500">
            <StatusDropdown
              options={sortOptions}
              defaultValue="newest"
              onValueChange={handleSortChange}
            />
          </div>
        </div>
      </div>

      {/* ChatList */}
      <div className="px-3">
        <div>
          <ChatListCard messages={messages} />
        </div>
      </div>
    </div>
  );
}
