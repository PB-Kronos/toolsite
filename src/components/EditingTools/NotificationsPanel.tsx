import React from 'react';
import { Card } from '../ui/card';

const NotificationsPanel = () => {
  const [notifications, setNotifications] = useState([]);

  return (
    <Card className="mt-6">
      <h2 className="text-xl mb-4">Notifications</h2>
      <div className="space-y-4">
        <div className="overflow-y-auto max-h-48">
          <ul className="space-y-2">
            {notifications.map((notification, index) => (
              <li key={index} className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-800 rounded">
                <span className="text-sm truncate">{notification.message}</span>
                <span className="text-xs text-gray-500">{notification.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  );
};

export default NotificationsPanel;