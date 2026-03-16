import React from 'react';
import { Card } from '../ui/card';

const AnalyticsPanel = () => {
  const [analyticsData, setAnalyticsData] = useState({
    duration: 0,
    fileSize: 0,
    bitRate: 0,
    sampleRate: 0,
    channels: 0,
  });

  return (
    <Card className="mt-6">
      <h2 className="text-xl mb-4">Audio Analysis</h2>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-500">Duration</p>
            <p className="font-medium">{analyticsData.duration}s</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">File Size</p>
            <p className="font-medium">{analyticsData.fileSize}MB</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Bit Rate</p>
            <p className="font-medium">{analyticsData.bitRate}kbps</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Sample Rate</p>
            <p className="font-medium">{analyticsData.sampleRate}Hz</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Channels</p>
            <p className="font-medium">{analyticsData.channels}</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default AnalyticsPanel;