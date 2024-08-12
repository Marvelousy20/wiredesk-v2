import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

interface MenuItem {
  label: string;
  href: string;
}

interface DropdownMenuProps {
  label: string;
  items: MenuItem[];
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ label, items }) => {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value={label}>
        <AccordionTrigger className="text-white hover:text-gray-300">
          {label}
        </AccordionTrigger>
        <AccordionContent>
          <ul className="space-y-2">
            {items.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className="text-gray-300 hover:text-white block py-1"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default DropdownMenu;
