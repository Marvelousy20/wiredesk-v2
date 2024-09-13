import Image from "next/image";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import FilterDropdown from "@/components/Common/FilterDropDown";
import NotificationItem from "./notificationItem";

const notificationOpens = [
  { value: "All Notifications", label: "All Notifications" },
  { value: "Mentions", label: "Mentions" },
  { value: "Channels", label: "Channels" },
  { value: "Teammates", label: "Teammates" },
  { value: "Permissions", label: "Permissions" },
];

export default function Notifications() {
  const handleStatusChange = (value: string) => {
    console.log("Selected status:", value);
    // Handle the status change here
  };
  return (
    <div className="text-black">
      <div className="border-b border-[#F1F0F4]">
        <div className="px-1.5 py-2">
          <div className="flex justify-between px-2 py-1.5">
            <div className="text-xs font-medium">
              <FilterDropdown
                options={notificationOpens}
                defaultValue="All Notifications"
                onValueChange={handleStatusChange}
                contentWidth="150px"
              />
            </div>

            <Image
              src="/main/second/settings.svg"
              alt="settings"
              width={18}
              height={18}
            />
          </div>
        </div>
      </div>

      <div className="mt-2">
        <Tabs defaultValue="all" className="text-xxs">
          <div className="flex items-center justify-between border-b border-[#F1F0F4]">
            <TabsList className="bg-none bg-transparent text-xxs shadow-none text-inactive">
              <TabsTrigger
                value="all"
                className="text-xxs data-[state=active]:text-primary data-[state=active]:shadow-none rounded-none"
              >
                All
              </TabsTrigger>
              <TabsTrigger
                value="unread"
                className="text-xxs data-[state=active]:text-primary data-[state=active]:shadow-none rounded-none"
              >
                Unread (12)
              </TabsTrigger>
            </TabsList>

            <div className="mr-3.5 text-black text-xxs">Mark as read</div>
          </div>

          <TabsContent value="all">
            <NotificationItem />
          </TabsContent>

          <TabsContent value="unread"></TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
