"use client";
import { useState } from "react";
import { Input } from "@headlessui/react";
import Image from "next/image";
import { Button } from "../../ui/button";


const InsatlledApplications = () => {
  const data = undefined;
 

  return (
    <div className="text-black">
      <div className="h-[56px] border-b flex items-center pl-5">
        <h1 className="text-black text-xl font-semibold">Connectivity</h1>
      </div>
      {data === undefined ?
      <div className="flex justify-center p-[58px]">
        <div className=" w-[21.31rem]">
          <div>
            <Image src="./connectivity/noApp.svg" alt="No App" width={308} height={309}/>
          </div>
          <div>
            <p className="font-[600] text-[1.75rem] ">No Installed Application</p>
            <p className="text-center">You currently have no applications installed. Connect your first app to get started!</p>
          </div>
        </div>
      </div>
        :
      <div>
        <div className="flex justify-center mt-4 max-w-[47rem] mx-auto relative">
          <div className="absolute top-3 left-4">
            <Image src="/search.svg" alt="svg" width={20} height={20} />
          </div>
          <Input
            type="text"
            placeholder="Search for an app"
            className="w-full h-10 shadow-input pl-12 text-blackInactive placeholder:text-blackInactive text-sm font-medium border border-[#EEEFF1] rounded-[5px]"
          />
        </div>

        <div className="max-w-[58rem] mx-auto mt-8">
          <h1 className="font-semibold text-black">Installed applications</h1>

          <div className="grid grid-cols-3 gap-8 mt-4">
            {data?.map((a, i) => (
              <div
                key={i}
                className="border border-[#EEEFF1] px-4 py-[1.875rem]"
              >
                <Image
                  src="/socials/telegram.svg"
                  alt="img"
                  width={32}
                  height={32}
                />
                <p className="text-sm font-medium mt-3">{a.type}</p>
                <Button className="bg-black rounded-[5px] px-2.5 py-[0.3125rem] text-white text-sm font-medium flex items-center gap-2 mt-3">
                  <Image
                    src="/page_info.svg"
                    alt="page_info"
                    width={20}
                    height={20}
                  />
                  Manage
                </Button>

               
              </div>
            ))}
          </div>
        </div>
      </div>
      }


    
      
    </div>
  );
};

export default InsatlledApplications;
