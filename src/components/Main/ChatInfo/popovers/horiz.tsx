import Image from "next/image";
import { MdAdd } from "react-icons/md";
import { ChevronRight } from "lucide-react";

const MoreHorizPopover = ({ isSender }: { isSender: boolean }) => {
  return (
    // <div className="absolute right-7 !text-black shadow-filter rounded-[4px] bg-white">
    <div>
      <div className="px-1.5 my-2 space-y-1">
        <div className="flex items-center justify-between h-8 hover:bg-[#F1F0F4] rounded-[4px] px-2">
          <div className="flex items-center gap-1.5">
            <Image
              src="/main/chatdetails/reply.svg"
              alt="copy"
              width={18}
              height={18}
            />
            <span className="text-xxs font-medium text-black">Reply</span>
          </div>
        </div>

        <div className="flex items-center justify-between h-8 hover:bg-[#F1F0F4] rounded-[4px] px-2 cursor-pointer">
          <div className="flex items-center gap-1.5">
            <Image
              src="/main/chatdetails/tag.svg"
              alt="copy"
              width={18}
              height={18}
            />
            <span className="text-xxs font-medium text-black">Tag Message</span>
          </div>
        </div>

        <div className="flex items-center justify-between h-8 hover:bg-[#F1F0F4] rounded-[4px] px-2 cursor-pointer">
          <div className="flex items-center gap-1.5">
            <Image
              src="/main/chatdetails/copy.svg"
              alt="copy"
              width={18}
              height={18}
            />
            <span className="text-xxs font-medium text-black">Copy</span>
          </div>
        </div>

        <div className="flex items-center justify-between h-8 hover:bg-[#F1F0F4] rounded-[4px] px-2 cursor-pointer">
          <div className="flex items-center gap-1.5">
            <Image
              src="/main/chatdetails/add_to_ai.svg"
              alt="add"
              width={18}
              height={18}
            />
            <span className="text-xxs font-medium text-black hover:bg-[#F1F0F4] rounded-[4px]">
              Add to AI training
            </span>
          </div>
        </div>

        {isSender && (
          <div className="flex items-center justify-between h-8 hover:bg-[#F1F0F4] rounded-[4px] px-2 cursor-pointer">
            <div className="flex items-center gap-1.5">
              <Image
                src="/main/chatdetails/add_to_macros.svg"
                alt="add"
                width={18}
                height={18}
              />
              <span className="text-xxs font-medium text-black hover:bg-[#F1F0F4] rounded-[4px]">
                Add to Macros
              </span>
            </div>
          </div>
        )}

        <div className="flex items-center justify-between h-8 hover:bg-[#F1F0F4] rounded-[4px] px-2 cursor-pointer">
          <div className="flex items-center gap-1.5">
            <Image
              src="/main/chatdetails/translate.svg"
              alt="translate"
              width={18}
              height={18}
            />
            <span className="text-xxs font-medium text-black">Translate</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreHorizPopover;
