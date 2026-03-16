import React from 'react';
import { Card } from '../ui/card';

const StatusPanel = () => {
  const [status, setStatus] = useState({
    project: 'Untitled Project',
    duration: '00:00',
    format: 'N/A',
    quality: 'N/A',
    progress: 0,
  });

  return (
    <Card className="mt-6">
      <h2 className="text-xl mb-4">Status</h2>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-500">Project</p>
            <p className="font-medium">{status.project}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Duration</p>
            <p className="font-medium">{status.duration}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Format</p>
            <p className="font-medium">{status.format}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Quality</p>
            <p className="font-medium">{status.quality}</p>
          </div>
        </div>
        <div className="w-full bg-gray-300 rounded-full h-2">
          <div
            className="bg-blue-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${status.progress}%` }}
          ></div>
        </div>
      </div>
    </Card>
  );
};

export default StatusPanel;