"use client";
import { useState } from "react";
import Image from "next/image";
import InsatallAppModal from "../Modals/InstallAppModal";
import { ApplicationTypes } from "@/type";

const applications: ApplicationTypes[] = [
  {
    icon: "/connectivity/whatsapp.svg",
    name: "Whatsapp",
    installed: true,
    description: "Connect your Whatsapp business page as a channel in Wiredesk",
  },
  {
    icon: "/connectivity/instagram.svg",
    name: "Instagram",
    installed: false,
    description: "Connect your Insragram page as a channel in Wiredesk",
  },
  {
    icon: "/connectivity/telegram.svg",
    name: "Telegram",
    installed: false,
    description: "Connect your Telegram page as a channel in Wiredesk",
  },
  {
    icon: "/connectivity/slack.svg",
    name: "Slack",
    installed: false,
    description: "Connect your Slack as a channel in Wiredesk",
  },
  {
    icon: "/connectivity/twitter.svg",
    name: "Twitter",
    installed: false,
    description: "Connect your Twitter page as a channel in Wiredesk",
  },
  {
    icon: "/connectivity/gmail.svg",
    name: "Gmail",
    installed: false,
    description: "Connect your Gmail as a channel in Wiredesk",
  },
  {
    icon: "/connectivity/discord.svg",
    name: "Discord",
    installed: false,
    description: "Connect your Discord  as a channel in Wiredesk",
  },
  {
    icon: "/connectivity/messager.svg",
    name: "Messenger",
    installed: false,
    description: "Connect your Facebook messenger as a channel in Wiredesk",
  },
];

export default function Socials() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedApp, setSelectedApp] = useState<ApplicationTypes | null>(null);

  const openModal = (app: ApplicationTypes) => {
    setSelectedApp(app);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="w-full px-5 mt-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {applications.map((app, index) => (
          <div
            key={index}
            className="px-4 py-5 bg-white border border-gray-60 shadow-connectivity-shadow rounded-[8px] cursor-pointer"
            onClick={() => openModal(app)}
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                {app.icon && (
                  <Image src={app.icon} alt={app.icon} width={32} height={32} />
                )}

                <span className="text-sm">{app.name}</span>
              </div>

              {app.installed && (
                <div className="text-xxs font-medium">
                  <span className="bg-green bg-opacity-10 px-1.5 py-1 rounded-[12px] text-[#168907]">
                    Installed
                  </span>
                </div>
              )}
            </div>

            <div className="text-xxs text-inactive mt-4">{app.description}</div>
          </div>
        ))}
      </div>

      <InsatallAppModal
        closeModal={closeModal}
        open={isOpen}
        onOpenChange={setIsOpen}
        selectedApp={selectedApp}
      />
    </div>
  );
}
