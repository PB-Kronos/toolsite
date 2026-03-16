import React from 'react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';

const HelpCenter = () => {
  const [helpTopics, setHelpTopics] = useState([
    { title: 'Getting Started', description: 'Learn the basics' },
    { title: 'Audio Editing', description: 'Master audio tools' },
    { title: 'Video Editing', description: 'Work with video files' },
    { title: 'Exporting', description: 'Save your projects' },
    { title: 'Keyboard Shortcuts', description: 'Speed up your workflow' },
  ]);

  const handleOpenTopic = (topic) => {
    // Open help topic logic here
  };

  return (
    <Card className="mt-6">
      <h2 className="text-xl mb-4">Help Center</h2>
      <div className="space-y-4">
        <div className="overflow-y-auto max-h-48">
          <ul className="space-y-2">
            {helpTopics.map((topic, index) => (
              <li
                key={index}
                className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                onClick={() => handleOpenTopic(topic)}
              >
                <h3 className="font-medium text-sm mb-1">{topic.title}</h3>
                <p className="text-xs text-gray-500">{topic.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  );
};

export default HelpCenter;