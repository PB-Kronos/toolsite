import React from 'react';
import { Card } from '../ui/card';

const CacheManager = () => {
  const [cache, setCache] = useState({
    enabled: false,
    size: '0MB',
    hits: 0,
    misses: 0,
    hitRate: '0%',
  });

  return (
    <Card className="mt-6">
      <h2 className="text-xl mb-4">Cache Manager</h2>
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
                <p className="text-sm text-gray-500">Hit Rate</p>
                <p className="font-medium">{cache.hitRate}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
};

export default CacheManager;