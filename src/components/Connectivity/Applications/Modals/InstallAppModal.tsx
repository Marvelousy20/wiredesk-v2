"use client";

import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
// import { MdOutlineOpenInNew } from "react-icons/md";
// import axios from "axios";
import { FaSpinner } from "react-icons/fa";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { ApplicationTypes } from "@/type";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  useGetInstagramUrl,
  useGetDiscordUrl,
  // useFacebookUrl,
  useLoginWithWhatsapp,
  installSlack,
  installTelegram,
  loginWithDiscord,
  usePostInstagramData,
} from "./api";

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
  const [url, setUrl] = useState("");
  const [discordUrl, setDiscordUrl] = useState("");
  // const [isLoading, setIsLoading] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();

  const { data: instagramUrl, isLoading: isInstagramLoading } =
    useGetInstagramUrl();
  const { data: discordLoginUrl, isLoading: isDiscordLoading } =
    useGetDiscordUrl();

  const isLoading = isInstagramLoading || isDiscordLoading;

  const handleAppConnection = () => {
    switch (selectedApp?.name) {
      case "Instagram":
        setUrl(instagramUrl);
        break;
      case "Whatsapp":
        setUrl(instagramUrl);
        break;
      case "Telegram":
        installTelegram();
        break;
      case "Discord":
        setDiscordUrl(discordLoginUrl);
        break;
      case "Slack":
        installSlack();
        break;
      case "Messenger":
        // setUrl(facebookUrl);
        break;
      default:
        console.log("App not supported");
        return;
    }
  };

  // Instagram Post
  const { mutate, data, error } = usePostInstagramData();

  useEffect(() => {
    const code = searchParams.get("code");
    console.log(code);

    if (url) {
      router.push(url);
    }

    if (code) {
      console.log("request being made");
      mutate(code);
    }
  }, [url, searchParams, mutate]);

  // Effect to handle Discord URL redirection
  // shs
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

    // console.log(code, guildId, permission);
    if (code && guildId && permission) {
      loginWithDiscord(code, guildId, permission);
    }
  }, [searchParams]);

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="max-w-[75rem]">
          <DialogHeader>
            <DialogTitle></DialogTitle>
          </DialogHeader>
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

              <div className="w-[30.4%] border border-[#EEEFF1] pt-9 px-12 h-[400px]">
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
      {/* {isLoading && (
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
      )} */}
    </>
  );
};

export default InsatallModal;
