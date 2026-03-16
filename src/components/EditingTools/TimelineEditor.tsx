'use client';

import { useState } from 'react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Scissors, Crop, Gauge, Waves, Music, Merge, ArrowLeftRight } from 'lucide-react';

export function TimelineEditor() {
  const [timelinePosition, setTimelinePosition] = useState(0);

  const handleTimelineClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const position = ((e.clientX - rect.left) / rect.width) * 100;
    setTimelinePosition(Math.min(100, Math.max(0, position)));
  };

  return (
    <Card className="p-4">
      <h2 className="text-lg font-semibold mb-4">Timeline</h2>
      
      {/* Waveform placeholder */}
      <div 
        className="relative h-24 bg-muted rounded-lg mb-4 cursor-pointer"
        onClick={handleTimelineClick}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex items-end gap-1 h-16">
            {Array.from({ length: 50 }).map((_, i) => (
              <div
                key={i}
                className="w-1 bg-primary/30 rounded-full"
                style={{ height: `${Math.random() * 100}%` }}
              />
            ))}
          </div>
        </div>
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-red-500"
          style={{ left: `${timelinePosition}%` }}
        />
      </div>

      {/* Tool buttons */}
      <div className="flex flex-wrap gap-2">
        <Button size="sm" variant="outline">
          <Scissors className="h-4 w-4 mr-2" />
          Trim
        </Button>
        <Button size="sm" variant="outline">
          <Crop className="h-4 w-4 mr-2" />
          Cut
        </Button>
        <Button size="sm" variant="outline">
          <Gauge className="h-4 w-4 mr-2" />
          Gain
        </Button>
        <Button size="sm" variant="outline">
          <Waves className="h-4 w-4 mr-2" />
          EQ
        </Button>
        <Button size="sm" variant="outline">
          <Music className="h-4 w-4 mr-2" />
          Pitch
        </Button>
        <Button size="sm" variant="outline">
          <Music className="h-4 w-4 mr-2" />
          Tempo
        </Button>
        <Button size="sm" variant="outline">
          <Merge className="h-4 w-4 mr-2" />
          Merge
        </Button>
        <Button size="sm" variant="outline">
          <ArrowLeftRight className="h-4 w-4 mr-2" />
          Fade
        </Button>
      </div>
    </Card>
  );
}