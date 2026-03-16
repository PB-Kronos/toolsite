import React from 'react';
import { Card } from '../ui/card';

const Logger = () => {
  const [logs, setLogs] = useState([
    { id: 1, level: 'info', message: 'Application started', timestamp: '2024-01-01 10:00:00' },
    { id: 2, level: 'warning', message: 'Low memory warning', timestamp: '2024-01-01 10:05:00' },
    { id: 3, level: 'error', message: 'File not found', timestamp: '2024-01-01 10:10:00' },
  ]);

  return (
    <Card className="mt-6">
      <h2 className="text-xl mb-4">Logger</h2>
      <div className="space-y-4">
        <div className="overflow-y-auto max-h-48">
          <table className="w-full text-sm">
            <thead>
              <tr>
                <th className="text-left font-medium">Level</th>
                <th className="text-left font-medium">Message</th>
                <th className="text-left font-medium">Time</th>
              </tr>
            </thead>
            <tbody>
              {logs.map((log) => (
                <tr key={log.id}>
                  <td className="pr-4">
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        log.level === 'error'
                          ? 'bg-red-100 text-red-800'
                          : log.level === 'warning'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-blue-100 text-blue-800'
                      }`}
                    >
                      {log.level.toUpperCase()}
                    </span>
                  </td>
                  <td className="pr-4">{log.message}</td>
                  <td className="pr-4">{log.timestamp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Card>
  );
};

export default Logger;