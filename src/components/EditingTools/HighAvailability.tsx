import React from 'react';
import { Card } from '../ui/card';

const HighAvailability = () => {
  const [haStatus, setHaStatus] = useState({
    enabled: false,
    nodes: 0,
    failover: 'disabled',
    lastFailover: 'never',
  });

  return (
    <Card className="mt-6">
      <h2 className="text-xl mb-4">High Availability</h2>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={haStatus.enabled}
              onChange={(e) => setHaStatus({ ...haStatus, enabled: e.target.checked })}
              className="mr-2"
            />
            Enable High Availability
          </label>
        </div>
        {haStatus.enabled && (
          <div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">Nodes</p>
                <p className="font-medium">{haStatus.nodes}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Failover</p>
                <p className="font-medium">{haStatus.failover}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Last Failover</p>
                <p className="font-medium">{haStatus.lastFailover}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
};

export default HighAvailability;