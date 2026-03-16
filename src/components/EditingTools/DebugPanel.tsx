import React from 'react';
import { Card } from '../ui/card';

const DebugPanel = () => {
  const [debugInfo, setDebugInfo] = useState({
    version: '1.0.0',
    buildDate: '2024-01-01',
    environment: 'production',
  });

  return (
    <Card className="mt-6">
      <h2 className="text-xl mb-4">Debug Information</h2>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-500">Version</p>
            <p className="font-medium">{debugInfo.version}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Build Date</p>
            <p className="font-medium">{debugInfo.buildDate}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Environment</p>
            <p className="font-medium">{debugInfo.environment}</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default DebugPanel;