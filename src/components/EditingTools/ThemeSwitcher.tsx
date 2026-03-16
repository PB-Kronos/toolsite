import React from 'react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState('light');

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    // Theme change logic here
  };

  return (
    <Card className="mt-6">
      <h2 className="text-xl mb-4">Theme</h2>
      <div className="space-y-4">
        <div className="flex justify-between">
          <Button
            onClick={() => handleThemeChange('light')}
            className={theme === 'light' ? 'bg-blue-500 text-white' : ''}
          >
            Light
          </Button>
          <Button
            onClick={() => handleThemeChange('dark')}
            className={theme === 'dark' ? 'bg-blue-500 text-white' : ''}
          >
            Dark
          </Button>
          <Button
            onClick={() => handleThemeChange('auto')}
            className={theme === 'auto' ? 'bg-blue-500 text-white' : ''}
          >
            Auto
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ThemeSwitcher;