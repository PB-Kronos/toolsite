import React from 'react';
import { Card } from '../ui/card';

const InfoPanel = () => {
  const [infoMessages, setInfoMessages] = useState([]);

  return (
    <Card className="mt-6">
      <h2 className="text-xl mb-4">Information</h2>
      <div className="space-y-4">
        <div className="overflow-y-auto max-h-48">
          <ul className="space-y-2">
            {infoMessages.map((info, index) => (
              <li key={index} className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                <h3 className="font-medium text-sm text-blue-600 mb-1">{info.title}</h3>
                <p className="text-xs text-blue-700">{info.message}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  );
};

export default InfoPanel;