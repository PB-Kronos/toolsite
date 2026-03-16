import React from 'react';
import { Card } from '../ui/card';

const Load = () => {
  const [load, setLoad] = useState({
    enabled: true,
    algorithm: 'least-connections',
    active: 0,
    total: 0,
    status: 'active',
    location: 'cloud',
  });

  return (
    <Card className="mt-6">
      <h2 className="text-xl mb-4">Load</h2>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={load.enabled}
              onChange={(e) => setLoad({ ...load, enabled: e.target.checked })}
              className="mr-2"
            />
            Enable Load
          </label>
        </div>
        {load.enabled && (
          <div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">Algorithm</p>
                <p className="font-medium">{load.algorithm}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Active</p>
                <p className="font-medium">{load.active}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Total</p>
                <p className="font-medium">{load.total}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Status</p>
                <p className="font-medium">
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      load.status === 'active'
                        ? 'bg-green-100 text-green-800'
                        : load.status === 'degraded'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {load.status}
                  </span>
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Location</p>
                <p className="font-medium">{load.location}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
};

export default Load;