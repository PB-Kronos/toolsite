import React from 'react';
import { Card } from '../ui/card';

const LoadBalancer = () => {
  const [loadBalancer, setLoadBalancer] = useState({
    enabled: false,
    algorithm: 'round-robin',
    activeConnections: 0,
    totalRequests: 0,
  });

  return (
    <Card className="mt-6">
      <h2 className="text-xl mb-4">Load Balancer</h2>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={loadBalancer.enabled}
              onChange={(e) => setLoadBalancer({ ...loadBalancer, enabled: e.target.checked })}
              className="mr-2"
            />
            Enable Load Balancer
          </label>
        </div>
        {loadBalancer.enabled && (
          <div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">Algorithm</p>
                <p className="font-medium">{loadBalancer.algorithm}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Active Connections</p>
                <p className="font-medium">{loadBalancer.activeConnections}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Total Requests</p>
                <p className="font-medium">{loadBalancer.totalRequests}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
};

export default LoadBalancer;