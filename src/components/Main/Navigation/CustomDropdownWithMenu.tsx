"use client";

import React, { useState } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MoreHorizontal, MoreVertical } from "lucide-react";
import Image from "next/image";
import { Item, Section } from "@/type";

interface CustomAccordionItemProps {
  label: string;
  items: Item[];
  onHorizontalDotClick: (label: string) => void;
}

interface CustomDropdownProps {
  sections: Section[];
  onHorizontalDotClick: (label: string) => void;
}

const CustomAccordionItem: React.FC<CustomAccordionItemProps> = ({
  label,
  items,
  onHorizontalDotClick,
}) => {
  //   const [isHovered, setIsHovered] = useState(false);

  return (
    <AccordionItem value={label}>
      <AccordionTrigger className="text-[#BFBFBF] text-xs group hover:bg-[#35353580] rounded-[3px] relative">
        <MoreVertical className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity absolute -left-[3.5px]" />
        <span className="">{label}</span>
        <div className="flex-grow"></div>
        <MoreHorizontal
          className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity"
          onClick={(e) => {
            e.stopPropagation();
            onHorizontalDotClick(label);
          }}
        />
      </AccordionTrigger>
      <AccordionContent>
        <ul className="space-y-2">
          {items.map((item, index) => (
            <li
              key={index}
              className="py-0.5 pl-2 flex items-center justify-between"
            >
              <div className="flex items-center justify-between text-xs gap-2">
                {item.icon && (
                  <Image src={item.icon} alt="width" width={20} height={20} />
                )}
                {item.label}
                {/* <span className="text-xxs">{item.number}</span> */}
              </div>
            </li>
          ))}
        </ul>
      </AccordionContent>
    </AccordionItem>
  );
};

const CustomDropdown: React.FC<CustomDropdownProps> = ({
  sections,
  onHorizontalDotClick,
}) => {
  return (
    <Accordion type="single" collapsible className="w-full">
      {sections.map((section, index) => (
        <CustomAccordionItem
          key={index}
          label={section.label}
          items={section.items}
          onHorizontalDotClick={onHorizontalDotClick}
        />
      ))}
    </Accordion>
  );
};

export default CustomDropdown;
