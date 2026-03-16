import React from 'react';
import { Card } from '../ui/card';

const ConsoleOutput = () => {
  const [output, setOutput] = useState('');

  return (
    <Card className="mt-6">
      <h2 className="text-xl mb-4">Console Output</h2>
      <div className="space-y-4">
        <div className="overflow-y-auto max-h-48 bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-xs">
          {output}
        </div>
      </div>
    </Card>
  );
};

export default ConsoleOutput;