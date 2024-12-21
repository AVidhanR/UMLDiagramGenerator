"use client";

import { Download, Image } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { downloadSVG, downloadPNG } from '@/lib/utils/download';

interface DiagramPreviewProps {
  svg: string;
}

export function DiagramPreview({ svg }: DiagramPreviewProps) {
  if (!svg) return null;

  const getTimestampedFilename = (ext: string) => {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    return `diagram-${timestamp}.${ext}`;
  };

  const handleSVGDownload = () => {
    downloadSVG(svg, getTimestampedFilename('svg'));
  };

  const handlePNGDownload = () => {
    downloadPNG(svg, getTimestampedFilename('png'));
  };

  return (
    <Card className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Generated Diagram</h2>
        <div className="flex gap-2">
          <Button
            onClick={handleSVGDownload}
            variant="outline"
            className="flex items-center gap-2"
          >
            <Download className="h-4 w-4" />
            Download SVG
          </Button>
          <Button
            onClick={handlePNGDownload}
            variant="outline"
            className="flex items-center gap-2"
          >
            <Image className="h-4 w-4" />
            Download PNG
          </Button>
        </div>
      </div>
      <div
        className="w-full overflow-auto bg-white p-4 rounded-lg"
        dangerouslySetInnerHTML={{ __html: svg }}
      />
    </Card>
  );
}