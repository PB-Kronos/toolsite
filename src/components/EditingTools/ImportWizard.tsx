import React from 'react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';

const ImportWizard = () => {
  const [step, setStep] = useState(1);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [importSettings, setImportSettings] = useState({});

  const steps = [
    { title: 'Select Files', content: 'Choose files to import' },
    { title: 'Configure Settings', content: 'Set import options' },
    { title: 'Review', content: 'Confirm import settings' },
    { title: 'Import', content: 'Start import process' },
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
      <h2 className="text-xl mb-4">Import Wizard</h2>
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

export default ImportWizard;