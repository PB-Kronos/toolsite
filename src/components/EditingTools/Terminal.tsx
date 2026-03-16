import React from 'react';
import { Card } from '../ui/card';

const Terminal = () => {
  const [commands, setCommands] = useState([]);

  const handleCommand = (command) => {
    // Execute command logic here
    setCommands((prev) => [...prev, { command, output: 'Command executed' }]);
  };

  return (
    <Card className="mt-6">
      <h2 className="text-xl mb-4">Terminal</h2>
      <div className="space-y-4">
        <div className="overflow-y-auto max-h-48 bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-xs">
          {commands.map((cmd, index) => (
            <div key={index} className="mb-2">
              <span className="text-green-400">${cmd.command}</span>
              <p className="text-gray-400">{cmd.output}</p>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default Terminal;