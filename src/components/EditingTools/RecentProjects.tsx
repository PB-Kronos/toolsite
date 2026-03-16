import React from 'react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';

const RecentProjects = () => {
  const [recentProjects, setRecentProjects] = useState([]);

  const handleOpenProject = (project) => {
    // Open project logic here
  };

  return (
    <Card className="mt-6">
      <h2 className="text-xl mb-4">Recent Projects</h2>
      <div className="space-y-4">
        {recentProjects.length === 0 ? (
          <p className="text-sm text-gray-500">No recent projects</p>
        ) : (
          <div className="overflow-y-auto max-h-48">
            <ul className="space-y-2">
              {recentProjects.map((project, index) => (
                <li key={index} className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-800 rounded">
                  <span className="text-sm truncate">{project.name}</span>
                  <Button size="sm" onClick={() => handleOpenProject(project)}>
                    Open
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </Card>
  );
};

export default RecentProjects;