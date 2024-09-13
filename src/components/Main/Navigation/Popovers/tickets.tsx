import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import EditDialog from "./TicketDialogContent/edit";
import CreateDialog from "./TicketDialogContent/create";

const TicketsPopover = () => {
  return (
    <div className="">
      <div className="flex items-center justify-between mb-2 px-4 gap-2">
        <Image
          src="/main/second/searchp.svg"
          alt="edit"
          width={16}
          height={16}
        />
        <input
          type="text"
          placeholder="Search item"
          className="w-full text-[#68666299] text-xxs outline-none"
        />
      </div>

      <div className="h-[1px] bg-[#F1F0F4]" />

      <div className="px-1.5 mt-2 space-y-1">
        <div className="flex items-center justify-between h-8 hover:bg-grid px-2 cursor-pointer">
          <div className="flex items-center gap-1.5">
            <Image
              src="/main/second/mentions.png"
              alt="edit"
              width={16}
              height={16}
            />
            <span className="text-xxs font-medium text-black">
              Bulk tickets
            </span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-xxs font-medium text-black flex items-center w-6 h-6 justify-center">
              12
            </span>
            <div className="w-6 h-6 flex items-center justify-center">
              <Dialog>
                <DialogTrigger asChild>
                  <div>
                    <Image
                      src="/main/second/popovers/edit.svg"
                      alt="edit"
                      width={16}
                      height={16}
                      className=""
                    />
                  </div>
                </DialogTrigger>

                <DialogContent className="max-w-[25rem] p-0">
                  <EditDialog />
                </DialogContent>
              </Dialog>
            </div>

            <div className="w-6 h-6 flex items-center justify-center">
              <Image
                src="/main/second/unpin.svg"
                alt="edit"
                width={16}
                height={16}
              />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between h-8 hover:bg-grid px-2 cursor-pointer">
          <div className="flex items-center gap-1.5">
            <Image
              src="/main/second/check.png"
              alt="edit"
              width={16}
              height={16}
            />
            <span className="text-xxs font-medium text-black">My tickets</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-6 h-6 flex items-center justify-center">
              <span className="text-xxs font-medium text-black">43</span>
            </div>
            <div className="w-6 h-6 flex items-center justify-center">
              <Image
                src="/main/second/popovers/edit.svg"
                alt="edit"
                width={16}
                height={16}
              />
            </div>
            <div className="w-6 h-6 flex items-center justify-center">
              <Image
                src="/main/second/unpin.svg"
                alt="edit"
                width={16}
                height={16}
              />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between h-8 hover:bg-grid px-2 cursor-pointer">
          <div className="flex items-center gap-1.5">
            <Image
              src="/main/second/sos.png"
              alt="edit"
              width={16}
              height={16}
            />
            <span className="text-xxs font-medium text-black">
              Support request
            </span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-6 h-6 flex items-center justify-center">
              <span className="text-xxs font-medium text-black">17</span>
            </div>
            <div className="w-6 h-6 flex items-center justify-center">
              <Image
                src="/main/second/popovers/edit.svg"
                alt="edit"
                width={16}
                height={16}
              />
            </div>
            <div className="w-6 h-6 flex items-center justify-center">
              <Image
                src="/main/second/unpin.svg"
                alt="edit"
                width={16}
                height={16}
              />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between h-8 hover:bg-grid px-2 cursor-pointer">
          <div className="flex items-center gap-1.5">
            <Image
              src="/main/second/bug.png"
              alt="edit"
              width={16}
              height={16}
            />
            <span className="text-xxs font-medium text-black">Bug request</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-6 h-6 flex items-center justify-center">
              <span className="text-xxs font-medium text-black">26</span>
            </div>

            <div className="w-6 h-6 flex items-center justify-center">
              <Image
                src="/main/second/popovers/edit.svg"
                alt="edit"
                width={16}
                height={16}
              />
            </div>
            <div className="w-6 h-6 flex items-center justify-center">
              <Image
                src="/main/second/unpin.svg"
                alt="edit"
                width={16}
                height={16}
              />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between h-8 hover:bg-grid px-2 cursor-pointer">
          <div className="flex items-center gap-1.5">
            <Image
              src="/main/second/unpin.svg"
              alt="edit"
              width={16}
              height={16}
            />
            <span className="text-xxs font-medium text-black">
              Unpin folder
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between h-8 border-t border-divider-on-light hover:bg-grid px-2 cursor-pointer">
          <Dialog>
            <DialogTrigger>
              <div className="flex items-center gap-1.5">
                <Image
                  src="/main/second/create.png"
                  alt="edit"
                  width={16}
                  height={16}
                />
                <span className="text-xxs font-medium text-black">
                  Create new ticket
                </span>
              </div>
            </DialogTrigger>
            <DialogContent className="max-w-[25rem] p-0">
              <CreateDialog />
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default TicketsPopover;
