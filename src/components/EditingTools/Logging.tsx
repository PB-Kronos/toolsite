import React from 'react';
import { Card } from '../ui/card';

const Logging = () => {
  const [logging, setLogging] = useState({
    enabled: true,
    level: 'info',
    retention: '30 days',
    size: '100MB',
    status: 'active',
    format: 'json',
    location: 'cloud',
  });

  return (
    <Card className="mt-6">
      <h2 className="text-xl mb-4">Logging</h2>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={logging.enabled}
              onChange={(e) => setLogging({ ...logging, enabled: e.target.checked })}
              className="mr-2"
            />
            Enable Logging
          </label>
        </div>
        {logging.enabled && (
          <div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">Level</p>
                <p className="font-medium">{logging.level}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Retention</p>
                <p className="font-medium">{logging.retention}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Size</p>
                <p className="font-medium">{logging.size}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Status</p>
                <p className="font-medium">
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      logging.status === 'active'
                        ? 'bg-green-100 text-green-800'
                        : logging.status === 'degraded'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {logging.status}
                  </span>
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Format</p>
                <p className="font-medium">{logging.format}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Location</p>
                <p className="font-medium">{logging.location}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
};

export default Logging;