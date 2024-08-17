import Image from "next/image";
import { Button } from "@/components/ui/button";
import ChatDetails from "./ChatDetails";

export default function ChatInfo() {
  return (
    <div className="">
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
      <div className="mt-2 px-5 content-height overflow-auto pb-10">
        {/* <p className="text-center text-xxs text-[#37352FBF] font-light mb-3">
          Today
        </p>
        <div>
          <div className="flex justify-end items-end gap-[7px] mb-[20px] ">
            <p className="bg-primary-light rounded-[10px] text-xs font-light text-black p-4 max-w-[400px]">
              Hi Books, my name is Sonata welcome to spurs. How may i be of help
              today
            </p>
            <Image
              src="/main/chatinfo/james-avatar.svg"
              alt="edit"
              width={20}
              height={20}
            />
          </div>
          <div>
            <p className="text-center text-xxs text-[#37352FBF] font-light py-3">
              New message
            </p>
          </div>
          <div className="flex justify-start items-end gap-[7px] my-[20px] ">
            <Image
              src="/main/chatinfo/james-avatar.svg"
              alt="edit"
              width={20}
              height={20}
            />
            <p className="bg-gray-60 rounded-[10px] text-xs text-black font-light p-4 max-w-[400px] ">
              Hi Alex, I’m doing well, thank you. How about you?
            </p>
          </div>
          <div className="flex justify-center gap-x-2">
            <p className=" text-xxs text-[#37352FBF] font-light py-3">
              This chat has been transferred to Mary Ancelotti
            </p>
            <Image
              src="/main/chatinfo/james-avatar.svg"
              alt="edit"
              width={20}
              height={20}
            />
          </div>
          <div className="flex justify-end items-end gap-[7px] my-[20px] ">
            <p className="bg-primary-light rounded-[10px] text-xs text-black font-light p-4 max-w-[400px] ">
              {" "}
              I’m great, thanks for asking! I wanted to follow up on our
              previous conversation about streamlining your company&apos;s
              customer management processes. Have you had a chance to think
              about implementing our CRM software?
            </p>
            <Image
              src="/main/chatinfo/james-avatar.svg"
              alt="edit"
              width={20}
              height={20}
            />
          </div>
          <div className="flex justify-start items-end gap-[7px] my-[40px] ">
            <Image
              src="/main/chatinfo/james-avatar.svg"
              alt="edit"
              width={20}
              height={20}
            />
            <p className="bg-gray-60 rounded-[10px] text-xs text-black font-light p-4 h-[72px] max-w-[400px]">
              Hi Alex, I&apos;m doing well, thank you. How about you?
            </p>
          </div>
        </div> */}

        <ChatDetails />
      </div>
    </div>
  );
}
