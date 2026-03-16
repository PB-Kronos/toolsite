import React from 'react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';

const HelpPanel = () => {
  return (
    <Card className="mt-6">
      <h2 className="text-xl mb-4">Help</h2>
      <div className="space-y-4">
        <div>
          <h3 className="font-semibold mb-2">Getting Started</h3>
          <p className="text-sm text-gray-600">
            Drag and drop your audio/video files to begin editing. Use the timeline to navigate through your media.
          </p>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Editing Tools</h3>
          <p className="text-sm text-gray-600">
            Use the EQ, Pitch, and Tempo controls to modify your audio. The Merge and Fade tools help combine multiple tracks.
          </p>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Exporting</h3>
          <p className="text-sm text-gray-600">
            Choose your desired format and quality before exporting. Higher quality formats result in larger file sizes.
          </p>
        </div>
        <Button asChild>
          <a
            href="https://support.example.com"
            target="_blank"
            className="w-full text-left justify-start"
          >
            View Full Documentation
          </a>
        </Button>
      </div>
    </Card>
  );
};

export default HelpPanel;