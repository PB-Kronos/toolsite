import React from 'react';
import { Card } from '../ui/card';

const HealthMonitor = () => {
  const [health, setHealth] = useState({
    status: 'healthy',
    lastCheck: '2024-01-01 10:00:00',
    uptime: '24:00:00',
    memory: '16GB',
    storage: '512GB',
  });

  return (
    <Card className="mt-6">
      <h2 className="text-xl mb-4">Health Monitor</h2>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-500">Status</p>
            <p className="font-medium">
              <span
                className={`px-2 py-1 rounded-full text-xs ${
                  health.status === 'healthy'
                    ? 'bg-green-100 text-green-800'
                    : health.status === 'degraded'
                    ? 'bg-yellow-100 text-yellow-800'
                    : 'bg-red-100 text-red-800'
                }`}
              >
                {health.status}
              </span>
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Last Check</p>
            <p className="font-medium">{health.lastCheck}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Uptime</p>
            <p className="font-medium">{health.uptime}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Memory</p>
            <p className="font-medium">{health.memory}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Storage</p>
            <p className="font-medium">{health.storage}</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default HealthMonitor;