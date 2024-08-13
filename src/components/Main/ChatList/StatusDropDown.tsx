import React from "react";
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
  return (
    <Select defaultValue={defaultValue} onValueChange={onValueChange}>
      <SelectTrigger className="border-none focus:ring-0 focus:ring-offset-0 px-0 font-medium text-xs">
        <SelectValue />
      </SelectTrigger>
      <SelectContent className="w-[118px] mt-0 text-xs">
        {options.map((option) => (
          <SelectItem
            key={option.value}
            value={option.value}
            className={`focus:bg-grid pl-[0.875rem] font-medium ${
              option.value === defaultValue ? "text-primary" : ""
            }`}
          >
            <div className="flex items-center justify-between w-full">
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
