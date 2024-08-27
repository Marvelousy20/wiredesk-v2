import Image from "next/image";
import { Button } from "@/components/ui/button";
import ChatDetails from "./ChatDetails";

export default function ChatInfo() {
  return (
    <div className="w-full relative">
      <div className="px-3 border-b border-divider-on-light">
        <div className="flex items-center justify-between h-[56px] px-2">
          <div className="flex items-center gap-2">
            <Image
              src="/main/chatinfo/james-avatar.svg"
              alt="avatar"
              width={32}
              height={32}
              className="rounded-full"
            />
            <h1 className="text-black text-md font-semibold">James Books</h1>
          </div>

          <div className="flex items-center gap-2 ">
            <div>
              <Image
                src="/main/chatinfo/options.svg"
                alt="edit"
                width={20}
                height={20}
              />
            </div>
            <div>
              <Image
                src="/main/chatinfo/star.svg"
                alt="edit"
                width={20}
                height={20}
              />
            </div>
            <Button className="flex items-center gap-2 bg-gray-60 rounded-[4px] font-medium text-sm px-2 text-black h-[31px]">
              <Image
                src="/main/chatinfo/clock.svg"
                alt="edit"
                width={20}
                height={20}
              />
              <p>Snooze</p>
            </Button>
            <Button className="flex items-center gap-2 rounded-[4px] px-2 font-medium text-sm h-[28px]">
              <Image
                src="/main/chatinfo/close.svg"
                alt="edit"
                width={20}
                height={20}
              />
              <p>Close</p>
            </Button>
          </div>
        </div>
      </div>
      <div className="mt-2 content-height pb-10 w-full relative">
        <ChatDetails />
      </div>
    </div>
  );
}
