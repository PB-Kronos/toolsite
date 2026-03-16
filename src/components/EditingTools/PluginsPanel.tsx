import React from 'react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';

const PluginsPanel = () => {
  const [plugins, setPlugins] = useState([]);

  const handleInstallPlugin = (plugin) => {
    // Install plugin logic here
  };

  const handleUninstallPlugin = (plugin) => {
    // Uninstall plugin logic here
  };

  return (
    <Card className="mt-6">
      <h2 className="text-xl mb-4">Plugins</h2>
      <div className="space-y-4">
        <Button onClick={() => {}}>Install Plugin</Button>
        <div className="overflow-y-auto max-h-48">
          <ul className="space-y-2">
            {plugins.map((plugin, index) => (
              <li key={index} className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-800 rounded">
                <span className="text-sm truncate">{plugin.name}</span>
                <Button size="sm" onClick={() => handleUninstallPlugin(plugin)}>Uninstall</Button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  );
};

export default PluginsPanel;