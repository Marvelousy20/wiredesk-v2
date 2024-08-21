"use client";

import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
// import { MdOutlineOpenInNew } from "react-icons/md";
// import axios from "axios";
import { FaSpinner } from "react-icons/fa";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { ApplicationTypes } from "@/type";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface InstallAppProps {
  open: boolean;
  closeModal: () => void;
  selectedApp: ApplicationTypes | null;
  onOpenChange: Dispatch<SetStateAction<boolean>>;
}

const InsatallModal = ({
  open,
  closeModal,
  selectedApp,
  onOpenChange,
}: InstallAppProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [url, setUrl] = useState("");
  const [discordUrl, setDiscordUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const searchParams = useSearchParams();

  const getInstagramUrl = async () => {
    const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/instagram/login/url`;
    setIsLoading(true);
    try {
      const result = await axios.get(apiUrl);
      const url = result.data?.data?.url;
      setUrl(url);
      setIsLoading(false);
      console.log(url);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  const getDiscordUrl = async () => {
    const getUrlApi = `${process.env.NEXT_PUBLIC_API_URL}/discord/login/url`;
    const token = process.env.NEXT_PUBLIC_API_TOKEN;
    setIsLoading(true);
    try {
      const result = await axios.get(getUrlApi, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const url = result.data?.data?.url;
      setDiscordUrl(url);
      setIsLoading(false);
      console.log(url);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  const loginWithDiscord = async () => {
    const loginApi = `${process.env.NEXT_PUBLIC_API_URL}/discord/login`;
    const token = process.env.NEXT_PUBLIC_API_TOKEN;

    const code = searchParams.get("code");
    const guildId = searchParams.get("guild_id");
    const permission = searchParams.get("permissions");

    if (!code || !guildId || !permission) {
      console.error("Missing required parameters");
      return;
    }

    setIsLoading(true);

    const postData = {
      permissions: permission,
      code: code,
      guildId: guildId,
    };

    try {
      const response = await axios.post(loginApi, postData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // Handle successful login here
      console.log(response?.data);

      // const { data } = response;
    } catch (error) {
      console.error("Login failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const getWhatsappUrl = async () => {
    const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/discord/login/url`;
    setIsLoading(true);
    try {
      const result = await axios.get(apiUrl);
      const url = result.data?.data?.url;
      setIsLoading(false);
      setUrl(url);
      console.log(url);
    } catch (error) {
      console.error(error);
    }
  };

  const installTelegram = async () => {
    const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/telegram/install`;
    console.log(apiUrl);
    setIsLoading(true);

    const botToken = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN;

    const postData = {
      botToken: botToken,
    };

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
      },
    };

    try {
      const response = await axios.post(apiUrl, postData, config);
      console.log("Response from telegram", response?.data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  const installSlack = async () => {
    const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/slack/install`;

    const botToken = process.env.NEXT_PUBLIC_SLACK_BOT_TOKEN;

    const postData = {
      botToken: botToken,
      secret: process.env.NEXT_PUBLIC_SLACK_SECRET,
    };

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
      },
    };

    try {
      const result = await axios.post(apiUrl, postData, config);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleAppConnection = () => {
    switch (selectedApp?.name) {
      case "Instagram":
        getInstagramUrl();
        break;
      case "Whatsapp":
        getInstagramUrl();
        break;
      case "Telegram":
        installTelegram();
        break;
      case "Discord":
        getDiscordUrl();
        break;
      case "Slack":
        installSlack();
        break;
      default:
        console.log("App not supported");
        setIsLoading(false);
        return;
    }
  };

  useEffect(() => {
    if (url) {
      const width = 600;
      const height = 600;
      const left = window.innerWidth / 2 - width / 2;
      const top = window.innerHeight / 2 - height / 2;

      const newWindow = window.open(
        url,
        "_blank",
        `width=${width}, height=${height}, top=${top}, left=${left}`
      );
      if (newWindow) newWindow.focus();

      setUrl(""); // Reset URL to prevent re-opening
    }
  }, [url]);

  // Effect to handle Discord URL redirection
  useEffect(() => {
    if (discordUrl) {
      window.location.href = discordUrl;
      setDiscordUrl("");
    }
  }, [discordUrl]);

  useEffect(() => {
    const code = searchParams.get("code");
    const guildId = searchParams.get("guild_id");
    const permission = searchParams.get("permissions");

    console.log(code, guildId, permission);
    if (code && guildId && permission) {
      loginWithDiscord();
    }
  }, [searchParams]);

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="max-w-[75rem]">
          <div className="bg-[#2325290D] bg-opacity-5 flex py-[3.93rem] justify-between px-[3.125rem]">
            <div>
              <div className="flex gap-8">
                <div>
                  {selectedApp?.icon && (
                    <Image
                      src={selectedApp.icon}
                      alt="image"
                      width={95}
                      height={95}
                    />
                  )}
                </div>

                <div className="text-black space-y-3">
                  <h3 className="text-2xl font-semibold">
                    {selectedApp?.name}
                  </h3>
                  <p className="text-lg">
                    Easily reply to Instagram private messages from your inbox
                  </p>

                  <div>
                    <p className="bg-[#FBF197] text-[#594F03] text-lg inline rounded-[10px] px-1.5 py-0.5">
                      Free
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col">
              <button
                onClick={handleAppConnection}
                className={`${
                  isLoading ? "" : "hover:bg-black/90"
                } text-white bg-black rounded-[5px] text-xl px-2.5 h-[34px]`}
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <FaSpinner className="animate-spin" />
                  </div>
                ) : (
                  <span>Install now</span>
                )}
              </button>
              <div className="grid mt-3 space-y-2 text-[#686662] text-lg">
                <Link href="/" className="underline">
                  Terms of service
                </Link>
                <Link href="/" className="underline">
                  Privacy policy
                </Link>
              </div>
            </div>
          </div>

          <div className="bg-white">
            <div className="flex gap-x-[5.5rem]">
              <div className="pt-9 w-[58.27%] pl-12">
                <Tabs defaultValue="description" className="w-full">
                  <TabsList className="w-full gap-4 justify-start bg-transparent border-b border-divider-on-light rounded-none text-xs text-inactive pb-0">
                    <TabsTrigger value="description">Description</TabsTrigger>
                    <TabsTrigger value="started">Getting Started</TabsTrigger>
                    <TabsTrigger value="settings">Settings</TabsTrigger>
                  </TabsList>

                  <TabsContent value="description">
                    <div className="text-black text-sm">
                      Route private messages from Instagram to your Intercom
                      inbox — keeping all of your customer communications in one
                      place and enabling you to respond faster to your leads and
                      users. With the Instagram app, you can read, manage and
                      respond to all private messages right from your inbox. No
                      more switching tabs or managing multiple queues. <br />{" "}
                      <br />
                      Instagram messages can be routed directly to your
                      Unassigned inbox, or you can automatically assign them to
                      the right team or teammate using assignment rules. Plus,
                      anyone who messages you will be added to Intercom as a
                      lead or user, making it easy to track all of your
                      conversations and customer data in one place and giving
                      you a clear picture of your customer base.
                    </div>
                  </TabsContent>
                  <TabsContent value="started"></TabsContent>
                  <TabsContent value="settings"></TabsContent>
                </Tabs>
              </div>

              <div className="w-[30.4%] border border-[#EEEFF1] pt-9 px-12 h-[500px]">
                <div className="bg-[#2325290D] bg-opacity-5 py-12  px-8 space-y-4 rounded-[10px]">
                  <h1 className="text-black font-semibold text-xl">
                    Have a question?
                  </h1>

                  <p className="text-blackInactive">
                    WireDesk’s team is here to help
                  </p>

                  <Link href="/" className="underline text-[#2E6BFF] block">
                    Get in Touch
                  </Link>
                </div>

                <div className="flex justify-center mt-7">
                  <Link href="/" className="flex items-center gap-2">
                    {/* <MdOutlineOpenInNew size={18} /> */}
                    Open app docs
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
      {isLoading && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
          }}
        >
          <FaSpinner className="animate-spin" size={50} />
        </div>
      )}
    </>
  );
};

export default InsatallModal;
