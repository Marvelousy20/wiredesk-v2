import { Button } from "../ui/button";
import Image from "next/image";

export default function Trial() {
  return (
    <div className="h-[54px] bg-primary-light flex justify-between items-center px-4">
      <div className="flex items-center lg:gap-5">
        <p className="font-medium text-sm text-black">
          Your advanced trial has ended
        </p>
        <div>
          <Button
            variant={"trial"}
            size={"trial"}
            className="text-grid bg-darkest text-sm font-medium"
          >
            Buy wiredesk
          </Button>
        </div>
        <div>
          <Button
            variant={"trial"}
            size={"trial"}
            className="text-black text-sm bg-[#6941C626] font-normal"
          >
            Apply for an Early Stage 90% discount
          </Button>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <p className="text-sm font-medium text-black flex items-center gap-1">
          <Image src="/trial/school.svg" alt="school" width={20} height={20} />
          Continue Setup
        </p>
        <span className="text-xxs px-1.5 py-0.5 bg-[#FBF197] text-[#594F03] rounded-[10px] shadow-trial-shadow">
          45%
        </span>
      </div>
    </div>
  );
}
