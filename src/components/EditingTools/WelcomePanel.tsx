import React from 'react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';

const WelcomePanel = () => {
  return (
    <Card className="mt-6">
      <h2 className="text-xl mb-4">Welcome to Audio/Video Editor</h2>
      <div className="space-y-4">
        <div className="text-center">
          <div className="text-4xl mb-2">🎵</div>
          <p className="text-sm text-gray-500 mb-4">
            Start by dragging and dropping your audio/video files onto the editor.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Button asChild>
            <a
              href="#"
              className="w-full text-left justify-start"
            >
              Open File
            </a>
          </Button>
          <Button asChild>
            <a
              href="#"
              className="w-full text-left justify-start"
            >
              New Project
            </a>
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default WelcomePanel;