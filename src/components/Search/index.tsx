import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {useState} from "react"

export default function Search() {
  const searchTools = [
    {id: 1,
      name: "Assiagned to",
      cisco: false,
    }
  ]
  const [open, setOpen] = useState(true)
  const handleClick =()=>{
    setOpen(!open)


  }
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
          type="text"
          placeholder="Search"
          className="pl-2 text-md text-inactive border border-gray-300 rounded-lg  w-full border-none focus:outline-none "
        />
      </div>
      <div className="flex gap-x-[10px] ml-[20px] mt-[13px] ">
        <div className="bg-gray-60 rounded-md p-[10px] ">
        {open? <p className="text-[#101010] text-xs font-medium  ">All</p> : <p className="text-[#101010] text-xs font-medium  ">All : cisco</p>}
          
        </div>
        <div className="border-r-2 border-gray-60 "></div>
        <div className="flex gap-x-4 flex-1">
          <div className="flex gap-x-2 bg-gray-60 rounded-md p-[10px]" 
          onClick={handleClick}>
            <Image
              src="/main/search/account_box.svg"
              alt="search"
              width={14}
              height={14}
            />
             {open?  <p className="text-[#101010] text-xs font-medium ">
              Assigned to</p>:  <p className="text-[#101010] text-xs font-medium ">
              Assigned to: cisco</p> }
           
          </div>
          <div className="flex gap-x-2 bg-gray-60 rounded-md p-[10px]">
            <Image
              src="/main/search/label.svg"
              alt="search"
              width={13}
              height={10}
            />
            {open? <p className="text-[#101010] text-xs font-medium ">Tag</p> : 
            <p className="text-[#101010] text-xs font-medium ">Tag: cisco</p>}
            
          </div>

          <div className="flex gap-x-2 bg-gray-60 rounded-md p-[10px]">
            <Image
              src="/main/search/person.svg"
              alt="search"
              width={12}
              height={12}
            />
                 {open? <p className="text-[#101010] text-xs font-medium ">Customer</p> : 
            <p className="text-[#101010] text-xs font-medium ">Customer: cisco</p>}
          </div>
          <div className="flex gap-x-2 bg-gray-60 rounded-md p-[10px]">
            <Image
              src="/main/search/domain.svg"
              alt="search"
              width={16}
              height={14}
            />
                {open? <p className="text-[#101010] text-xs font-medium ">Comapny</p> : 
            <p className="text-[#101010] text-xs font-medium ">Company: cisco</p>}
          </div>
          <div className="flex gap-x-2 bg-gray-60 rounded-md p-[10px]">
            <Image
              src="/main/search/date_range.svg"
              alt="search"
              width={14}
              height={16}
            />
                 {open? <p className="text-[#101010] text-xs font-medium ">Status</p> : 
            <p className="text-[#101010] text-xs font-medium ">Cr: cisco</p>}
          </div>
          <div className="flex gap-x-2 bg-gray-60 rounded-md p-[10px]">
            <Image
              src="/main/search/account_box.svg"
              alt="search"
              width={14}
              height={14}
            />
            <p className="text-[#101010] text-xs font-medium ">Status</p>
          </div>

          <div className="flex gap-x-2 bg-gray-60 rounded-md p-[10px]">
            <Image
              src="/main/search/topic.svg"
              alt="search"
              width={16}
              height={12}
            />
            <p className="text-[#101010] text-xs font-medium ">Topic</p>
          </div>
          <div className="flex gap-x-2 rounded-md p-[10px]">
            <Image
              src="/main/search/add.svg"
              alt="search"
              width={16}
              height={12}
            />
            <p className="text-[#101010] text-xs font-medium ">Add filter</p>
          </div>
        </div>

        <div className="flex gap-x-2 rounded-md p-[10px] mr-6">
          <p className="text-[#101010] text-xs font-medium ">Relevance</p>
          <Image
            src="/main/search/arrow_down.svg"
            alt="search"
            width={12}
            height={12}
          />
        </div>
      </div>
      <div className="flex justify-center items-center h-full">
        <div className="flex items-center flex-col gap-x-2 rounded-md p-[10px]">
          <Image
            src="/main/search/big_search.svg"
            alt="search"
            width={64}
            height={64}
          />
          <div className="w-[354px]">
          <p className="text-dark_grey text-lg font-semibold ">
            Search conversations and tickets
          </p>
          <p className="text-inactive text-sm font-medium w-[354px]">
            Use relevant keywords, apply filters for precise results and save frequent searches for quick access.
          </p>

          </div>
         
        </div>
      </div>
    </div>
  );
}
