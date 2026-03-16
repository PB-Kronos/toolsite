import React from 'react';
import { Card } from '../ui/card';

const WarningPanel = () => {
  const [warnings, setWarnings] = useState([]);

  return (
    <Card className="mt-6">
      <h2 className="text-xl mb-4">Warnings</h2>
      <div className="space-y-4">
        <div className="overflow-y-auto max-h-48">
          <ul className="space-y-2">
            {warnings.map((warning, index) => (
              <li key={index} className="p-3 bg-yellow-50 dark:bg-yellow-900/30 rounded-lg">
                <h3 className="font-medium text-sm text-yellow-600 mb-1">{warning.title}</h3>
                <p className="text-xs text-yellow-700">{warning.message}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  );
};

export default WarningPanel;