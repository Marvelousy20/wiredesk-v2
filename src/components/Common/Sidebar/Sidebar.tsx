import Image from "next/image";
import SidebarIcon from "./SidebarIcon";
import {
  HomeActiveIcon,
  HomeInactiveIcon,
  AnalyticsActiveIcon,
  AnalyticsInactiveIcon,
  SettingsActiveIcon,
  SettingsInactiveIcon,
  AutomationActiveIcon,
  AutomationInctiveIcon,
  CampaignActiveIcon,
  CampaignInactiveIcon,
  ConnectionsActiveIcon,
  ConnectionsInactiveIcon,
  ContactActiveIcon,
  ContactInactiveIcon,
  LiveChatInactiveIcon,
  LivechatActiveIcon,
} from "./icon";


export default function Sidebar() {
  return (
    <div className="bg-darkest flex flex-col items-center justify-center">
      <div className="h-[56px] flex items-center">
        <Image src="/sidebar/logo.svg" alt="logo" width={28} height={21} />
      </div>

      {/* Sidebar Icons */}

      <div className="flex flex-col content-height pb-1">
        
        
        <SidebarIcon
          href="/"
          activeIcon={<HomeActiveIcon />}
          inactiveIcon={<HomeInactiveIcon />}
          altText="Home"
        />
        <SidebarIcon
          href="/automation"
          activeIcon={<AutomationActiveIcon />}
          inactiveIcon={<AutomationInctiveIcon />}
          altText="Automation"
        />
        <SidebarIcon
          href="/contact"
          activeIcon={<ContactActiveIcon />}
          inactiveIcon={<ContactInactiveIcon />}
          altText="Analytics"
        />
        <SidebarIcon
          href="/campaign"
          activeIcon={<CampaignActiveIcon />}
          inactiveIcon={<CampaignInactiveIcon />}
          altText="Campaign"
        />
        <SidebarIcon
          href="/analytics"
          activeIcon={<AnalyticsActiveIcon />}
          inactiveIcon={<AnalyticsInactiveIcon />}
          altText="Analytics"
        />

        <div className="flex-grow"></div>
        

        <SidebarIcon
          href="/livechat"
          activeIcon={<LivechatActiveIcon />}
          inactiveIcon={<LiveChatInactiveIcon />}
          altText="Connections"
        />
        <SidebarIcon
          href="/connectivity"
          activeIcon={<ConnectionsActiveIcon />}
          inactiveIcon={<ConnectionsInactiveIcon />}
          altText="Contact"
        />
        <SidebarIcon
          href="/settings"
          activeIcon={<SettingsActiveIcon />}
          inactiveIcon={<SettingsInactiveIcon />}
          altText="Live Chat"
        />

        <Image src="/sidebar/avatar.svg" alt="avatar" width={32} height={32} />
      </div>
    </div>
  );
}
