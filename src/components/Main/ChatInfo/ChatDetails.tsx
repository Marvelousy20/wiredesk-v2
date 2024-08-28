"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export default function ChatDetails() {
  const contentRef = useRef<HTMLDivElement>(null);
  const scrollbarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const content = contentRef.current;
    const scrollbar = scrollbarRef.current;

    if (!content || !scrollbar) return;

    const updateScrollbar = () => {
      const contentHeight = content.clientHeight;
      const scrollHeight = content.scrollHeight;
      const scrollTop = content.scrollTop;

      // Calculate the height ratio
      const scrollRatio = contentHeight / scrollHeight;

      // Set the scrollbar height to be proportional, with a minimum of 20px
      const scrollbarHeight = Math.max(scrollRatio * contentHeight, 20);

      // Calculate the top position
      const scrollbarTop = (scrollTop / scrollHeight) * contentHeight;

      scrollbar.style.height = `${scrollbarHeight}px`;
      scrollbar.style.top = `${scrollbarTop}px`;
      scrollbar.style.opacity = "1";
    };

    const hideScrollbar = () => {
      if (scrollbar) scrollbar.style.opacity = "0";
    };

    const showScrollbar = () => {
      if (scrollbar) scrollbar.style.opacity = "1";
    };

    content.addEventListener("scroll", updateScrollbar);
    content.addEventListener("mouseover", showScrollbar);
    content.addEventListener("mouseout", hideScrollbar);

    // Initial update
    updateScrollbar();

    return () => {
      content.removeEventListener("scroll", updateScrollbar);
      content.removeEventListener("mouseover", showScrollbar);
      content.removeEventListener("mouseout", hideScrollbar);
    };
  }, []);
  return (
    <div className="text-[0.75rem] mt-4 w-full h-full">
      <h3 className="text-center text-xxs text-[#37352FBF]">Today</h3>

      <div className="mt-3 flex flex-col h-full relative px-5">
        <div
          ref={contentRef}
          className="flex-grow overflow-y-auto h-full pr-2 hide-scrollbar"
          id="chatContent"
        >
          <div>
            <div className="flex justify-end mb-5 relative">
              <h1 className="bg-primary-light rounded-[10px] p-4 text-xxs leading-[20px] text-black max-w-[25rem]">
                Hi Books, my name is Sonata welcome to spurs. How may i be of
                help today
              </h1>

              <div className="flex items-end ml-[0.43rem]">
                <Image
                  src="/main/chatinfo/james-avatar.svg"
                  alt="avatar"
                  width={19}
                  height={19}
                />
              </div>
            </div>
          </div>

          <div>
            <div className="flex justify-end mb-5 relative">
              <h1 className="bg-primary-light rounded-[10px] p-4 text-xxs leading-[20px] text-black max-w-[25rem]">
                Hi Books, my name is Sonata welcome to spurs. How may i be of
                help today
              </h1>

              <div className="flex items-end ml-[0.43rem]">
                <Image
                  src="/main/chatinfo/james-avatar.svg"
                  alt="avatar"
                  width={19}
                  height={19}
                />
              </div>
            </div>
          </div>

          {/* New Message */}

          <div className="text-center my-3 mx-auto">
            <h2 className="new relative bg-white top-2 inline-block px-1 text-sbbt">
              New Message
            </h2>
            <div className="line bg-[#EAECF0] h-[1px]"></div>
          </div>

          <div className="flex py-5">
            <div className="flex items-end mr-[0.43rem]">
              <Image
                src="/main/chatinfo/lucas.svg"
                alt="avatar"
                width={19}
                height={19}
              />
            </div>
            <div className="">
              <h1 className="bg-gray-60 bg-opacity-10 rounded-[10px] p-4  max-w-[26rem] text-black text-xxs leading-[20px]">
                Hi Alex, I’m doing well, thank you. How about you?
              </h1>
            </div>
          </div>

          <div className="mt-3">
            <div className="flex justify-center items-center gap-2">
              <h4 className="text-sbbt text-xxs text-center">
                This chat has been transferred to Mary Ancelotti
              </h4>

              <Image
                src="/main/chatinfo/lucas.svg"
                alt="avatar"
                width={20}
                height={20}
              />
            </div>

            <div className="mt-3">
              <div className="flex justify-end">
                <h1 className=" bg-primary-light text-xxs leading-[20px] text-black rounded-[10px] p-4 max-w-[25rem]">
                  I’m great, thanks for asking! I wanted to follow up on our
                  previous conversation about streamlining your company&apos;s
                  customer management processes. Have you had a chance to think
                  about implementing our CRM software?
                </h1>

                <div className="flex items-end ml-2">
                  <Image
                    src="/main/chatinfo/james-avatar.svg"
                    alt="avatar"
                    width={19}
                    height={19}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-3">
            <div className="flex py-5">
              <div className="flex items-end mr-[0.43rem]">
                <Image
                  src="/main/chatinfo/lucas.svg"
                  alt="avatar"
                  width={19}
                  height={19}
                />
              </div>
              <div className="">
                <h1 className="bg-gray-60 bg-opacity-10 rounded-[10px] p-4 max-w-[26rem] text-black text-xxs leading-[20px]">
                  Hi Alex, I’m doing well, thank you. How about you?
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute right-0 top-0 bottom-0 w-1">
          <div
            ref={scrollbarRef}
            className="w-1 bg-[#C2C7D0] rounded-full absolute right-0 opacity-0 transition-opacity duration-300"
          />
        </div>

        <div className="flex-shrink-0 pb-5">
          <div className="text-center flex flex-col items-center mt-2 px-3">
            <div className="items-center px-4 pt-2.5 pb-3 bg-white shadow-md rounded-[12px] border border-[#F1F1F1] mt-4 w-full">
              <div>
                <input
                  type="text"
                  placeholder="Type a reply"
                  //   value={message}
                  //   onChange={(e) => setMessage(e.target.value)}
                  className="flex-grow h-[29px] text-xxs border border-gray-300 rounded-lg mr-2 w-full border-none focus:outline-none text-inactive"
                />
              </div>

              <div className="flex justify-between mt-5">
                <div className="flex items-end">
                  <Image
                    src="/main/chatinfo/more_horiz.svg"
                    alt="avatar"
                    width={20}
                    height={20}
                  />
                </div>

                <div className="flex gap-2.5 items-center justify-end">
                  <Image
                    src="/main/chatinfo/bookmark.svg"
                    alt="avatar"
                    width={20}
                    height={20}
                  />
                  <Image
                    src="/main/chatinfo/attach_file.svg"
                    alt="avatar"
                    width={20}
                    height={20}
                  />
                  <Image
                    src="/main/chatinfo/add_reaction.svg"
                    alt="avatar"
                    width={20}
                    height={20}
                  />

                  <Image
                    src="/main/chatinfo/star.svg"
                    alt="star"
                    width={20}
                    height={20}
                  />

                  <Button
                    className="text-white rounded-[4px] px-2.5 text-sm font-medium flex items-center h-[30px]"
                    // onClick={handleSendMessage}
                  >
                    Send | <ChevronDown className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
