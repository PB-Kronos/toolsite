import React from 'react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';

const HelpTooltip = () => {
  const [showHelp, setShowHelp] = useState(false);

  const helpContent = [
    { title: 'File Upload', content: 'Drag and drop files to upload' },
    { title: 'Timeline', content: 'Click and drag to navigate' },
    { title: 'Effects', content: 'Use sliders to adjust parameters' },
    { title: 'Export', content: 'Choose format and quality before exporting' },
  ];

  return (
    <Card className="mt-6">
      <h2 className="text-xl mb-4">Help Tooltips</h2>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={showHelp}
              onChange={(e) => setShowHelp(e.target.checked)}
              className="mr-2"
            />
            Enable Help Tooltips
          </label>
        </div>
        {showHelp && (
          <div className="overflow-y-auto max-h-48">
            <ul className="space-y-2">
              {helpContent.map((item, index) => (
                <li key={index} className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <h3 className="font-medium text-sm mb-1">{item.title}</h3>
                  <p className="text-xs text-gray-600">{item.content}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </Card>
  );
};

export default HelpTooltip;