import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { toast } from 'sonner';

const ExportControls = () => {
  const [exportFormat, setExportFormat] = useState('mp3');
  const [exportQuality, setExportQuality] = useState('high');
  const [isExporting, setIsExporting] = useState(false);

  const handleExport = async () => {
    setIsExporting(true);
    // Simulate export process
    setTimeout(() => {
      setIsExporting(false);
      toast.success('Export completed successfully!');
    }, 2000);
  };

  return (
    <Card className="p-4">
      <h2 className="text-lg font-semibold mb-4">Export</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Format</label>
          <select
            value={exportFormat}
            onChange={(e) => setExportFormat(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg bg-background"
          >
            <option value="mp3">MP3</option>
            <option value="wav">WAV</option>
            <option value="flac">FLAC</option>
            <option value="mp4">MP4</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Quality</label>
          <select
            value={exportQuality}
            onChange={(e) => setExportQuality(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg bg-background"
          >
            <option value="low">Low (128kbps)</option>
            <option value="medium">Medium (256kbps)</option>
            <option value="high">High (320kbps)</option>
          </select>
        </div>
        <Button onClick={handleExport} disabled={isExporting} className="w-full">
          {isExporting ? 'Exporting...' : 'Export'}
        </Button>
      </div>
    </Card>
  );
};

export default ExportControls;