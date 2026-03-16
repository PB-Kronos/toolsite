import React from 'react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';

const PreviewPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleSeek = (e) => {
    // Seek logic here
  };

  return (
    <Card className="mt-6">
      <div className="flex items-center justify-between p-4">
        <Button onClick={handlePlayPause}>
          {isPlaying ? 'Pause' : 'Play'}
        </Button>
        <div className="flex-1 mx-4">
          <div className="flex items-center">
            <span className="text-sm text-gray-500">{formatTime(currentTime)}</span>
            <input
              type="range"
              min="0"
              max={duration}
              value={currentTime}
              onChange={handleSeek}
              className="flex-1 mx-4 h-1 bg-gray-300 rounded-full cursor-pointer"
            />
            <span className="text-sm text-gray-500">{formatTime(duration)}</span>
          </div>
        </div>
        <Button>Stop</Button>
      </div>
    </Card>
  );
};

const formatTime = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
};

export default PreviewPlayer;