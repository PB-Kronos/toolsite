import React from 'react';
import { Card } from '../ui/card';

const NetworkStatus = () => {
  const [networkStatus, setNetworkStatus] = useState({
    online: true,
    speed: '1000 Mbps',
    latency: '10 ms',
    proxy: 'None',
  });

  return (
    <Card className="mt-6">
      <h2 className="text-xl mb-4">Network Status</h2>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-500">Status</p>
            <p className="font-medium">
              {networkStatus.online ? 'Online' : 'Offline'}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Speed</p>
            <p className="font-medium">{networkStatus.speed}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Latency</p>
            <p className="font-medium">{networkStatus.latency}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Proxy</p>
            <p className="font-medium">{networkStatus.proxy}</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default NetworkStatus;