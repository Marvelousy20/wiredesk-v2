import Image from "next/image";

export default function Search() {
  return (
    <div className="w-full flex-grow">
      <div className="flex items-center h-[56px] border-b border-divider-on-light px-3 w-full">
        <div className="">
          <Image
            src="/main/search/arrow-back.svg"
            alt="arrow-back"
            width={20}
            height={20}
          />
        </div>
        <div className="text-md font-semibold">
          <Image
            src="/main/search/search.svg"
            alt="search"
            width={20}
            height={20}
          />
        </div>
      </div>
    </div>
  );
}
