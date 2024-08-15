"use client";

// components/ChatComponent.tsx
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { User, Message } from "@/type";
import { sampleMessages, currentUser } from "./SimpleData";

const ChatComponent: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>(sampleMessages);
  const [inputText, setInputText] = useState("");

  useEffect(() => {
    // Fetch initial messages and current user
    // This is where you'd typically make an API call
  }, []);

  //   const sendMessage = () => {
  //     if (inputText.trim() && currentUser) {
  //       const newMessage: Message = {
  //         id: Date.now().toString(),
  //         text: inputText,
  //         sender: currentUser.id,
  //         timestamp: new Date(),
  //       };
  //       setMessages([...messages, newMessage]);
  //       setInputText("");
  //     }
  //   };

  return (
    <div className="flex flex-col">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <React.Fragment key={message.id}>
            {message.isNew && index > 0 && (
              <div className="flex items-center my-4">
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="flex-shrink mx-4 text-gray-500 text-sm">
                  New Message
                </span>
                <div className="flex-grow border-t border-gray-300"></div>
              </div>
            )}
            <div
              className={`flex ${
                message.sender?.id === currentUser.id
                  ? "justify-end"
                  : "justify-start"
              }`}
            >
              <div className="bg-white rounded-lg p-3 max-w-xs lg:max-w-md">
                <p>{message.text}</p>
                <p className="text-xs text-gray-500 mt-1">
                  {message.timestamp.toLocaleTimeString()}
                </p>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
      <div className="p-4">
        <div className="flex items-center">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            className="flex-1 border rounded-full py-2 px-4 mr-2"
            placeholder="Type a message..."
          />
          <button
            // onClick={sendMessage}
            className="bg-primary text-white rounded-full p-2"
          >
            Send
          </button>
          hello
        </div>
      </div>
    </div>
  );
};

export default ChatComponent;
