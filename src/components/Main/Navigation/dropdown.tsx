import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

interface MenuItem {
  label: string;
  number?: number;
  icon: any;
}

interface DropdownMenuProps {
  label: string;
  items: MenuItem[];
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ label, items }) => {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value={label}>
        <AccordionTrigger className="text-[#BFBFBF] text-xs">
          {label}
        </AccordionTrigger>
        <AccordionContent>
          <ul className="space-y-2">
            {items.map((item, index) => (
              <li
                key={index}
                className="py-0.5 pl-2 flex items-center justify-between"
              >
                <div className="flex items-center text-xs gap-2">
                  {item.icon && (
                    <Image src={item.icon} alt="width" width={20} height={20} />
                  )}
                  {item.label}
                </div>
                {/* <span className="text-xxs">{item.number}</span> */}
              </li>
            ))}
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default DropdownMenu;
