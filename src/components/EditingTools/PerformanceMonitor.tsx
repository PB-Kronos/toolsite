import React from 'react';
import { Card } from '../ui/card';

const PerformanceMonitor = () => {
  const [performanceData, setPerformanceData] = useState({
    cpuUsage: 0,
    memoryUsage: 0,
    fps: 0,
  });

  return (
    <Card className="mt-6">
      <h2 className="text-xl mb-4">Performance</h2>
      <div className="space-y-4">
        <div className="grid grid-cols-3 gap-4">
          <div>
            <p className="text-sm text-gray-500">CPU Usage</p>
            <p className="font-medium">{performanceData.cpuUsage}%</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Memory Usage</p>
            <p className="font-medium">{performanceData.memoryUsage}MB</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">FPS</p>
            <p className="font-medium">{performanceData.fps}</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default PerformanceMonitor;