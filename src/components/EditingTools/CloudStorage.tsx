import React from 'react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';

const CloudStorage = () => {
  const [providers, setProviders] = useState([
    { name: 'Google Drive', connected: false },
    { name: 'Dropbox', connected: false },
    { name: 'OneDrive', connected: false },
    { name: 'Box', connected: false },
  ]);

  const handleConnect = (provider) => {
    // Connect to cloud provider logic here
  };

  const handleDisconnect = (provider) => {
    // Disconnect from cloud provider logic here
  };

  return (
    <Card className="mt-6">
      <h2 className="text-xl mb-4">Cloud Storage</h2>
      <div className="space-y-4">
        <div className="overflow-y-auto max-h-48">
          <ul className="space-y-2">
            {providers.map((provider, index) => (
              <li key={index} className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-800 rounded">
                <span className="text-sm truncate">{provider.name}</span>
                {provider.connected ? (
                  <Button size="sm" onClick={() => handleDisconnect(provider)}>
                    Disconnect
                  </Button>
                ) : (
                  <Button size="sm" onClick={() => handleConnect(provider)}>
                    Connect
                  </Button>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  );
};

export default CloudStorage;