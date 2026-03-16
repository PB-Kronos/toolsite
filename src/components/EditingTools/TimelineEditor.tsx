'use client';

import { useState } from 'react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Waveform } from '../components/EditingTools/Waveform';

export function TimelineEditor() {
  const [timelinePosition, setTimelinePosition] = useState(0);
  const [timelineWidth, setTimelineWidth] = useState(0);
  const [waveformData, setWaveformData] = useState([]);

  const handleTimelineDrag = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const position = Math.min(Math.max(0, e.clientX - rect.left), rect.width);
    setTimelinePosition(position);
  };

  return (
    <Card className="mt-6">
      <div className="relative h-24">
        <div className="absolute inset-0 bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden">
          <Waveform waveformData={waveformData} />
        </div>
        <div
          className="absolute top-0 bottom-0 left-0 right-0 cursor-grab"
          style={{ userSelect: 'none' }}
          onMouseDown={handleTimelineDrag}
        >
          <div
            className="absolute top-0 bottom-0 left-0 right-0 bg-gray-300 rounded-lg transition-all duration-300"
            style={{ left: `${timelinePosition}%` }}
          ></div>
        </div>
      </div>
      <div className="mt-4">
        <Button className="mr-2">Trim</Button>
        <Button className="mr-2">Cut</Button>
        <Button className="mr-2">Gain</Button>
        <Button className="mr-2">EQ</Button>
        <Button className="mr-2">Pitch</Button>
        <Button className="mr-2">Tempo</Button>
        <Button className="mr-2">Merge</Button>
        <Button className="mr-2">Fade</Button>
      </div>
    </Card>
}