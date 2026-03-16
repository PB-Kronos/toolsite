import React from 'react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';

const CollaborationPanel = () => {
  const [isCollaborationEnabled, setIsCollaborationEnabled] = useState(false);
  const [collaborators, setCollaborators] = useState([]);

  const handleCollaborationToggle = () => {
    setIsCollaborationEnabled(!isCollaborationEnabled);
    // Collaboration logic here
  };

  return (
    <Card className="mt-6">
      <h2 className="text-xl mb-4">Collaboration</h2>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={isCollaborationEnabled}
              onChange={handleCollaborationToggle}
              className="mr-2"
            />
            Enable Collaboration
          </label>
        </div>
        {isCollaborationEnabled && (
          <div>
            <h3 className="font-semibold mb-2">Collaborators</h3>
            <div className="overflow-y-auto max-h-48">
              <ul className="space-y-2">
                {collaborators.map((collaborator, index) => (
                  <li key={index} className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-800 rounded">
                    <span className="text-sm truncate">{collaborator.name}</span>
                    <span className="text-xs text-gray-500">{collaborator.status}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
};

export default CollaborationPanel;