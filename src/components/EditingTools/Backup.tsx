import React from 'react';
import { Card } from '../ui/card';

const Backup = () => {
  const [backup, setBackup] = useState({
    enabled: true,
    schedule: 'daily',
    retention: '30 days',
    lastBackup: '2024-01-01',
    status: 'completed',
    type: 'incremental',
    location: 'cloud',
  });

  return (
    <Card className="mt-6">
      <h2 className="text-xl mb-4">Backup</h2>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={backup.enabled}
              onChange={(e) => setBackup({ ...backup, enabled: e.target.checked })}
              className="mr-2"
            />
            Enable Backup
          </label>
        </div>
        {backup.enabled && (
          <div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">Schedule</p>
                <p className="font-medium">{backup.schedule}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Retention</p>
                <p className="font-medium">{backup.retention}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Last Backup</p>
                <p className="font-medium">{backup.lastBackup}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Status</p>
                <p className="font-medium">
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      backup.status === 'completed'
                        ? 'bg-green-100 text-green-800'
                        : backup.status === 'failed'
                        ? 'bg-red-100 text-red-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}
                  >
                    {backup.status}
                  </span>
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Type</p>
                <p className="font-medium">{backup.type}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Location</p>
                <p className="font-medium">{backup.location}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
};

export default Backup;