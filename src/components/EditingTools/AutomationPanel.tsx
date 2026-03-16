import React from 'react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';

const AutomationPanel = () => {
  const [automationRules, setAutomationRules] = useState([]);

  const handleAddRule = () => {
    // Add automation rule logic here
  };

  const handleDeleteRule = (index) => {
    // Delete automation rule logic here
  };

  return (
    <Card className="mt-6">
      <h2 className="text-xl mb-4">Automation</h2>
      <div className="space-y-4">
        <Button onClick={handleAddRule}>Add Automation Rule</Button>
        <div className="overflow-y-auto max-h-48">
          <ul className="space-y-2">
            {automationRules.map((rule, index) => (
              <li key={index} className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-800 rounded">
                <span className="text-sm truncate">{rule.name}</span>
                <Button size="sm" onClick={() => handleDeleteRule(index)}>Delete</Button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  );
};

export default AutomationPanel;