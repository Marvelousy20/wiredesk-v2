import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Empty from "../../Applications/Empty";

interface Channel {
  id: number;
  active: boolean;
  type: string;
  businessId: number;
  providerId: string;
  createdAt: string;
  updatedAt: string;
}

export default function Socials() {
  const { data, isLoading, error } = useQuery<Channel[], Error>({
    queryKey: ["installedApps"],
    queryFn: async () => {
      const token = process.env.NEXT_PUBLIC_API_TOKEN;

      try {
        const response = await axios.get(
          "https://wiredesk-be.onrender.com/api/v1/channel",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        return response.data?.data;
      } catch (error) {
        console.error(error);
      }
    },
  });

  console.log(data);
  return (
    <div className="text-black">
      {data === undefined || data.length === 0 ? (
        <Empty />
      ) : (
        <div>
          <div className="px-5 mt-5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {data?.map((a, i) => (
                <div
                  key={i}
                  className="px-4 py-5 bg-white border border-gray-60 shadow-connectivity-shadow rounded-[8px] cursor-pointer"
                >
                  <Image
                    src="/connectivity/telegram.svg"
                    alt="img"
                    width={32}
                    height={32}
                  />
                  <p className="text-sm font-medium mt-3">{a.type}</p>
                  <Button className="bg-black rounded-[5px] px-2.5 py-[0.3125rem] text-white text-sm font-medium flex items-center gap-2 mt-3">
                    <Image
                      src="/main/second/manage.svg"
                      alt="page_info"
                      width={20}
                      height={20}
                    />
                    Manage
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
