import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { FolderOpen } from 'lucide-react';

const RecentProjects = () => {
  const [recentProjects] = useState([
    { name: 'Podcast Episode 1', date: '2024-01-15' },
    { name: 'Music Track Mix', date: '2024-01-14' },
    { name: 'Video Voiceover', date: '2024-01-13' },
  ]);

  return (
    <Card className="p-4">
      <h2 className="text-lg font-semibold mb-4">Recent Projects</h2>
      <div className="space-y-2">
        {recentProjects.length === 0 ? (
          <p className="text-sm text-muted-foreground">No recent projects</p>
        ) : (
          recentProjects.map((project, index) => (
            <Button
              key={index}
              variant="ghost"
              className="w-full justify-start text-left h-auto py-2"
            >
              <FolderOpen className="h-4 w-4 mr-2" />
              <div className="flex flex-col">
                <span className="text-sm font-medium">{project.name}</span>
                <span className="text-xs text-muted-foreground">{project.date}</span>
              </div>
            </Button>
          ))
        )}
      </div>
    </Card>
  );
};

export default RecentProjects;