import React from 'react';
import { Card } from '../ui/card';

const Disaster = () => {
  const [disaster, setDisaster] = useState({
    enabled: true,
    plan: 'active',
    lastTest: '2024-01-01',
    status: 'ready',
    recoveryTime: '4 hours',
    location: 'cloud',
  });

  return (
    <Card className="mt-6">
      <h2 className="text-xl mb-4">Disaster</h2>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={disaster.enabled}
              onChange={(e) => setDisaster({ ...disaster, enabled: e.target.checked })}
              className="mr-2"
            />
            Enable Disaster
          </label>
        </div>
        {disaster.enabled && (
          <div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">Plan</p>
                <p className="font-medium">{disaster.plan}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Last Test</p>
                <p className="font-medium">{disaster.lastTest}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Status</p>
                <p className="font-medium">
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      disaster.status === 'ready'
                        ? 'bg-green-100 text-green-800'
                        : disaster.status === 'testing'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {disaster.status}
                  </span>
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Recovery Time</p>
                <p className="font-medium">{disaster.recoveryTime}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Location</p>
                <p className="font-medium">{disaster.location}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
};

export default Disaster;