import React from 'react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';

const ProcessManager = () => {
  const [processes, setProcesses] = useState([
    { id: 1, name: 'Audio Engine', status: 'running', pid: 1234 },
    { id: 2, name: 'Video Decoder', status: 'running', pid: 1235 },
    { id: 3, name: 'File Watcher', status: 'running', pid: 1236 },
  ]);

  const handleKillProcess = (pid) => {
    // Kill process logic here
  };

  return (
    <Card className="mt-6">
      <h2 className="text-xl mb-4">Process Manager</h2>
      <div className="space-y-4">
        <div className="overflow-y-auto max-h-48">
          <table className="w-full text-sm">
            <thead>
              <tr>
                <th className="text-left font-medium">Process</th>
                <th className="text-left font-medium">Status</th>
                <th className="text-left font-medium">PID</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {processes.map((proc) => (
                <tr key={proc.id}>
                  <td className="pr-4">{proc.name}</td>
                  <td className="pr-4">
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        proc.status === 'running'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {proc.status}
                    </span>
                  </td>
                  <td className="pr-4">{proc.pid}</td>
                  <td>
                    <Button size="sm" onClick={() => handleKillProcess(proc.pid)}>
                      Kill
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Card>
  );
};

export default ProcessManager;