import React from 'react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';

const BackupScheduler = () => {
  const [backups, setBackups] = useState([
    { id: 1, name: 'Daily Backup', schedule: '0 2 * * *', status: 'active' },
    { id: 2, name: 'Weekly Backup', schedule: '0 3 * * 0', status: 'active' },
    { id: 3, name: 'Monthly Backup', schedule: '0 4 1 * *', status: 'inactive' },
  ]);

  const handleToggleBackup = (id) => {
    // Toggle backup status logic here
  };

  const handleEditBackup = (id) => {
    // Edit backup logic here
  };

  return (
    <Card className="mt-6">
      <h2 className="text-xl mb-4">Backup Scheduler</h2>
      <div className="space-y-4">
        <div className="overflow-y-auto max-h-48">
          <table className="w-full text-sm">
            <thead>
              <tr>
                <th className="text-left font-medium">Backup</th>
                <th className="text-left font-medium">Schedule</th>
                <th className="text-left font-medium">Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {backups.map((backup) => (
                <tr key={backup.id}>
                  <td className="pr-4">{backup.name}</td>
                  <td className="pr-4">{backup.schedule}</td>
                  <td className="pr-4">
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        backup.status === 'active'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {backup.status}
                    </span>
                  </td>
                  <td>
                    <Button size="sm" onClick={() => handleToggleBackup(backup.id)}>
                      {backup.status === 'active' ? 'Pause' : 'Resume'}
                    </Button>
                    <Button size="sm" onClick={() => handleEditBackup(backup.id)}>
                      Edit
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Card>
  );
};

export default BackupScheduler;