import React from 'react';
import { Card } from '../ui/card';

const SystemInfo = () => {
  const [systemInfo, setSystemInfo] = useState({
    os: 'Linux',
    arch: 'x64',
    cpu: 'Intel i7',
    memory: '16GB',
    storage: '512GB SSD',
  });

  return (
    <Card className="mt-6">
      <h2 className="text-xl mb-4">System Information</h2>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-500">Operating System</p>
            <p className="font-medium">{systemInfo.os}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Architecture</p>
            <p className="font-medium">{systemInfo.arch}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">CPU</p>
            <p className="font-medium">{systemInfo.cpu}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Memory</p>
            <p className="font-medium">{systemInfo.memory}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Storage</p>
            <p className="font-medium">{systemInfo.storage}</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default SystemInfo;