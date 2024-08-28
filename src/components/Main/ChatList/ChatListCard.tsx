import React from "react";
import Image from "next/image";
import { ChatMessage } from "@/type";

const ChatListCard: React.FC<{ messages: ChatMessage[] }> = ({ messages }) => {
  return (
    <ul className="space-y-2">
      {messages.map((msg) => (
        <li
          key={msg.id}
          className="flex items-center p-2 rounded-[10px] hover:bg-[#F1F0F4] cursor-pointer"
        >
          <div className="relative h-9 w-9 mr-1.5">
            {msg.sender.avatar ? (
              <Image
                src={msg.sender.avatar}
                alt={msg.sender.name}
                width={31.95}
                height={31.95}
                className="rounded-full"
              />
            ) : (
              <div className="w-[31.95px] h-[31.95px] rounded-full bg-purple-500 flex items-center justify-center text-white text-xs">
                {msg.sender.initials}
              </div>
            )}
            {msg.platform && (
              <div className="absolute bottom-1 right-1 w-[11.42px] h-[11.42px] bg-white rounded-full flex items-center justify-center">
                <Image
                  src={`/main/chatlist/${msg.platform}.svg`}
                  alt={msg.platform}
                  width={11.42}
                  height={11.42}
                />
              </div>
            )}
          </div>
          <div className="flex items-center w-full">
            <div className="flex-grow">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-x-1">
                  <span
                    className={`text-sm min-w-0 whitespace-nowrap overflow-hidden text-ellipsis ${
                      msg.isUnread ? "font-semibold" : "font-medium"
                    }`}
                  >
                    {msg.sender.name}
                  </span>

                  {/* <div className="h-[3px] w-[3px] rounded-full bg-[#37352FBF]"></div> */}
                  <svg width="3" height="3" viewBox="0 0 3 3">
                    <circle cx="1.5" cy="1.5" r="1.5" fill="#37352FBF" />
                  </svg>
                  <span className="text-xxs text-[#37352FBF]">{msg.time}</span>
                </div>

                <div>
                  {msg.isUnread && (
                    <div className="h-[16px] w-[18px] flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    </div>
                  )}
                </div>
              </div>
              <div className="flex justify-between items-center mt-1.5">
                <p
                  className={`truncate text-xxs ${
                    msg.isUnread
                      ? "font-semibold"
                      : "font-medium text-[#37352FBF]"
                  }`}
                >
                  {msg.message}
                </p>

                <div>
                  {msg.isStarred && (
                    <div className="flex items-end">
                      <svg
                        className="w-5 h-5 text-yellow-400"
                        fill="#FFCC00"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ChatListCard;
