import React from 'react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';

const StorageManager = () => {
  const [storage, setStorage] = useState({
    total: '512GB',
    used: '256GB',
    free: '256GB',
    usage: 50,
  });

  return (
    <Card className="mt-6">
      <h2 className="text-xl mb-4">Storage Manager</h2>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-500">Total</p>
            <p className="font-medium">{storage.total}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Used</p>
            <p className="font-medium">{storage.used}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Free</p>
            <p className="font-medium">{storage.free}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Usage</p>
            <p className="font-medium">{storage.usage}%</p>
          </div>
        </div>
        <div className="w-full bg-gray-300 rounded-full h-2">
          <div
            className="bg-blue-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${storage.usage}%` }}
          ></div>
        </div>
      </div>
    </Card>
  );
};

export default StorageManager;