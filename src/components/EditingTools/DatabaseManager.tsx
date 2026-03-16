import React from 'react';
import { Card } from '../ui/card';

const DatabaseManager = () => {
  const [database, setDatabase] = useState({
    type: 'postgresql',
    status: 'connected',
    size: '10GB',
    connections: 5,
    queries: 100,
  });

  return (
    <Card className="mt-6">
      <h2 className="text-xl mb-4">Database Manager</h2>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-500">Type</p>
            <p className="font-medium">{database.type}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Status</p>
            <p className="font-medium">
              <span
                className={`px-2 py-1 rounded-full text-xs ${
                  database.status === 'connected'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-red-100 text-red-800'
                }`}
              >
                {database.status}
              </span>
            </p>
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
            <p className="text-sm text-gray-500">Queries</p>
            <p className="font-medium">{database.queries}</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default DatabaseManager;