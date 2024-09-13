import { DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function EditDialog() {
  return (
    <div className="py-4">
      <div className="px-5">
        <DialogTitle className="font-semibold text-md text-black">
          Edit Ticket
        </DialogTitle>

        <div className="mt-4">
          <div className="border border-[#68666299] rounded-[4px] h-[38px] flex items-center">
            <div className="border-r border-[#68666299] h-full items-center justify-center flex w-[33px]">
              <Image
                src="/main/second/mentions.png"
                alt="edit"
                width={16}
                height={16}
              />
            </div>

            <input
              type="text"
              placeholder="Mentions"
              className="w-full h-full px-2 focus:online-none focus:outline-none"
            />
          </div>

          <div className="mt-4">
            <h3 className="text-inactive text-xs font-medium">Filters</h3>

            <div className="flex items-center gap-x-2.5 mt-1.5">
              <div className="bg-[#FDF7C4] shadow-filter-inset text-xxs font-medium rounded-[10px] px-2 py-[0.1875rem] flex items-center gap-1">
                <Image
                  src="/main/second/confirmation_number.svg"
                  alt="second"
                  width={16}
                  height={16}
                />
                Tier/Support
              </div>
              <div className="bg-[#FDF7C4] shadow-filter-inset text-xxs font-medium rounded-[10px] px-2 py-[0.1875rem] flex items-center gap-1">
                <Image
                  src="/main/second/person.svg"
                  alt="second"
                  width={16}
                  height={16}
                />
                Chuka Enyioma
              </div>

              <div className="text-xxs flex items-center gap-1 px-2 py-[0.1875rem]">
                <Image
                  src="/main/second/add.svg"
                  alt="add"
                  width={10}
                  height={10}
                />
                Add filter
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-[#EEEFF1] mt-4 pt-2.5">
        <DialogFooter className="gap-x-3 px-5">
          <Button className="bg-white text-black h-[30px] text-sm">
            Cancel
          </Button>

          <Button className="text-sm h-[30px]">Save</Button>
        </DialogFooter>
      </div>
    </div>
  );
}
