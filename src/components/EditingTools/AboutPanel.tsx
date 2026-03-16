import React from 'react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';

const AboutPanel = () => {
  return (
    <Card className="mt-6">
      <h2 className="text-xl mb-4">About</h2>
      <div className="space-y-4">
        <div className="text-center">
          <div className="text-4xl mb-2">🎵</div>
          <h3 className="font-semibold text-lg">Audio/Video Editor</h3>
          <p className="text-sm text-gray-500">Version 1.0.0</p>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Features</h3>
          <ul className="space-y-1 text-sm text-gray-600">
            <li>Audio and video editing</li>
            <li>Multi-track timeline</li>
            <li>Real-time effects</li>
            <li>Export to multiple formats</li>
            <li>Cloud storage support</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Credits</h3>
          <p className="text-sm text-gray-500">
            Built with React, TypeScript, and Tailwind CSS
          </p>
        </div>
        <Button asChild>
          <a
            href="https://github.com/example"
            target="_blank"
            className="w-full text-left justify-start"
          >
            View on GitHub
          </a>
        </Button>
      </div>
    </Card>
  );
};

export default AboutPanel;