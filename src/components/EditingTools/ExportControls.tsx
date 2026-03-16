import React from 'react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';

const ExportControls = () => {
  const [exportFormat, setExportFormat] = useState('mp3');
  const [exportQuality, setExportQuality] = useState('high');
  const [isExporting, setIsExporting] = useState(false);

  const handleExport = async () => {
    setIsExporting(true);
    // Export logic here
    setIsExporting(false);
  };

  return (
    <Card className="mt-6">
      <h2 className="text-xl mb-4">Export</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Format</label>
          <select
            value={exportFormat}
            onChange={(e) => setExportFormat(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg bg-gray-50 dark:bg-gray-800"
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
            className="w-full px-3 py-2 border rounded-lg bg-gray-50 dark:bg-gray-800"
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
        <Button onClick={handleExport} disabled={isExporting}>
          {isExporting ? 'Exporting...' : 'Export'}
        </Button>
      </div>
    </Card>
  );
};

export default ExportControls;