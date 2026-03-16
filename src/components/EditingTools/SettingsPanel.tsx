import React, { useState } from 'react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';

const SettingsPanel = () => {
  const [settings, setSettings] = useState({
    autoSave: true,
    hardwareAcceleration: true,
    theme: 'system',
  });

  return (
    <Card className="p-4">
      <h2 className="text-lg font-semibold mb-4">Settings</h2>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <label className="text-sm font-medium">Auto Save</label>
          <input
            type="checkbox"
            checked={settings.autoSave}
            onChange={(e) => setSettings({...settings, autoSave: e.target.checked})}
            className="h-4 w-4"
          />
        </div>
        <div className="flex items-center justify-between">
          <label className="text-sm font-medium">Hardware Acceleration</label>
          <input
            type="checkbox"
            checked={settings.hardwareAcceleration}
            onChange={(e) => setSettings({...settings, hardwareAcceleration: e.target.checked})}
            className="h-4 w-4"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Theme</label>
          <select
            value={settings.theme}
            onChange={(e) => setSettings({...settings, theme: e.target.value})}
            className="w-full px-3 py-2 border rounded-lg bg-background"
          >
            <option value="system">System</option>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>
        <Button variant="outline" className="w-full">Reset to Defaults</Button>
      </div>
    </Card>
  );
};

export default SettingsPanel;