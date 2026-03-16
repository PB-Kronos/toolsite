'use client';

import { useState } from 'react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';

const RecentFiles = () => {
  const [recentFiles, setRecentFiles] = useState([]);

  const handleOpenFile = (file) => {
    // Open file logic here
  };

  return (
    <Card className="p-4">
      <h2 className="text-lg font-semibold mb-4">Recent Files</h2>
      <div className="space-y-2">
        {recentFiles.length === 0 ? (
          <p className="text-sm text-muted-foreground">No recent files</p>
        ) : (
          <div className="overflow-y-auto max-h-48">
            <ul className="space-y-2">
              {recentFiles.map((file, index) => (
                <li key={index} className="flex items-center justify-between p-2 bg-muted rounded">
                  <span className="text-sm truncate">{file.name}</span>
                  <Button size="sm" onClick={() => handleOpenFile(file)}>
                    Open
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </Card>
  );
};

export default RecentFiles;