import Image from "next/image";


const ChannelsPopover = () => {
  return (
    <div className="">
    <div className="flex items-center justify-between mb-2 px-4 gap-2">
      <Image
        src="/main/second/searchp.svg"
        alt="edit"
        width={18}
        height={18}
      />
      <input
        type="text"
        placeholder="Search teams"
        className="w-full text-[#68666299] text-xxs outline-none"
      />
    </div>

    <div className="h-[1px] bg-[#F1F0F4]" />

    <div className="px-4 mt-2 space-y-1">
      <div className="flex items-center justify-between h-8">
        <div className="flex items-center gap-1.5">
          <Image
            src="/main/second/james-avatar.svg"
            alt="edit"
            width={20}
            height={20}
          />
          <span className="text-xxs font-medium text-black">James Ander...</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="text-xxs font-medium text-black">12</span>
          <Image
            src="/main/second/unpin.svg"
            alt="edit"
            width={20}
            height={20}
          />
        </div>
      </div>

      <div className="flex items-center justify-between h-8">
        <div className="flex items-center gap-1.5">
          <Image
            src="/main/second/james.svg"
            alt="edit"
            width={20}
            height={20}
          />
          <span className="text-xxs font-medium text-black">James Ander...</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="text-xxs font-medium text-black">12</span>
          <Image
            src="/main/second/unpin.svg"
            alt="edit"
            width={20}
            height={20}
          />
        </div>
      </div>
      <div className="flex items-center gap-1.5">
            <Image
              src="/main/second/unpin.svg"
              alt="edit"
              width={20}
              height={20}
            />
            <span className="text-xxs font-medium text-black">
              Unpin folder
            </span>
          </div>
        </div>

    </div>
  
  );
};

export default ChannelsPopover;
