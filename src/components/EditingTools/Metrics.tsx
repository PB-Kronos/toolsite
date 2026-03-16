import React from 'react';
import { Card } from '../ui/card';

const Metrics = () => {
  const [metrics, setMetrics] = useState({
    cpu: 25,
    memory: 40,
    disk: 30,
    network: 15,
    uptime: '24:00:00',
  });

  return (
    <Card className="mt-6">
      <h2 className="text-xl mb-4">System Metrics</h2>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-500">CPU Usage</p>
            <p className="font-medium">{metrics.cpu}%</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Memory Usage</p>
            <p className="font-medium">{metrics.memory}%</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Disk Usage</p>
            <p className="font-medium">{metrics.disk}%</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Network Usage</p>
            <p className="font-medium">{metrics.network}%</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Uptime</p>
            <p className="font-medium">{metrics.uptime}</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Metrics;