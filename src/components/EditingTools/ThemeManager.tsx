import React from 'react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';

const ThemeManager = () => {
  const [themes, setThemes] = useState([
    { name: 'Light', description: 'Bright theme' },
    { name: 'Dark', description: 'Dark theme' },
    { name: 'Auto', description: 'Automatic theme' },
    { name: 'High Contrast', description: 'High contrast theme' },
  ]);

  const handleApplyTheme = (theme) => {
    // Apply theme logic here
  };

  return (
    <Card className="mt-6">
      <h2 className="text-xl mb-4">Themes</h2>
      <div className="space-y-4">
        <div className="overflow-y-auto max-h-48">
          <ul className="space-y-2">
            {themes.map((theme, index) => (
              <li
                key={index}
                className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                onClick={() => handleApplyTheme(theme)}
              >
                <h3 className="font-medium text-sm mb-1">{theme.name}</h3>
                <p className="text-xs text-gray-500">{theme.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  );
};

export default ThemeManager;