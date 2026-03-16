import React from 'react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';

const TaskManager = () => {
  const [tasks, setTasks] = useState([
    { id: 1, name: 'Audio Processing', status: 'running', progress: 75 },
    { id: 2, name: 'Video Conversion', status: 'pending', progress: 0 },
    { id: 3, name: 'File Upload', status: 'completed', progress: 100 },
  ]);

  const handleCancelTask = (id) => {
    // Cancel task logic here
  };

  return (
    <Card className="mt-6">
      <h2 className="text-xl mb-4">Task Manager</h2>
      <div className="space-y-4">
        <div className="overflow-y-auto max-h-48">
          <table className="w-full text-sm">
            <thead>
              <tr>
                <th className="text-left font-medium">Task</th>
                <th className="text-left font-medium">Status</th>
                <th className="text-left font-medium">Progress</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task) => (
                <tr key={task.id}>
                  <td className="pr-4">{task.name}</td>
                  <td className="pr-4">
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        task.status === 'running'
                          ? 'bg-yellow-100 text-yellow-800'
                          : task.status === 'completed'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {task.status}
                    </span>
                  </td>
                  <td className="pr-4">
                    <div className="w-full bg-gray-300 rounded-full h-2">
                      <div
                        className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${task.progress}%` }}
                      ></div>
                    </div>
                  </td>
                  <td>
                    {task.status === 'running' && (
                      <Button size="sm" onClick={() => handleCancelTask(task.id)}>
                        Cancel
                      </Button>
                    )}
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

export default TaskManager;