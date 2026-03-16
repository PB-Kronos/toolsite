import React from 'react';
import { Card } from '../ui/card';

const AutoSave = () => {
  const [isAutoSaveEnabled, setIsAutoSaveEnabled] = useState(true);
  const [autoSaveInterval, setAutoSaveInterval] = useState(5);

  const handleAutoSaveChange = (e) => {
    setIsAutoSaveEnabled(e.target.checked);
  };

  const handleIntervalChange = (e) => {
    setAutoSaveInterval(parseInt(e.target.value));
  };

  return (
    <Card className="mt-6">
      <h2 className="text-xl mb-4">Auto Save</h2>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={isAutoSaveEnabled}
              onChange={handleAutoSaveChange}
              className="mr-2"
            />
            Enable Auto Save
          </label>
        </div>
        {isAutoSaveEnabled && (
          <div>
            <label className="block text-sm font-medium mb-2">Save every</label>
            <select
              value={autoSaveInterval}
              onChange={handleIntervalChange}
              className="w-full px-3 py-2 border rounded-lg bg-gray-50 dark:bg-gray-800"
            >
              <option value="1">1 minute</option>
              <option value="5" selected>5 minutes</option>
              <option value="10">10 minutes</option>
              <option value="15">15 minutes</option>
            </select>
          </div>
        )}
      </div>
    </Card>
  );
};

export default AutoSave;