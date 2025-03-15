"use client";

import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

/**
 * Export Page Component
 *
 * This page allows users to export their design in various formats
 * with different quality and size options.
 */
export default function ExportPage() {
  const searchParams = useSearchParams();
  const projectId = searchParams.get("projectId");

  const [format, setFormat] = useState<string>("png");
  const [quality, setQuality] = useState<number>(90);
  const [scale, setScale] = useState<number>(1);
  const [includeBackground, setIncludeBackground] = useState<boolean>(true);

  const exportFormats = [
    { value: "png", label: "PNG - Transparent Background" },
    { value: "jpeg", label: "JPEG - Best for Photos" },
    { value: "svg", label: "SVG - Vector Format" },
    { value: "pdf", label: "PDF - Document Format" },
  ];

  const handleExport = () => {
    // In a real application, this would call the export API
    console.log({
      projectId,
      format,
      quality,
      scale,
      includeBackground,
    });
  };

  return (
    <div className="container max-w-4xl py-10 space-y-8">
      <h1 className="text-3xl font-bold">Export Your Design</h1>

      <Card>
        <CardHeader>
          <CardTitle>Export Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="format">File Format</Label>
            <Select value={format} onValueChange={setFormat}>
              <SelectTrigger id="format">
                <SelectValue placeholder="Select format" />
              </SelectTrigger>
              <SelectContent>
                {exportFormats.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="quality">Image Quality ({quality}%)</Label>
            <div className="flex items-center gap-2">
              <input
                id="quality"
                type="range"
                min="10"
                max="100"
                value={quality}
                onChange={(e) => setQuality(parseInt(e.target.value))}
                className="w-full"
              />
              <span className="w-12 text-right">{quality}%</span>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="scale">Scale</Label>
            <div className="flex gap-2">
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => setScale(Math.max(0.25, scale - 0.25))}
                disabled={scale <= 0.25}
              >
                -
              </Button>
              <Input
                id="scale"
                type="number"
                value={scale}
                onChange={(e) => setScale(parseFloat(e.target.value))}
                min="0.25"
                max="4"
                step="0.25"
                className="w-20 text-center"
              />
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => setScale(Math.min(4, scale + 0.25))}
                disabled={scale >= 4}
              >
                +
              </Button>
              <span className="ml-2 flex items-center text-sm text-muted-foreground">
                {scale}x
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="includeBackground"
              checked={includeBackground}
              onCheckedChange={(checked) =>
                setIncludeBackground(checked === true)
              }
            />
            <Label htmlFor="includeBackground">Include background</Label>
          </div>

          <Button className="w-full mt-6" size="lg" onClick={handleExport}>
            Export Now
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
