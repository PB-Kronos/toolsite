import React from 'react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';

const PreferencesPanel = () => {
  const [preferences, setPreferences] = useState({
    language: 'en',
    theme: 'auto',
    autoSave: true,
    keyboardShortcuts: true,
  });

  const handlePreferenceChange = (key, value) => {
    setPreferences((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <Card className="mt-6">
      <h2 className="text-xl mb-4">Preferences</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Language</label>
          <select
            value={preferences.language}
            onChange={(e) => handlePreferenceChange('language', e.target.value)}
            className="w-full px-3 py-2 border rounded-lg bg-gray-50 dark:bg-gray-800"
          >
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
            <option value="de">German</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Theme</label>
          <select
            value={preferences.theme}
            onChange={(e) => handlePreferenceChange('theme', e.target.value)}
            className="w-full px-3 py-2 border rounded-lg bg-gray-50 dark:bg-gray-800"
          >
            <option value="auto">Auto</option>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>
        <div className="flex items-center justify-between">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={preferences.autoSave}
              onChange={(e) => handlePreferenceChange('autoSave', e.target.checked)}
              className="mr-2"
            />
            Auto Save
          </label>
        </div>
        <div className="flex items-center justify-between">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={preferences.keyboardShortcuts}
              onChange={(e) => handlePreferenceChange('keyboardShortcuts', e.target.checked)}
              className="mr-2"
            />
            Keyboard Shortcuts
          </label>
        </div>
      </div>
    </Card>
  );
};

export default PreferencesPanel;