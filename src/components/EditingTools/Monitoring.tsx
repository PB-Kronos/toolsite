import React from 'react';
import { Card } from '../ui/card';

const Monitoring = () => {
  const [monitoring, setMonitoring] = useState({
    enabled: true,
    metrics: 'enabled',
    alerts: 'enabled',
    lastReport: '2024-01-01',
    status: 'healthy',
    uptime: '99.9%',
    location: 'cloud',
  });

  return (
    <Card className="mt-6">
      <h2 className="text-xl mb-4">Monitoring</h2>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={monitoring.enabled}
              onChange={(e) => setMonitoring({ ...monitoring, enabled: e.target.checked })}
              className="mr-2"
            />
            Enable Monitoring
          </label>
        </div>
        {monitoring.enabled && (
          <div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">Metrics</p>
                <p className="font-medium">
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      monitoring.metrics === 'enabled'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {monitoring.metrics}
                  </span>
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Alerts</p>
                <p className="font-medium">
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      monitoring.alerts === 'enabled'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {monitoring.alerts}
                  </span>
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Last Report</p>
                <p className="font-medium">{monitoring.lastReport}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Status</p>
                <p className="font-medium">
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      monitoring.status === 'healthy'
                        ? 'bg-green-100 text-green-800'
                        : monitoring.status === 'degraded'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {monitoring.status}
                  </span>
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Uptime</p>
                <p className="font-medium">{monitoring.uptime}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Location</p>
                <p className="font-medium">{monitoring.location}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
};

export default Monitoring;