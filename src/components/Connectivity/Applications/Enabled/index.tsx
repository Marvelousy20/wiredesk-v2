"use client";
import { useState } from "react";

import Image from "next/image";
import { Button } from "../../../ui/button";


const Enabled = () => {
  const data = undefined;
 

  return (
    <div className="text-black w-full">
      
      {data === undefined ?
      <div className=" flex justify-center p-[58px]">
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
        
        </div>

        <div className="max-w-[58rem] mx-auto mt-8">
          <h1 className="font-semibold text-black">Installed applications</h1>

       
        </div>
        <div>
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
      </div>
      }


    
      
    </div>
  );
};

export default Enabled;
