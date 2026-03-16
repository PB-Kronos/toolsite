import React from 'react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';

const SettingsPanel = () => {
  const [showAdvanced, setShowAdvanced] = useState(false);

  return (
    <Card className="mt-6">
      <h2 className="text-xl mb-4">Settings</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Audio Quality</label>
          <select className="w-full px-3 py-2 border rounded-lg bg-gray-50 dark:bg-gray-800">
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high" selected>High</option>
          </select>
        </div>
        <div>
          <label className="flex items-center">
            <input
              type="checkbox"
              className="mr-2"
              checked={showAdvanced}
              onChange={(e) => setShowAdvanced(e.target.checked)}
            />
            Show Advanced Settings
          </label>
        </div>
        {showAdvanced && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Sample Rate</label>
              <select className="w-full px-3 py-2 border rounded-lg bg-gray-50 dark:bg-gray-800">
                <option value="44100">44.1 kHz</option>
                <option value="48000">48 kHz</option>
                <option value="96000">96 kHz</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Bit Depth</label>
              <select className="w-full px-3 py-2 border rounded-lg bg-gray-50 dark:bg-gray-800">
                <option value="16">16-bit</option>
                <option value="24">24-bit</option>
                <option value="32">32-bit</option>
              </select>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
};

export default SettingsPanel;