import { ChatMessage } from "@/type";
import ChatListCard from "../../ChatList/ChatListCard";

const messages: ChatMessage[] = [
  {
    id: "1",
    sender: {
      name: "Lucas Hernandes",
      avatar: "/main/chatlist/lucas.svg",
    },
    message: "Received it, thank you.",
    time: "Now",
    isStarred: false,
    isUnread: true,
    platform: "instagram",
  },

  {
    id: "2",
    sender: {
      name: "Susan Nguyen",
      initials: "SN",
    },
    message: "I'm great, thanks for asking.",
    time: "23m",
    isStarred: false,
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
      name: "Segun Carter",
      initials: "SC",
    },
    message: "Thank you, I have been able to.",
    time: "45m",
    isStarred: false,
    isUnread: false,
  },
];

export default function NotificationItem() {
  return (
    <div className="px-3.5">
      <div>
        <h3 className="font-medium text-inactive">Yesterday</h3>

        <div>
          <ChatListCard messages={messages} />
        </div>
      </div>
      <div>
        <h3 className="font-medium text-inactive my-1">Last 7 days</h3>

        <div>
          <ChatListCard messages={messages} />
        </div>
      </div>
    </div>
  );
}
