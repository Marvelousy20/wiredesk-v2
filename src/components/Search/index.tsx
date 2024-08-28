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
const [search, setSearch] = useState<string>('');
const handleCancel = () =>{
  setSearch('')

}


  const [openedItemId, setOpenedItemId] = useState<number | null>(null);

  const handleClick = (id: number) => {
   
    if (id !== 1 && id !== 5) {
      setOpenedItemId(openedItemId === id ? null : id);
    }
  };

  return (
    <div className="w-full flex-grow">
      <div className="flex items-center h-[56px] border-b border-divider-on-light px-3 w-full">
        <div className="border-r-2 border-divider-on-light p-[6px] ">
          <Image
            src="/main/search/arrow-back.svg"
            alt="arrow-back"
            width={20}
            height={20}
          />
        </div>

        <div className="text-md font-semibold pl-[11px]">
          <Image
            src="/main/search/search.svg"
            alt="search"
            width={20}
            height={20}
          />
        </div>
        <input
          value={search}
          type="text"
          onChange={(e)=> setSearch(e.target.value)}
          placeholder="Search"
          className="pl-2 text-md text-inactive border border-gray-300 rounded-lg  w-full border-none focus:outline-none "
        />
        <div
        className="pr-[25px]"
         onClick={handleCancel}>
        <Image
            src="/main/search/close.svg"
            alt="search"
            width={20}
            height={20}
          />
        </div>
      </div>
      <div className="flex gap-x-[10px] ml-[20px] mt-[13px] ">
        <div className="bg-gray-60 rounded-md p-[10px] ">
          <p className="text-[#101010] text-xs font-medium">All</p>
        </div>
        <div className="border-r-2 border-gray-60 "></div>
        <div className="flex gap-x-4 flex-1">
          {searchTools.map((item) => (
            <div
              key={item.id}
              className={`flex gap-x-2 bg-gray-60 rounded-md p-[10px] ${
                item.id === 3 || item.id === 6 ? "cursor-default" : "cursor-pointer"
              }`}
              onClick={() => handleClick(item.id)}
            >
              <Image
                src={item.img}
                alt={item.name}
                width={14}
                height={14}
              />
              <p 
              className={`text-[#101010] text-xs font-medium hover:text-primary  ${
                openedItemId === item.id
                  ? "text-primary"
                  : "text-[#101010]"
              }`}>
                {openedItemId === item.id
                  ? `${item.name}: cisco`
                  : item.name}
              </p>
            </div>
          ))}
          <div className="flex gap-x-2 rounded-md p-[10px]">
            <Image
              src="/main/search/add.svg"
              alt="search"
              width={16}
              height={12}
            />
            <p className="text-[#101010] text-xs font-medium">Add filter</p>
          </div>
        </div>
        <div className="flex gap-x-2 rounded-md p-[10px] mr-6">
          <p className="text-[#101010] text-xs font-medium">Relevance</p>
          <Image
            src="/main/search/arrow_down.svg"
            alt="search"
            width={12}
            height={12}
          />
        </div>
      </div>
      <div className="flex justify-center items-center h-full">
        <div className="flex items-center flex-col gap-y-2 rounded-md p-[10px]">
          <Image
            src="/main/search/big_search.svg"
            alt="search"
            width={64}
            height={64}
          />
          <div className="w-[354px]">
            <p className="text-dark_grey text-lg font-semibold text-center">
              Search conversations and tickets
            </p>
            <p className="text-inactive text-sm font-medium w-[354px] text-center">
              Use relevant keywords, apply filters for precise results and
              save frequent searches for quick access.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
