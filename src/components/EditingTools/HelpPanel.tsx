'use client';

import React from 'react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { HelpCircle, Book, MessageCircle } from 'lucide-react';

export function HelpPanel() {
  return (
    <Card className="p-4">
      <h2 className="text-lg font-semibold mb-4">Help & Support</h2>
      <div className="space-y-2">
        <Button variant="ghost" className="w-full justify-start">
          <Book className="h-4 w-4 mr-2" />
          Documentation
        </Button>
        <Button variant="ghost" className="w-full justify-start">
          <MessageCircle className="h-4 w-4 mr-2" />
          Community Forum
        </Button>
        <Button variant="ghost" className="w-full justify-start">
          <HelpCircle className="h-4 w-4 mr-2" />
          Keyboard Shortcuts
        </Button>
      </div>
    </Card>
  );
}