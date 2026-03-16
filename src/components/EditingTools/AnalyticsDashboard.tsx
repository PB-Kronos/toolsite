import React from 'react';
import { Card } from '../ui/card';

const AnalyticsDashboard = () => {
  const [analytics, setAnalytics] = useState({
    projectsCreated: 0,
    filesProcessed: 0,
    totalDuration: 0,
    averageFileSize: 0,
  });

  return (
    <Card className="mt-6">
      <h2 className="text-xl mb-4">Analytics Dashboard</h2>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-500">Projects Created</p>
            <p className="font-medium">{analytics.projectsCreated}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Files Processed</p>
            <p className="font-medium">{analytics.filesProcessed}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Total Duration</p>
            <p className="font-medium">{analytics.totalDuration} hours</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Average File Size</p>
            <p className="font-medium">{analytics.averageFileSize}MB</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default AnalyticsDashboard;