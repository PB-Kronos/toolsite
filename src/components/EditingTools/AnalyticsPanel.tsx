'use client';

import { useState } from 'react';
import { Card } from '../ui/card';

export function AnalyticsPanel() {
  const [analyticsData] = useState({
    duration: '3:45',
    fileSize: '12.5 MB',
    bitRate: '256 kbps',
    sampleRate: '44.1 kHz',
    channels: 'Stereo',
  });

  return (
    <Card className="p-4">
      <h2 className="text-lg font-semibold mb-4">Audio Analysis</h2>
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div>
          <p className="text-muted-foreground">Duration</p>
          <p className="font-medium">{analyticsData.duration}</p>
        </div>
        <div>
          <p className="text-muted-foreground">File Size</p>
          <p className="font-medium">{analyticsData.fileSize}</p>
        </div>
        <div>
          <p className="text-muted-foreground">Bit Rate</p>
          <p className="font-medium">{analyticsData.bitRate}</p>
        </div>
        <div>
          <p className="text-muted-foreground">Sample Rate</p>
          <p className="font-medium">{analyticsData.sampleRate}</p>
        </div>
        <div>
          <p className="text-muted-foreground">Channels</p>
          <p className="font-medium">{analyticsData.channels}</p>
        </div>
      </div>
    </Card>
  );
}