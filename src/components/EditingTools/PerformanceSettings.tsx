import React from 'react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';

const PerformanceSettings = () => {
  const [settings, setSettings] = useState({
    hardwareAcceleration: true,
    maxThreads: 4,
    memoryLimit: 'medium',
  });

  const handleSettingChange = (key, value) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <Card className="mt-6">
      <h2 className="text-xl mb-4">Performance Settings</h2>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={settings.hardwareAcceleration}
              onChange={(e) => handleSettingChange('hardwareAcceleration', e.target.checked)}
              className="mr-2"
            />
            Hardware Acceleration
          </label>
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Max Threads</label>
          <select
            value={settings.maxThreads}
            onChange={(e) => handleSettingChange('maxThreads', parseInt(e.target.value))}
            className="w-full px-3 py-2 border rounded-lg bg-gray-50 dark:bg-gray-800"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="4" selected>4</option>
            <option value="8">8</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Memory Limit</label>
          <select
            value={settings.memoryLimit}
            onChange={(e) => handleSettingChange('memoryLimit', e.target.value)}
            className="w-full px-3 py-2 border rounded-lg bg-gray-50 dark:bg-gray-800"
          >
            <option value="low">Low</option>
            <option value="medium" selected>Medium</option>
            <option value="high">High</option>
          </select>
        </div>
      </div>
    </Card>
  );
};

export default PerformanceSettings;