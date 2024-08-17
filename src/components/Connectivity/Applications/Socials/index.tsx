import Image from "next/image";

interface Applications {
  icon: string;
  name: string;
  installed?: boolean;
  description: string;
}

const applications: Applications[] = [
  {
    icon: "/connectivity/whatsapp.svg",
    name: "Whatsapp",
    installed: true,
    description: "Connect your Whatsapp business page as a channel in Wiredesk",
  },
  {
    icon: "/connectivity/instagram.svg",
    name: "Whatsapp",
    installed: false,
    description: "Connect your Whatsapp business page as a channel in Wiredesk",
  },
  {
    icon: "/connectivity/whatsapp.svg",
    name: "Whatsapp",
    installed: false,
    description: "Connect your Whatsapp business page as a channel in Wiredesk",
  },
  {
    icon: "/connectivity/whatsapp.svg",
    name: "Whatsapp",
    installed: false,
    description: "Connect your Whatsapp business page as a channel in Wiredesk",
  },
  {
    icon: "/connectivity/whatsapp.svg",
    name: "Whatsapp",
    installed: false,
    description: "Connect your Whatsapp business page as a channel in Wiredesk",
  },
  {
    icon: "/connectivity/whatsapp.svg",
    name: "Whatsapp",
    installed: false,
    description: "Connect your Whatsapp business page as a channel in Wiredesk",
  },
  {
    icon: "/connectivity/whatsapp.svg",
    name: "Whatsapp",
    installed: false,
    description: "Connect your Whatsapp business page as a channel in Wiredesk",
  },
  {
    icon: "/connectivity/whatsapp.svg",
    name: "Whatsapp",
    installed: false,
    description: "Connect your Whatsapp business page as a channel in Wiredesk",
  },
];

export default function Socials() {
  return (
    <div className="w-full px-5 mt-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {applications.map((app, index) => (
          <div
            key={index}
            className="px-4 py-5 bg-white border border-gray-60 shadow-connectivity-shadow rounded-[8px]"
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                {app.icon && (
                  <Image src={app.icon} alt={app.icon} width={32} height={32} />
                )}

                <span className="text-sm">{app.name}</span>
              </div>

              {app.installed && (
                <div className="text-xxs font-medium">
                  <span className="bg-green bg-opacity-10 px-1.5 py-1 rounded-[12px] text-[#168907]">
                    Installed
                  </span>
                </div>
              )}
            </div>

            <div className="text-xxs text-inactive mt-4">{app.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
