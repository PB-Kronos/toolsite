import React from 'react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';

const TemplateGallery = () => {
  const [templates, setTemplates] = useState([]);

  const handleApplyTemplate = (template) => {
    // Apply template logic here
  };

  return (
    <Card className="mt-6">
      <h2 className="text-xl mb-4">Templates</h2>
      <div className="space-y-4">
        {templates.length === 0 ? (
          <p className="text-sm text-gray-500">No templates available</p>
        ) : (
          <div className="grid grid-cols-2 gap-4">
            {templates.map((template, index) => (
              <div
                key={index}
                className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                onClick={() => handleApplyTemplate(template)}
              >
                <h3 className="font-medium text-sm mb-1">{template.name}</h3>
                <p className="text-xs text-gray-500">{template.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </Card>
  );
};

export default TemplateGallery;