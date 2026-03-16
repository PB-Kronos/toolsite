import React from 'react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';

const CommunityPanel = () => {
  return (
    <Card className="mt-6">
      <h2 className="text-xl mb-4">Community</h2>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <Button asChild>
            <a
              href="https://discord.gg/example"
              target="_blank"
              className="w-full text-left justify-start"
            >
              Discord Server
            </a>
          </Button>
          <Button asChild>
            <a
              href="https://github.com/example"
              target="_blank"
              className="w-full text-left justify-start"
            >
              GitHub Repository
            </a>
          </Button>
          <Button asChild>
            <a
              href="https://reddit.com/r/example"
              target="_blank"
              className="w-full text-left justify-start"
            >
              Reddit Community
            </a>
          </Button>
          <Button asChild>
            <a
              href="https://forum.example.com"
              target="_blank"
              className="w-full text-left justify-start"
            >
              Discussion Forum
            </a>
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default CommunityPanel;