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
                  <svg
                    width="23"
                    height="18"
                    viewBox="0 0 21 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.6629 9.93715C20.779 9.66324 20.779 9.19896 19.6629 8.91957L17.1977 8.30601C16.0828 8.0321 14.9393 6.88441 14.6612 5.76959L14.0477 3.30438C13.7738 2.18819 13.3081 2.18819 13.0301 3.30438L12.4165 5.76959C12.1426 6.88441 10.9936 8.02799 9.87873 8.30601L7.41353 8.91957C6.29871 9.19348 6.29871 9.65913 7.41353 9.93715L9.87873 10.5507C10.9936 10.8246 12.1371 11.9737 12.4165 13.0885L13.0301 15.5537C13.304 16.6685 13.7683 16.6685 14.0477 15.5537L14.6612 13.0885C14.9351 11.9737 16.0828 10.8301 17.1977 10.5507L19.6629 9.93715ZM8.72694 3.81386C9.17615 3.70156 9.17615 3.5153 8.72694 3.40299L7.73127 3.1551C7.49041 3.08061 7.27135 2.94851 7.09308 2.77023C6.9148 2.59196 6.7827 2.3729 6.70821 2.13204L6.46032 1.13774C6.34801 0.687159 6.16312 0.687159 6.04945 1.13774L5.80156 2.13204C5.72707 2.3729 5.59496 2.59196 5.41669 2.77023C5.23842 2.94851 5.01936 3.08061 4.7785 3.1551L3.78283 3.40299C3.33362 3.5153 3.33362 3.70156 3.78283 3.81386L4.7785 4.06038C5.01919 4.13519 5.23809 4.2674 5.41631 4.44563C5.59454 4.62385 5.72675 4.84275 5.80156 5.08344L6.04945 6.07911C6.16175 6.52832 6.34664 6.52832 6.46032 6.07911L6.70821 5.08344C6.78301 4.84275 6.91523 4.62385 7.09345 4.44563C7.27168 4.2674 7.49057 4.13519 7.73127 4.06038L8.72694 3.81386ZM5.78512 12.6311C6.23434 12.5188 6.23434 12.3325 5.78512 12.2202L4.78946 11.9737C4.5483 11.8985 4.32911 11.7656 4.15085 11.5867C3.97259 11.4077 3.84063 11.188 3.7664 10.9465L3.51851 9.95085C3.4062 9.50164 3.22131 9.50164 3.10764 9.95085L2.85564 10.9465C2.78083 11.1872 2.64862 11.4061 2.47039 11.5843C2.29217 11.7626 2.07327 11.8948 1.83258 11.9696L0.836911 12.2161C0.387696 12.3284 0.387696 12.5147 0.836911 12.627L1.83258 12.8749C2.0739 12.9497 2.29326 13.0825 2.47157 13.2615C2.64988 13.4405 2.78173 13.6604 2.85564 13.902L3.10353 14.8963C3.21583 15.3469 3.40072 15.3469 3.5144 14.8963L3.76229 13.902C3.83678 13.6612 3.96888 13.4421 4.14716 13.2638C4.32543 13.0856 4.54449 12.9535 4.78535 12.879L5.78512 12.6311Z"
                      fill="#232529"
                    />
                  </svg>

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
