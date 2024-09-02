import Image from "next/image";
import { MdAdd } from "react-icons/md";
import { ChevronRight } from "lucide-react";

const WiredeskPopover = () => {
  return (
    <div className="">
      <div className="flex items-center justify-between mb-2 px-4">
        <h2 className="text-sm font-semibold text-black">WireDesk</h2>

        <div className="flex items-center justify-center h-5 w-5">
          <Image
            src="/main/second/popovers/edit.svg"
            alt="edit"
            width={18}
            height={18}
          />
        </div>
      </div>

      <div className="h-[1px] bg-[#F1F0F4]" />

      <div className="px-4 mt-2 space-y-1">
        <div className="flex items-center justify-between h-8">
          <div className="flex items-center gap-1.5">
            <MdAdd className="h-[18px] w-[18px]" color="#232529" />
            <span className="text-xxs font-medium text-black">Add teams</span>
          </div>
          <ChevronRight className="h-4 w-4 shrink-0 transition-transform duration-200" />
        </div>

        <div className="flex items-center justify-between h-8">
          <div className="flex items-center gap-1.5">
            <Image
              src="/main/second/popovers/add_teammates.svg"
              alt="edit"
              width={18}
              height={18}
            />
            <span className="text-xxs font-medium text-black">
              Add teammates
            </span>
          </div>
          <ChevronRight className="h-4 w-4 shrink-0 transition-transform duration-200" />
        </div>

        <div className="flex items-center justify-between h-8">
          <div className="flex items-center gap-1.5">
            <Image
              src="/main/second/popovers/add_tickets.svg"
              alt="edit"
              width={18}
              height={18}
            />
            <span className="text-xxs font-medium text-black">Add tickets</span>
          </div>
          <ChevronRight className="h-4 w-4 shrink-0 transition-transform duration-200" />
        </div>

        <div className="flex items-center justify-between h-8">
          <div className="flex items-center gap-1.5">
            <Image
              src="/main/second/popovers/add_channels.svg"
              alt="edit"
              width={18}
              height={18}
            />
            <span className="text-xxs font-medium text-black">
              Add channels
            </span>
          </div>
          <ChevronRight className="h-4 w-4 shrink-0 transition-transform duration-200" />
        </div>
      </div>

      <div className="h-[1px] bg-[#F1F0F4] mt-4" />

      <div className="px-4">
        <div className="flex items-center justify-between h-8">
          <div className="flex items-center gap-1.5">
            <Image
              src="/main/second/popovers/manage.svg"
              alt="edit"
              width={18}
              height={18}
            />
            <span className="text-xxs font-medium text-black">Manage</span>
          </div>
          <ChevronRight className="h-4 w-4 shrink-0 transition-transform duration-200" />
        </div>
      </div>
    </div>
  );
};

export default WiredeskPopover;
