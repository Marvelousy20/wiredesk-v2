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
              <div className="absolute bottom-[4px] -right-1 w-[11.42px] h-[11.42px] bg-white rounded-full flex items-center justify-center">
                <Image
                  src={`/main/chatlist/${msg.platform}.svg`}
                  alt={msg.platform}
                  width={11.42}
                  height={11.42}
                  className="h-[11.42px] w-[11.42px]"
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
                  <span className="text-xxs text-[#37352FBF] m-0 p-0 align-middle">
                    {msg.time}
                  </span>
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

                <div className="flex items-center gap-x-1">
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

                  {msg.alert && (
                    <div className="flex items-end">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <mask
                          id="mask0_6375_2979"
                          style={{ maskType: "alpha" }}
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="16"
                          height="16"
                        >
                          <rect width="16" height="16" fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_6375_2979)">
                          <path
                            d="M8.0001 12.0001C9.11121 12.0001 10.0557 11.6112 10.8334 10.8334C11.6112 10.0557 12.0001 9.11121 12.0001 8.0001C12.0001 6.88899 11.6112 5.94454 10.8334 5.16676C10.0557 4.38899 9.11121 4.0001 8.0001 4.0001V8.0001L5.16676 10.8334C5.53343 11.189 5.95843 11.4723 6.44176 11.6834C6.9251 11.8945 7.44454 12.0001 8.0001 12.0001ZM8.00476 14.4001C7.12388 14.4001 6.29454 14.2334 5.51676 13.9001C4.73899 13.5668 4.05843 13.1084 3.4751 12.5251C2.89176 11.9418 2.43343 11.2614 2.1001 10.4841C1.76676 9.70677 1.6001 8.87621 1.6001 7.99243C1.6001 7.10865 1.76676 6.28065 2.1001 5.50843C2.43343 4.73621 2.89176 4.05843 3.4751 3.4751C4.05843 2.89176 4.73876 2.43343 5.5161 2.1001C6.29343 1.76676 7.12399 1.6001 8.00776 1.6001C8.89154 1.6001 9.71954 1.76676 10.4918 2.1001C11.264 2.43343 11.9418 2.89176 12.5251 3.4751C13.1084 4.05843 13.5668 4.73743 13.9001 5.5121C14.2334 6.28687 14.4001 7.11465 14.4001 7.99543C14.4001 8.87632 14.2334 9.70565 13.9001 10.4834C13.5668 11.2612 13.1084 11.9418 12.5251 12.5251C11.9418 13.1084 11.2628 13.5668 10.4881 13.9001C9.71332 14.2334 8.88554 14.4001 8.00476 14.4001Z"
                            fill="#C92519"
                          />
                        </g>
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
