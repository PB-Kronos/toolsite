import React from 'react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';

const VersionHistory = () => {
  const [versions, setVersions] = useState([]);

  const handleRestoreVersion = (version) => {
    // Restore version logic here
  };

  return (
    <Card className="mt-6">
      <h2 className="text-xl mb-4">Version History</h2>
      <div className="space-y-4">
        <div className="overflow-y-auto max-h-48">
          <ul className="space-y-2">
            {versions.map((version, index) => (
              <li key={index} className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-800 rounded">
                <span className="text-sm truncate">{version.name}</span>
                <Button size="sm" onClick={() => handleRestoreVersion(version)}>
                  Restore
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  );
};

export default VersionHistory;