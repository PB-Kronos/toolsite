import React from 'react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';

const UpdatesPanel = () => {
  const [isUpdateAvailable, setIsUpdateAvailable] = useState(false);
  const [updateStatus, setUpdateStatus] = useState('checking');

  const checkForUpdates = () => {
    setUpdateStatus('checking');
    // Check for updates logic here
    setTimeout(() => {
      setIsUpdateAvailable(true);
      setUpdateStatus('available');
    }, 2000);
  };

  const handleUpdate = () => {
    setUpdateStatus('updating');
    // Update logic here
    setTimeout(() => {
      setUpdateStatus('updated');
    }, 3000);
  };

  return (
    <Card className="mt-6">
      <h2 className="text-xl mb-4">Updates</h2>
      <div className="space-y-4">
        <Button onClick={checkForUpdates}>Check for Updates</Button>
        {isUpdateAvailable && (
          <div>
            <p className="text-sm text-gray-500">Status: {updateStatus}</p>
            {updateStatus === 'available' && (
              <Button onClick={handleUpdate}>Update Now</Button>
            )}
          </div>
        )}
      </div>
    </Card>
  );
};

export default UpdatesPanel;