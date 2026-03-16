import React from 'react';
import { Card } from '../ui/card';

const Recovery = () => {
  const [recovery, setRecovery] = useState({
    enabled: true,
    type: 'full',
    lastRecovery: '2024-01-01',
    status: 'ready',
    points: 3,
    location: 'cloud',
  });

  return (
    <Card className="mt-6">
      <h2 className="text-xl mb-4">Recovery</h2>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={recovery.enabled}
              onChange={(e) => setRecovery({ ...recovery, enabled: e.target.checked })}
              className="mr-2"
            />
            Enable Recovery
          </label>
        </div>
        {recovery.enabled && (
          <div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">Type</p>
                <p className="font-medium">{recovery.type}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Last Recovery</p>
                <p className="font-medium">{recovery.lastRecovery}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Status</p>
                <p className="font-medium">
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      recovery.status === 'ready'
                        ? 'bg-green-100 text-green-800'
                        : recovery.status === 'in-progress'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {recovery.status}
                  </span>
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Points</p>
                <p className="font-medium">{recovery.points}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Location</p>
                <p className="font-medium">{recovery.location}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
};

export default Recovery;