import React from 'react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';

const RecoveryManager = () => {
  const [recoveryPoints, setRecoveryPoints] = useState([]);

  const handleCreateRecoveryPoint = () => {
    // Create recovery point logic here
  };

  const handleRestoreRecoveryPoint = (point) => {
    // Restore recovery point logic here
  };

  const handleDeleteRecoveryPoint = (point) => {
    // Delete recovery point logic here
  };

  return (
    <Card className="mt-6">
      <h2 className="text-xl mb-4">Recovery Manager</h2>
      <div className="space-y-4">
        <Button onClick={handleCreateRecoveryPoint}>Create Recovery Point</Button>
        <div className="overflow-y-auto max-h-48">
          <ul className="space-y-2">
            {recoveryPoints.map((point, index) => (
              <li key={index} className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-800 rounded">
                <span className="text-sm truncate">{point.name}</span>
                <div className="flex space-x-2">
                  <Button size="sm" onClick={() => handleRestoreRecoveryPoint(point)}>
                    Restore
                  </Button>
                  <Button size="sm" onClick={() => handleDeleteRecoveryPoint(point)}>
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

export default RecoveryManager;