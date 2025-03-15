import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ProjectThumbnailProps {
  id: string;
  previewUrl?: string;
  name: string;
  selected?: boolean;
  onClick?: () => void;
}

/**
 * Project Thumbnail Component
 * Displays a project thumbnail with preview and name
 */
export const ProjectThumbnail = ({
  id,
  previewUrl,
  name,
  selected = false,
  onClick,
}: ProjectThumbnailProps) => {
  return (
    <Card
      className={cn(
        "w-full overflow-hidden cursor-pointer transition-all duration-200 group h-40",
        selected ? "ring-2 ring-primary" : "hover:ring-1 hover:ring-primary/50"
      )}
      onClick={onClick}
    >
      <CardContent className="p-0 h-full flex flex-col">
        <div className="relative w-full h-[80%] bg-muted">
          {previewUrl ? (
            <Image src={previewUrl} alt={name} fill className="object-cover" />
          ) : (
            <div className="h-full w-full flex items-center justify-center text-muted-foreground">
              No Preview
            </div>
          )}
        </div>
        <div className="p-2 text-sm truncate flex-grow bg-card">{name}</div>
      </CardContent>
    </Card>
  );
};
