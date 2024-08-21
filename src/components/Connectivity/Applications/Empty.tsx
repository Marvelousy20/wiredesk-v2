"use client";
import { useState } from "react";

import Image from "next/image";
import { Button } from "@/components/ui/button";

const Empty = () => {
  const data = undefined;

  return (
    <div className="text-black">
      {data === undefined ? (
        <div className="flex flex-col items-center justify-center h-[70vh]">
          <div className="">
            <Image
              src="./connectivity/noApp.svg"
              alt="No App"
              width={277}
              height={240}
            />
          </div>
          <div className="text-center">
            <p className="font-semibold text-2xl">No Installed Application</p>
            <p className="text-center text-inactive text-md font-normal max-w-[25rem] mx-auto mt-2">
              You currently have no applications installed. Connect your first
              app to get started!
            </p>
          </div>
          <div className="flex justify-center mt-3">
            <Button className="bg-primary rounded-[4px] px-4 h-[32px] text-white text-sm font-medium flex items-center gap-2">
              Connect applicatons
            </Button>
          </div>
        </div>
      ) : (
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
      )}
    </div>
  );
};

export default Empty;
