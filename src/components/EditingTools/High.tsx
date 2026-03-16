import React from 'react';
import { Card } from '../ui/card';

const High = () => {
  const [high, setHigh] = useState({
    enabled: true,
    level: 'enterprise',
    nodes: 3,
    failover: 'automatic',
    status: 'active',
    location: 'cloud',
  });

  return (
    <Card className="mt-6">
      <h2 className="text-xl mb-4">High</h2>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={high.enabled}
              onChange={(e) => setHigh({ ...high, enabled: e.target.checked })}
              className="mr-2"
            />
            Enable High
          </label>
        </div>
        {high.enabled && (
          <div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">Level</p>
                <p className="font-medium">{high.level}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Nodes</p>
                <p className="font-medium">{high.nodes}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Failover</p>
                <p className="font-medium">{high.failover}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Status</p>
                <p className="font-medium">
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      high.status === 'active'
                        ? 'bg-green-100 text-green-800'
                        : high.status === 'degraded'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {high.status}
                  </span>
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Location</p>
                <p className="font-medium">{high.location}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
};

export default High;