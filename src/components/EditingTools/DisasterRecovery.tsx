import React from 'react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';

const DisasterRecovery = () => {
  const [disasterRecovery, setDisasterRecovery] = useState({
    enabled: false,
    lastTest: '2024-01-01',
    nextTest: '2024-02-01',
    status: 'not-tested',
  });

  const handleTestDisasterRecovery = () => {
    // Test disaster recovery logic here
  };

  return (
    <Card className="mt-6">
      <h2 className="text-xl mb-4">Disaster Recovery</h2>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={disasterRecovery.enabled}
              onChange={(e) => setDisasterRecovery({ ...disasterRecovery, enabled: e.target.checked })}
              className="mr-2"
            />
            Enable Disaster Recovery
          </label>
        </div>
        {disasterRecovery.enabled && (
          <div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">Last Test</p>
                <p className="font-medium">{disasterRecovery.lastTest}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Next Test</p>
                <p className="font-medium">{disasterRecovery.nextTest}</p>
              </div>
            </div>
            <p className="text-sm text-gray-500">Status: {disasterRecovery.status}</p>
            <Button onClick={handleTestDisasterRecovery}>
              Test Disaster Recovery
            </Button>
          </div>
        )}
      </div>
    </Card>
  );
};

export default DisasterRecovery;