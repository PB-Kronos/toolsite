'use client';

import { useState } from 'react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Play, Pause, Square } from 'lucide-react';

export function PreviewPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration] = useState(180);

  const handlePlayPause = () => setIsPlaying(!isPlaying);
  const handleStop = () => { setIsPlaying(false); setCurrentTime(0); };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <Card className="p-4">
      <div className="flex items-center gap-4">
        <Button onClick={handlePlayPause} size="icon">
          {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
        </Button>
        <Button onClick={handleStop} size="icon" variant="outline">
          <Square className="h-4 w-4" />
        </Button>
        <div className="flex-1 flex items-center gap-2">
          <span className="text-sm w-12">{formatTime(currentTime)}</span>
          <input
            type="range"
            min="0"
            max={duration}
            value={currentTime}
            onChange={(e) => setCurrentTime(parseInt(e.target.value))}
            className="flex-1 h-2 bg-gray-200 rounded-full"
          />
          <span className="text-sm w-12">{formatTime(duration)}</span>
        </div>
      </div>
    </Card>
  );
}