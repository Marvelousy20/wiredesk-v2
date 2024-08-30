"use client";

import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Check } from "lucide-react";

interface StatusOption {
  value: string;
  label: string;
  count?: number;
}

interface StatusDropdownProps {
  options: StatusOption[];
  defaultValue: string;
  onValueChange: (value: string) => void;
}

const StatusDropdown: React.FC<StatusDropdownProps> = ({
  options,
  defaultValue,
  onValueChange,
}) => {
  const [selectedValue, setSelectedValue] = useState(defaultValue);

  const handleValueChange = (value: string) => {
    setSelectedValue(value);
    onValueChange(value);
  };

  return (
    <Select defaultValue={defaultValue} onValueChange={handleValueChange}>
      <SelectTrigger
        className={`border-none focus:ring-0 focus:ring-offset-0 px-0 font-medium text-black text-sm hover:text-primary ${
          selectedValue ? "text-black" : "text-black"
        }`}
      >
        <SelectValue />
      </SelectTrigger>
      <SelectContent className="w-[118px] mt-0 text-xs p-1.5 rounded-lg">
        {options.map((option) => (
          <SelectItem
            key={option.value}
            value={option.value}
            className={`focus:bg-grid rounded-[4px] px-2 font-medium ${
              option.value === selectedValue ? "text-primary" : ""
            }`}
          >
            <div className="flex items-center justify-between w-full space-x-1">
              {option.count !== undefined && (
                <span className="">{option.count}</span>
              )}
              <span>{option.label}</span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default StatusDropdown;
