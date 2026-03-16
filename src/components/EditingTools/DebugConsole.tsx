import React from 'react';
import { Card } from '../ui/card';

const DebugConsole = () => {
  const [consoleLogs, setConsoleLogs] = useState([]);

  return (
    <Card className="mt-6">
      <h2 className="text-xl mb-4">Debug Console</h2>
      <div className="space-y-4">
        <div className="overflow-y-auto max-h-48">
          <ul className="space-y-2">
            {consoleLogs.map((log, index) => (
              <li key={index} className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <p className="text-xs text-gray-600">{log.message}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  );
};

export default DebugConsole;