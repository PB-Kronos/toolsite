import React from 'react';
import { Card } from '../ui/card';

const Security = () => {
  const [security, setSecurity] = useState({
    enabled: true,
    firewall: 'enabled',
    antivirus: 'enabled',
    updates: 'enabled',
    lastScan: '2024-01-01',
    threats: 0,
    status: 'secure',
    location: 'cloud',
  });

  return (
    <Card className="mt-6">
      <h2 className="text-xl mb-4">Security</h2>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={security.enabled}
              onChange={(e) => setSecurity({ ...security, enabled: e.target.checked })}
              className="mr-2"
            />
            Enable Security
          </label>
        </div>
        {security.enabled && (
          <div>
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
              <div>
                <p className="text-sm text-gray-500">Status</p>
                <p className="font-medium">
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      security.status === 'secure'
                        ? 'bg-green-100 text-green-800'
                        : security.status === 'warning'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {security.status}
                  </span>
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Location</p>
                <p className="font-medium">{security.location}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
};

export default Security;