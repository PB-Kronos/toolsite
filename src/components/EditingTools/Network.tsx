import React from 'react';
import { Card } from '../ui/card';

const Network = () => {
  const [network, setNetwork] = useState({
    enabled: true,
    type: 'ethernet',
    speed: '1000 Mbps',
    latency: '5 ms',
    ip: '192.168.1.2',
    gateway: '192.168.1.1',
    status: 'connected',
    location: 'cloud',
  });

  return (
    <Card className="mt-6">
      <h2 className="text-xl mb-4">Network</h2>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={network.enabled}
              onChange={(e) => setNetwork({ ...network, enabled: e.target.checked })}
              className="mr-2"
            />
            Enable Network
          </label>
        </div>
        {network.enabled && (
          <div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">Type</p>
                <p className="font-medium">{network.type}</p>
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
              <div>
                <p className="text-sm text-gray-500">Status</p>
                <p className="font-medium">
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      network.status === 'connected'
                        ? 'bg-green-100 text-green-800'
                        : network.status === 'disconnected'
                        ? 'bg-red-100 text-red-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}
                  >
                    {network.status}
                  </span>
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Location</p>
                <p className="font-medium">{network.location}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
};

export default Network;