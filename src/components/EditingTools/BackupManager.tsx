import React from 'react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';

const BackupManager = () => {
  const [backups, setBackups] = useState([]);

  const handleCreateBackup = () => {
    // Create backup logic here
  };

  const handleRestoreBackup = (backup) => {
    // Restore backup logic here
  };

  const handleDeleteBackup = (backup) => {
    // Delete backup logic here
  };

  return (
    <Card className="mt-6">
      <h2 className="text-xl mb-4">Backup Manager</h2>
      <div className="space-y-4">
        <Button onClick={handleCreateBackup}>Create Backup</Button>
        <div className="overflow-y-auto max-h-48">
          <ul className="space-y-2">
            {backups.map((backup, index) => (
              <li key={index} className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-800 rounded">
                <span className="text-sm truncate">{backup.name}</span>
                <div className="flex space-x-2">
                  <Button size="sm" onClick={() => handleRestoreBackup(backup)}>
                    Restore
                  </Button>
                  <Button size="sm" onClick={() => handleDeleteBackup(backup)}>
                    Delete
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  );
};

export default BackupManager;