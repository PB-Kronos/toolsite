import React from 'react';
import { Card } from '../ui/card';

const NetworkManager = () => {
  const [network, setNetwork] = useState({
    status: 'connected',
    speed: '1000 Mbps',
    latency: '10 ms',
    ip: '192.168.1.1',
    gateway: '192.168.1.254',
  });

  return (
    <Card className="mt-6">
      <h2 className="text-xl mb-4">Network Manager</h2>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-500">Status</p>
            <p className="font-medium">
              <span
                className={`px-2 py-1 rounded-full text-xs ${
                  network.status === 'connected'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-red-100 text-red-800'
                }`}
              >
                {network.status}
              </span>
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Speed</p>
            <p className="font-medium">{network.speed}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Latency</p>
            <p className="font-medium">{network.latency}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">IP Address</p>
            <p className="font-medium">{network.ip}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Gateway</p>
            <p className="font-medium">{network.gateway}</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default NetworkManager;