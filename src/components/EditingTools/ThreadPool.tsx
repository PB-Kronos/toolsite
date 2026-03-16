import React from 'react';
import { Card } from '../ui/card';

const ThreadPool = () => {
  const [threads, setThreads] = useState([
    { id: 1, status: 'idle', priority: 'normal' },
    { id: 2, status: 'busy', priority: 'high' },
    { id: 3, status: 'idle', priority: 'low' },
  ]);

  return (
    <Card className="mt-6">
      <h2 className="text-xl mb-4">Thread Pool</h2>
      <div className="space-y-4">
        <div className="overflow-y-auto max-h-48">
          <table className="w-full text-sm">
            <thead>
              <tr>
                <th className="text-left font-medium">Thread</th>
                <th className="text-left font-medium">Status</th>
                <th className="text-left font-medium">Priority</th>
              </tr>
            </thead>
            <tbody>
              {threads.map((thread) => (
                <tr key={thread.id}>
                  <td className="pr-4">#{thread.id}</td>
                  <td className="pr-4">
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        thread.status === 'busy'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-green-100 text-green-800'
                      }`}
                    >
                      {thread.status}
                    </span>
                  </td>
                  <td className="pr-4">
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        thread.priority === 'high'
                          ? 'bg-red-100 text-red-800'
                          : thread.priority === 'low'
                          ? 'bg-gray-100 text-gray-800'
                          : 'bg-blue-100 text-blue-800'
                      }`}
                    >
                      {thread.priority}
                    </span>
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

export default ThreadPool;