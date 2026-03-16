import React from 'react';
import { Card } from '../ui/card';

const Database = () => {
  const [database, setDatabase] = useState({
    enabled: true,
    type: 'mysql',
    version: '8.0',
    size: '50GB',
    connections: 100,
    status: 'active',
    location: 'cloud',
  });

  return (
    <Card className="mt-6">
      <h2 className="text-xl mb-4">Database</h2>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={database.enabled}
              onChange={(e) => setDatabase({ ...database, enabled: e.target.checked })}
              className="mr-2"
            />
            Enable Database
          </label>
        </div>
        {database.enabled && (
          <div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">Type</p>
                <p className="font-medium">{database.type}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Version</p>
                <p className="font-medium">{database.version}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Size</p>
                <p className="font-medium">{database.size}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Connections</p>
                <p className="font-medium">{database.connections}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Status</p>
                <p className="font-medium">
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      database.status === 'active'
                        ? 'bg-green-100 text-green-800'
                        : database.status === 'degraded'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {database.status}
                  </span>
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Location</p>
                <p className="font-medium">{database.location}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
};

export default Database;