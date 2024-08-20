import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Socials from "./Socials";
import Enabled from "./Enabled"

export default function Applications() {
  return (
    <div className="">
      <div className="h-[72px] flex items-center px-5">
        <h1 className="text-lg font-semibold">Applications</h1>
      </div>

      {/* Tabs */}
      <div>
        <Tabs defaultValue="socials" className="w-full">
          <TabsList className="w-full gap-4 justify-start bg-transparent border-b border-divider-on-light rounded-none text-xs text-inactive pb-0">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger
              value="socials"
              className="data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none"
            >
              Socials
            </TabsTrigger>
            <TabsTrigger value="financial"
            className="data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none"
            >Financial</TabsTrigger>
            <TabsTrigger value="meeting"
            className="data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none"
            >Meeting</TabsTrigger>
            <TabsTrigger value="management"
            className="data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none"
            >Management</TabsTrigger>
            <TabsTrigger value="plugins"
            className="data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none"
            >Plugins</TabsTrigger>
            <TabsTrigger value="enabled"
            className="data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none"
            >Enabled</TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="">
            Make changes to your account here.
          </TabsContent>
          <TabsContent value="socials">
            <Socials />
          </TabsContent>
          <TabsContent value="enabled">
            <Enabled />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
