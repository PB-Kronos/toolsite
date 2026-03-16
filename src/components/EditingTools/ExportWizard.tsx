import React from 'react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';

const ExportWizard = () => {
  const [step, setStep] = useState(1);
  const [exportSettings, setExportSettings] = useState({});

  const steps = [
    { title: 'Select Content', content: 'Choose what to export' },
    { title: 'Format Options', content: 'Set export format' },
    { title: 'Quality Settings', content: 'Configure quality' },
    { title: 'Destination', content: 'Choose save location' },
    { title: 'Export', content: 'Start export process' },
  ];

  const handleNext = () => {
    if (step < steps.length) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <Card className="mt-6">
      <h2 className="text-xl mb-4">Export Wizard</h2>
      <div className="space-y-4">
        <div className="flex justify-between mb-4">
          {steps.map((s, index) => (
            <div
              key={index}
              className={`flex-1 text-center pb-2 ${
                index < step ? 'text-blue-500' : 'text-gray-400'
              }`}
            >
              <div className="font-medium">{s.title}</div>
              {index === step - 1 && <div className="h-1 bg-blue-500 rounded-full mt-1"></div>}
            </div>
          ))}
        </div>
        <div className="space-y-4">
          {/* Step content would go here based on current step */}
        </div>
        <div className="flex justify-between">
          <Button onClick={handleBack} disabled={step === 1}>Back</Button>
          <Button onClick={handleNext}>{step === steps.length ? 'Finish' : 'Next'}</Button>
        </div>
      </div>
    </Card>
  );
};

export default ExportWizard;