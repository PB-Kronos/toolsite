import React from 'react';
import { Card } from '../ui/card';

const SecurityManager = () => {
  const [security, setSecurity] = useState({
    firewall: 'enabled',
    antivirus: 'enabled',
    updates: 'enabled',
    lastScan: '2024-01-01',
    threats: 0,
  });

  return (
    <Card className="mt-6">
      <h2 className="text-xl mb-4">Security Manager</h2>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-500">Firewall</p>
            <p className="font-medium">
              <span
                className={`px-2 py-1 rounded-full text-xs ${
                  security.firewall === 'enabled'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-red-100 text-red-800'
                }`}
              >
                {security.firewall}
              </span>
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Antivirus</p>
            <p className="font-medium">
              <span
                className={`px-2 py-1 rounded-full text-xs ${
                  security.antivirus === 'enabled'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-red-100 text-red-800'
                }`}
              >
                {security.antivirus}
              </span>
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Updates</p>
            <p className="font-medium">
              <span
                className={`px-2 py-1 rounded-full text-xs ${
                  security.updates === 'enabled'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-red-100 text-red-800'
                }`}
              >
                {security.updates}
              </span>
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Last Scan</p>
            <p className="font-medium">{security.lastScan}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Threats</p>
            <p className="font-medium">{security.threats}</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default SecurityManager;