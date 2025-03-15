import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { SketchPicker } from "react-color";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

interface ColorPickerButtonProps {
  value: string;
  onChange: (color: string) => void;
  title?: string;
  disabled?: boolean;
  className?: string;
}

/**
 * Color Picker Button Component
 *
 * A button that displays the current color and opens a color picker
 * when clicked. Used throughout the editor for color selection.
 */
export const ColorPickerButton = ({
  value,
  onChange,
  title = "Select color",
  disabled = false,
  className,
}: ColorPickerButtonProps) => {
  const [open, setOpen] = useState(false);

  const handleChangeComplete = (color: { hex: string }) => {
    onChange(color.hex);
  };

  return (
    <Popover open={open && !disabled} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          type="button"
          disabled={disabled}
          className={cn(
            "h-8 w-8 p-0 flex items-center justify-center rounded-md border",
            className
          )}
          style={{ backgroundColor: value }}
          title={title}
        >
          <span className="sr-only">{title}</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0 border-none" align="center">
        <SketchPicker
          color={value}
          onChangeComplete={handleChangeComplete}
          disableAlpha={true}
        />
      </PopoverContent>
    </Popover>
  );
};
