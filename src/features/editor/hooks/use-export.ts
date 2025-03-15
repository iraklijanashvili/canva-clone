import { useCallback } from 'react';
import { fabric } from 'fabric';

/**
 * Custom hook for exporting canvas content to different formats
 * 
 * @param canvas - The fabric.js canvas instance
 * @returns Object with export functions
 */
export const useExport = (canvas: fabric.Canvas | null) => {
  /**
   * Export the canvas as PNG image
   * @param filename - Name for the downloaded file
   */
  const exportAsPNG = useCallback((filename = 'design.png') => {
    if (!canvas) return;
    
    const dataURL = canvas.toDataURL({
      format: 'png',
      quality: 1
    });
    
    const link = document.createElement('a');
    link.download = filename;
    link.href = dataURL;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, [canvas]);

  /**
   * Export the canvas as JPEG image
   * @param filename - Name for the downloaded file
   * @param quality - JPEG quality (0-1)
   */
  const exportAsJPEG = useCallback((filename = 'design.jpg', quality = 0.8) => {
    if (!canvas) return;
    
    const dataURL = canvas.toDataURL({
      format: 'jpeg',
      quality
    });
    
    const link = document.createElement('a');
    link.download = filename;
    link.href = dataURL;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, [canvas]);

  /**
   * Export the canvas as SVG
   * @param filename - Name for the downloaded file
   */
  const exportAsSVG = useCallback((filename = 'design.svg') => {
    if (!canvas) return;
    
    const svg = canvas.toSVG();
    const blob = new Blob([svg], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    link.download = filename;
    link.href = url;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }, [canvas]);

  /**
   * Export the canvas design as JSON
   * @param filename - Name for the downloaded file
   */
  const exportAsJSON = useCallback((filename = 'design.json') => {
    if (!canvas) return;
    
    const json = JSON.stringify(canvas.toJSON());
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    link.download = filename;
    link.href = url;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }, [canvas]);

  return {
    exportAsPNG,
    exportAsJPEG,
    exportAsSVG,
    exportAsJSON
  };
}; 