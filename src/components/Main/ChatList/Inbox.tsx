import Image from "next/image";
import StatusDropdown from "./StatusDropDown";

export default function ChatList() {
  const statusOptions = [
    { value: "open", label: "Open" },
    { value: "closed", label: "Closed" },
    { value: "starred", label: "Starred" },
    { value: "snoozed", label: "Snoozed" },
  ];

  const sortOptions = [
    { value: "newest", label: "Newest" },
    { value: "oldest", label: "Oldest" },
    { value: "priority", label: "Priority" },
  ];

  const handleStatusChange = (value: string) => {
    console.log("Selected status:", value);
    // Handle the status change here
  };

  const handleSortChange = (value: string) => {
    console.log("Selected sort:", value);
    // Handle the sort change here
  };

  return (
    <div className="">
      <div className="px-3 border-b border-divider-on-light">
        <div className="flex items-center justify-between h-[56px] px-2">
          <h1 className="text-black text-md font-semibold">Inbox</h1>

          <Image
            src="/main/chatlist/edit.svg"
            alt="edit"
            width={20}
            height={20}
          />
        </div>
      </div>

      <div className="mt-2 px-3">
        <div className="flex items-center justify-between px-2">
          <div className="bg-green-500">
            <StatusDropdown
              options={statusOptions}
              defaultValue="open"
              onValueChange={handleStatusChange}
            />
          </div>

          <div className="!bg-red-500">
            <StatusDropdown
              options={sortOptions}
              defaultValue="newest"
              onValueChange={handleSortChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
