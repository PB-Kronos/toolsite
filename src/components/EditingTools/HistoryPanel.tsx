'use client';

import { useState } from 'react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Undo2, Redo2 } from 'lucide-react';

export function HistoryPanel() {
  const [history, setHistory] = useState([
    'Project created',
    'File imported: audio.mp3',
    'EQ adjusted',
    'Volume normalized',
  ]);
  const [currentStep, setCurrentStep] = useState(history.length - 1);

  const handleUndo = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleRedo = () => {
    if (currentStep < history.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <Card className="p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">History</h2>
        <div className="flex gap-2">
          <Button
            onClick={handleUndo}
            disabled={currentStep === 0}
            size="icon"
            variant="outline"
          >
            <Undo2 className="h-4 w-4" />
          </Button>
          <Button
            onClick={handleRedo}
            disabled={currentStep === history.length - 1}
            size="icon"
            variant="outline"
          >
            <Redo2 className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="space-y-2 max-h-48 overflow-y-auto">
        {history.map((step, index) => (
          <div
            key={index}
            className={`p-2 rounded text-sm ${
              index === currentStep
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted'
            }`}
          >
            {step}
          </div>
        ))}
      </div>
    </Card>
  );
}