import Image from "next/image";
import { useState } from "react";

interface SearchToolsProps {
  id: number;
  name: string;
  img: string;
}

export default function Search() {
  const searchTools: SearchToolsProps[] = [
    { id: 1, name: "Assigned to", img: "/main/search/account_box.svg" },
    { id: 2, name: "Tag", img: "/main/search/label.svg" },
    { id: 3, name: "Customer", img: "/main/search/person.svg" },
    { id: 4, name: "Company", img: "/main/search/domain.svg" },
    { id: 5, name: "Created", img: "/main/search/date_range.svg" },
    { id: 6, name: "Status", img: "/main/search/account_box.svg" },
    { id: 7, name: "Topic", img: "/main/search/topic.svg" },
  ];
  const [search, setSearch] = useState<string>("");
  const handleCancel = () => {
    setSearch("");
  };

  const [openedItemId, setOpenedItemId] = useState<number | null>(null);

  const handleClick = (id: number) => {
    if (id !== 1 && id !== 5) {
      setOpenedItemId(openedItemId === id ? null : id);
    }
  };

  return (
    <div className="w-full flex-grow">
      <div className="flex items-center h-[56px] border-b border-divider-on-light w-full px-5">
        <div className="flex items-center gap-x-2">
          <div className="">
            <Image
              src="/main/search/arrow-back.svg"
              alt="arrow-back"
              width={20}
              height={20}
            />
          </div>

          <div className="w-0.5 h-6 bg-[#F1F0F4] rounded-full"></div>

          <div className="">
            <Image
              src="/main/search/search.svg"
              alt="search"
              width={20}
              height={20}
              className="text-md text-inactive font-semibold"
            />
          </div>
        </div>

        <input
          value={search}
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search"
          className="pl-2 text-md text-inactive border border-gray-300 rounded-lg  w-full border-none focus:outline-none "
        />
        <div className="" onClick={handleCancel}>
          <Image
            src="/main/search/close.svg"
            alt="search"
            width={20}
            height={20}
          />
        </div>
      </div>
      <div className="flex items-center gap-x-2.5 mt-[13px] px-5">
        <div className="bg-[#F1F0F4] rounded-md h-8 w-8 flex items-center justify-center">
          <p className="text-darkest text-xs font-medium">All</p>
        </div>
        <div className="border-r-2 border-gray-60"></div>
        <div className="flex items-center gap-x-4 flex-1">
          {searchTools.map((item) => (
            <div
              key={item.id}
              className="flex text-xs items-center gap-x-1 text-darkest bg-[#F1F0F4] h-8 pr-1.5 pl-2 rounded-md cursor-pointer group"
              onClick={() => handleClick(item.id)}
            >
              <div className="flex items-center justify-center h-5 w-5">
                <Image
                  src={item.img}
                  alt={item.name}
                  width={14}
                  height={14}
                  className="transition-all duration-200 group-hover:[filter:invert(27%)_sepia(51%)_saturate(1920%)_hue-rotate(244deg)_brightness(96%)_contrast(95%)]"
                />
              </div>
              <p
                className={`font-medium transition-colors duration-200 ${
                  openedItemId === item.id
                    ? "text-primary"
                    : "text-[#101010] group-hover:text-primary"
                }`}
              >
                {openedItemId === item.id ? `${item.name}: cisco` : item.name}
              </p>
            </div>
          ))}
          <div className="flex gap-x-2 rounded-md p-2.5">
            <Image
              src="/main/search/add.svg"
              alt="search"
              width={16}
              height={12}
            />
            <p className="text-darkest text-xs font-medium">Add filter</p>
          </div>
        </div>
        <div className="flex gap-x-2 rounded-md p-2.5">
          <p className="text-darkest text-xs font-medium">Relevance</p>
          <Image
            src="/main/search/arrow_down.svg"
            alt="search"
            width={12}
            height={12}
          />
        </div>
      </div>
      <div className="flex justify-center items-center h-[80vh] max-w-[22.125rem] mx-auto">
        <div className="flex items-center flex-col gap-y-2 rounded-md p-[10px] mt-2">
          <Image
            src="/main/search/big_search.svg"
            alt="search"
            width={64}
            height={64}
          />
          <div className="">
            <p className="text-dark-grey text-lg font-semibold text-center">
              Search conversations and tickets
            </p>
            <p className="text-inactive opacity-60 text-sm font-medium mt-2 max-w-[22.125rem] mx-auto text-center">
              Use relevant keywords, apply filters for precise results and save
              frequent searches for quick access.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
