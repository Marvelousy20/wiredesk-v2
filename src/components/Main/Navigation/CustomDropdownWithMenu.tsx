"use client";

import React, { useState, useCallback } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { MoreHorizontal, MoreVertical } from "lucide-react";
import Image from "next/image";
import { Item, Section } from "@/type";
import { ChevronRight } from "lucide-react";
import { renderDialogContent } from "./renderDialogContent";

interface CustomAccordionItemProps {
  label: string;
  items: Item[];
  //   onHorizontalDotClick: (label: string) => void;
}

interface CustomDropdownProps {
  sections: Section[];
  //   onHorizontalDotClick: (label: string) => void;
}

const CustomAccordionItem: React.FC<CustomAccordionItemProps> = ({
  label,
  items,
  //   onHorizontalDotClick,
}) => {
  // const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const handlePopoverClick = (
    e: React.MouseEvent<SVGSVGElement, MouseEvent>
  ) => {
    e.stopPropagation();
  };

  return (
    <AccordionItem value={label}>
      <AccordionTrigger className="text-[#BFBFBF] text-xs group hover:bg-[#35353580] rounded-[3px] relative">
        <MoreVertical className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity absolute -left-[3.5px]" />
        <span className="">{label}</span>
        <div className="flex-grow"></div>
        <Popover>
          <PopoverTrigger asChild>
            <MoreHorizontal
              className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
              onClick={handlePopoverClick}
            />
          </PopoverTrigger>

          <PopoverContent
            className="sm:max-w-[264px] p-0 py-2"
            align="start"
            onClick={(e) => e.stopPropagation()}
          >
            {renderDialogContent(label)}
          </PopoverContent>
        </Popover>

        <ChevronRight className="h-4 w-4 shrink-0 transition-transform duration-200 [&[data-state=open]>svg]:rotate-90" />
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
  //   onHorizontalDotClick,
}) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  return (
    <Accordion type="single" collapsible className="w-full">
      {sections.map((section, index) => (
        <CustomAccordionItem
          key={index}
          label={section.label}
          items={section.items}
          //   onHorizontalDotClick={onHorizontalDotClick}
        />
      ))}
    </Accordion>
  );
};

export default CustomDropdown;
