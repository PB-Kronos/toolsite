import React from 'react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';

const QueueManager = () => {
  const [queue, setQueue] = useState([
    { id: 1, task: 'Audio Processing', priority: 'high', position: 1 },
    { id: 2, task: 'Video Conversion', priority: 'normal', position: 2 },
    { id: 3, task: 'File Upload', priority: 'low', position: 3 },
  ]);

  const handleMoveUp = (id) => {
    // Move task up in queue logic here
  };

  const handleMoveDown = (id) => {
    // Move task down in queue logic here
  };

  const handleRemove = (id) => {
    // Remove task from queue logic here
  };

  return (
    <Card className="mt-6">
      <h2 className="text-xl mb-4">Queue Manager</h2>
      <div className="space-y-4">
        <div className="overflow-y-auto max-h-48">
          <table className="w-full text-sm">
            <thead>
              <tr>
                <th className="text-left font-medium">Task</th>
                <th className="text-left font-medium">Priority</th>
                <th className="text-left font-medium">Position</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {queue.map((item) => (
                <tr key={item.id}>
                  <td className="pr-4">{item.task}</td>
                  <td className="pr-4">
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        item.priority === 'high'
                          ? 'bg-red-100 text-red-800'
                          : item.priority === 'low'
                          ? 'bg-gray-100 text-gray-800'
                          : 'bg-blue-100 text-blue-800'
                      }`}
                    >
                      {item.priority}
                    </span>
                  </td>
                  <td className="pr-4">{item.position}</td>
                  <td>
                    <div className="flex space-x-1">
                      <Button size="sm" onClick={() => handleMoveUp(item.id)}>
                        ↑
                      </Button>
                      <Button size="sm" onClick={() => handleMoveDown(item.id)}>
                        ↓
                      </Button>
                      <Button size="sm" onClick={() => handleRemove(item.id)}>
                        ×
                      </Button>
                    </div>
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

export default QueueManager;