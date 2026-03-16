import React from 'react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';

const ProjectTemplates = () => {
  const [templates, setTemplates] = useState([
    { name: 'Podcast', description: 'Audio podcast template' },
    { name: 'Music', description: 'Music production template' },
    { name: 'Video', description: 'Video editing template' },
    { name: 'Voice Over', description: 'Voice over template' },
  ]);

  const handleApplyTemplate = (template) => {
    // Apply template logic here
  };

  return (
    <Card className="mt-6">
      <h2 className="text-xl mb-4">Project Templates</h2>
      <div className="space-y-4">
        <div className="overflow-y-auto max-h-48">
          <ul className="space-y-2">
            {templates.map((template, index) => (
              <li
                key={index}
                className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                onClick={() => handleApplyTemplate(template)}
              >
                <h3 className="font-medium text-sm mb-1">{template.name}</h3>
                <p className="text-xs text-gray-500">{template.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  );
};

export default ProjectTemplates;