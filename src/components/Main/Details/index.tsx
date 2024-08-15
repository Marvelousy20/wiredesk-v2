import Image from "next/image";

export default function Details() {
  return (
    <div>
      <div className="flex justify-between items-center h-[56px] border-b border-divider-on-light px-5">
        <div className="text-md font-semibold text-black">Details</div>

        <Image
          src="/main/second/collapse-right.svg"
          alt="collapse-left"
          width={20}
          height={20}
        />
      </div>
    </div>
  );
}
