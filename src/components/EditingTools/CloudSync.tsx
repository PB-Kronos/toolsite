import React from 'react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';

const CloudSync = () => {
  const [isSyncEnabled, setIsSyncEnabled] = useState(false);
  const [syncStatus, setSyncStatus] = useState('idle');

  const handleSyncToggle = () => {
    setIsSyncEnabled(!isSyncEnabled);
    // Sync logic here
  };

  return (
    <Card className="mt-6">
      <h2 className="text-xl mb-4">Cloud Sync</h2>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={isSyncEnabled}
              onChange={handleSyncToggle}
              className="mr-2"
            />
            Enable Cloud Sync
          </label>
        </div>
        {isSyncEnabled && (
          <div>
            <p className="text-sm text-gray-500">Status: {syncStatus}</p>
            <Button onClick={() => setSyncStatus('syncing')}>
              Sync Now
            </Button>
          </div>
        )}
      </div>
    </Card>
  );
};

export default CloudSync;