import React from 'react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';

const ExportPresets = () => {
  const [presets, setPresets] = useState([
    { name: 'High Quality', format: 'mp3', quality: 'high' },
    { name: 'Standard', format: 'mp3', quality: 'medium' },
    { name: 'Low Size', format: 'mp3', quality: 'low' },
    { name: 'WAV Lossless', format: 'wav', quality: 'high' },
  ]);

  const handleApplyPreset = (preset) => {
    // Apply preset logic here
  };

  return (
    <Card className="mt-6">
      <h2 className="text-xl mb-4">Export Presets</h2>
      <div className="space-y-4">
        <div className="overflow-y-auto max-h-48">
          <ul className="space-y-2">
            {presets.map((preset, index) => (
              <li
                key={index}
                className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                onClick={() => handleApplyPreset(preset)}
              >
                <h3 className="font-medium text-sm mb-1">{preset.name}</h3>
                <p className="text-xs text-gray-500">
                  {preset.format.toUpperCase()} - {preset.quality}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  );
};

export default ExportPresets;