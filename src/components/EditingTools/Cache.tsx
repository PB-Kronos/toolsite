import React from 'react';
import { Card } from '../ui/card';

const Cache = () => {
  const [cache, setCache] = useState({
    enabled: true,
    type: 'redis',
    size: '1GB',
    hits: 0,
    misses: 0,
    status: 'active',
    location: 'cloud',
  });

  return (
    <Card className="mt-6">
      <h2 className="text-xl mb-4">Cache</h2>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={cache.enabled}
              onChange={(e) => setCache({ ...cache, enabled: e.target.checked })}
              className="mr-2"
            />
            Enable Cache
          </label>
        </div>
        {cache.enabled && (
          <div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">Type</p>
                <p className="font-medium">{cache.type}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Size</p>
                <p className="font-medium">{cache.size}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Hits</p>
                <p className="font-medium">{cache.hits}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Misses</p>
                <p className="font-medium">{cache.misses}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Status</p>
                <p className="font-medium">
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      cache.status === 'active'
                        ? 'bg-green-100 text-green-800'
                        : cache.status === 'degraded'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {cache.status}
                  </span>
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Location</p>
                <p className="font-medium">{cache.location}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
};

export default Cache;