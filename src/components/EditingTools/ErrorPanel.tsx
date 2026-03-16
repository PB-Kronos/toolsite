import React from 'react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';

const ErrorPanel = () => {
  const [errors, setErrors] = useState([]);

  const handleClearErrors = () => {
    setErrors([]);
  };

  return (
    <Card className="mt-6">
      <h2 className="text-xl mb-4">Error Log</h2>
      <div className="space-y-4">
        <Button onClick={handleClearErrors}>Clear All Errors</Button>
        <div className="overflow-y-auto max-h-48">
          <ul className="space-y-2">
            {errors.map((error, index) => (
              <li key={index} className="p-3 bg-red-50 dark:bg-red-900/30 rounded-lg">
                <h3 className="font-medium text-sm text-red-600 mb-1">{error.title}</h3>
                <p className="text-xs text-red-700">{error.message}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  );
};

export default ErrorPanel;