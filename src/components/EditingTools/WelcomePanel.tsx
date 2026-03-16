'use client';

import React from 'react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { FileAudio, FileVideo, FolderOpen } from 'lucide-react';

export function WelcomePanel() {
  return (
    <Card className="p-6">
      <div className="text-center space-y-4">
        <div className="text-4xl">🎵</div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Welcome to Audio/Video Editor</h2>
          <p className="text-sm text-muted-foreground">
            Start by uploading your media files or opening a recent project.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
          <Button variant="outline" className="h-20 flex-col">
            <FileAudio className="h-6 w-6 mb-2" />
            <span className="text-xs">Audio</span>
          </Button>
          <Button variant="outline" className="h-20 flex-col">
            <FileVideo className="h-6 w-6 mb-2" />
            <span className="text-xs">Video</span>
          </Button>
          <Button variant="outline" className="h-20 flex-col">
            <FolderOpen className="h-6 w-6 mb-2" />
            <span className="text-xs">Project</span>
          </Button>
        </div>
      </div>
    </Card>
  );
}