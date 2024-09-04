import Image from "next/image";

const TeamsPopover = () => {
  return (
    <div className="">
      <div className="flex items-center justify-between mb-2 px-4 gap-2">
        <Image
          src="/main/second/searchp.svg"
          alt="edit"
          width={16}
          height={16}
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
              src="/main/second/mentions.png"
              alt="edit"
              width={20}
              height={20}
            />
            <span className="text-xxs font-medium text-black">Mentions</span>
          </div>
          <div className="flex items-center text-start gap-1">
            <div className="w-6 h-6 flex items-center justify-center">
              <span className="text-xxs font-medium text-black">12</span>
            </div>
            <div className="w-6 h-6 flex items-center justify-center">
              <Image
                src="/main/second/unpin.svg"
                alt="edit"
                width={16}
                height={16}
              />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between h-8">
          <div className="flex items-center gap-1.5">
            <Image
              src="/main/second/socials.png"
              alt="edit"
              width={20}
              height={20}
            />
            <span className="text-xxs font-medium text-black">Socials</span>
          </div>
          <div className="flex items-center text-start gap-1">
            <div className="w-6 h-6 flex items-center justify-center">
              <span className="text-xxs font-medium text-black">43</span>
            </div>
            <div className="w-6 h-6 flex items-center justify-center">
              <Image
                src="/main/second/unpin.svg"
                alt="edit"
                width={16}
                height={16}
              />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between h-8">
          <div className="flex items-center gap-1.5">
            <Image
              src="/main/second/support.png"
              alt="edit"
              width={20}
              height={20}
            />
            <span className="text-xxs font-medium text-black">
              Tier/Support
            </span>
          </div>
          <div className="flex items-center text-start gap-1">
            <div className="w-6 h-6 flex items-center justify-center">
              <span className="text-xxs font-medium text-black">17</span>
            </div>
            <div className="w-6 h-6 flex items-center justify-center">
              <Image
                src="/main/second/unpin.svg"
                alt="edit"
                width={16}
                height={16}
              />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between h-8">
          <div className="flex items-center gap-1.5">
            <Image
              src="/main/second/technical.png"
              alt="edit"
              width={20}
              height={20}
            />
            <span className="text-xxs font-medium text-black">Technical</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-6 h-6 flex items-center justify-center">
              <span className="text-xxs font-medium text-black">26</span>
            </div>
            <div className="w-6 h-6 flex items-center justify-center">
              <Image
                src="/main/second/unpin.svg"
                alt="edit"
                width={16}
                height={16}
              />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between h-8">
          <div className="flex items-center gap-1.5">
            <Image
              src="/main/second/unpin.svg"
              alt="edit"
              width={16}
              height={16}
            />
            <span className="text-xxs font-medium text-black">
              Unpin folder
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamsPopover;
