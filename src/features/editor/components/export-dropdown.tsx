import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { useExport } from "../hooks/use-export";
import { fabric } from "fabric";

interface ExportDropdownProps {
  canvas: fabric.Canvas | null;
}

/**
 * Export Dropdown Component
 * Provides a dropdown menu with various export options
 */
export const ExportDropdown = ({ canvas }: ExportDropdownProps) => {
  const { exportAsPNG, exportAsJPEG, exportAsSVG, exportAsJSON } =
    useExport(canvas);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="h-8 gap-1">
          <Download className="h-4 w-4" />
          <span>Export</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => exportAsPNG()}>
          Export as PNG
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => exportAsJPEG()}>
          Export as JPEG
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => exportAsSVG()}>
          Export as SVG
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => exportAsJSON()}>
          Export as JSON
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
