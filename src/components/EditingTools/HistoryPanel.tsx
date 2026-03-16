import React from 'react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';

const HistoryPanel = () => {
  const [history, setHistory] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);

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
    <Card className="mt-6">
      <h2 className="text-xl mb-4">History</h2>
      <div className="space-y-4">
        <div className="flex justify-between">
          <Button onClick={handleUndo} disabled={currentStep === 0}>
            Undo
          </Button>
          <Button onClick={handleRedo} disabled={currentStep === history.length - 1}>
            Redo
          </Button>
        </div>
        <div className="overflow-y-auto max-h-48">
          <ul className="space-y-2">
            {history.map((step, index) => (
              <li
                key={index}
                className={`px-3 py-2 rounded-lg transition-colors ${
                  index === currentStep
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
                }`}
              >
                {step}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  );
};

export default HistoryPanel;