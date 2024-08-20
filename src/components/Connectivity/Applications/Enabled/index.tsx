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
      </div>
      }


    
      
    </div>
  );
};

export default Enabled;
