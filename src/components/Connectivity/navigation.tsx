import Image from "next/image";
export default function Connectivity() {
  return (
    <div>
      <div className="flex justify-between items-center h-[56px] border-b border-black px-3">
        <div className="text-md font-semibold text-white ">Connectivity</div>

        <Image
          src="/main/second/collapse-left.svg"
          alt="collapse-left"
          width={20}
          height={20}
        />
      </div>
    </div>
  );
}
