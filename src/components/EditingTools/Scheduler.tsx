import React from 'react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';

const Scheduler = () => {
  const [jobs, setJobs] = useState([
    { id: 1, name: 'Daily Backup', schedule: '0 2 * * *', status: 'active' },
    { id: 2, name: 'Cleanup', schedule: '0 4 * * 0', status: 'active' },
    { id: 3, name: 'Update Check', schedule: '0 6 * * 1', status: 'inactive' },
  ]);

  const handleToggleJob = (id) => {
    // Toggle job status logic here
  };

  const handleEditJob = (id) => {
    // Edit job logic here
  };

  return (
    <Card className="mt-6">
      <h2 className="text-xl mb-4">Scheduler</h2>
      <div className="space-y-4">
        <div className="overflow-y-auto max-h-48">
          <table className="w-full text-sm">
            <thead>
              <tr>
                <th className="text-left font-medium">Job</th>
                <th className="text-left font-medium">Schedule</th>
                <th className="text-left font-medium">Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((job) => (
                <tr key={job.id}>
                  <td className="pr-4">{job.name}</td>
                  <td className="pr-4">{job.schedule}</td>
                  <td className="pr-4">
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        job.status === 'active'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {job.status}
                    </span>
                  </td>
                  <td>
                    <Button size="sm" onClick={() => handleToggleJob(job.id)}>
                      {job.status === 'active' ? 'Pause' : 'Resume'}
                    </Button>
                    <Button size="sm" onClick={() => handleEditJob(job.id)}>
                      Edit
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

export default Scheduler;