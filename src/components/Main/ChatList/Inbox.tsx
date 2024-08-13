import Image from "next/image";

export default function ChatList() {
  return (
    <div className="">
      <div className="px-3 border-b border-divider-on-light">
        <div className="flex items-center justify-between h-[56px] px-2">
          <h1 className="text-black text-md font-semibold">Inbox</h1>

          <Image
            src="/main/chatlist/edit.svg"
            alt="edit"
            width={28}
            height={28}
          />
        </div>
      </div>

      <div>
        
      </div>
    </div>
  );
}
