import React from 'react';
import { Card } from '../ui/card';

const SuccessPanel = () => {
  const [successes, setSuccesses] = useState([]);

  return (
    <Card className="mt-6">
      <h2 className="text-xl mb-4">Success Log</h2>
      <div className="space-y-4">
        <div className="overflow-y-auto max-h-48">
          <ul className="space-y-2">
            {successes.map((success, index) => (
              <li key={index} className="p-3 bg-green-50 dark:bg-green-900/30 rounded-lg">
                <h3 className="font-medium text-sm text-green-600 mb-1">{success.title}</h3>
                <p className="text-xs text-green-700">{success.message}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  );
};

export default SuccessPanel;