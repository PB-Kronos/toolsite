import React from 'react';
import { Card } from '../ui/card';

const FileSystem = () => {
  const [fileSystem, setFileSystem] = useState({
    enabled: true,
    type: 'ext4',
    total: '1TB',
    used: '500GB',
    free: '500GB',
    usage: 50,
    status: 'healthy',
    location: 'cloud',
  });

  return (
    <Card className="mt-6">
      <h2 className="text-xl mb-4">File System</h2>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={fileSystem.enabled}
              onChange={(e) => setFileSystem({ ...fileSystem, enabled: e.target.checked })}
              className="mr-2"
            />
            Enable File System
          </label>
        </div>
        {fileSystem.enabled && (
          <div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">Type</p>
                <p className="font-medium">{fileSystem.type}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Total</p>
                <p className="font-medium">{fileSystem.total}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Used</p>
                <p className="font-medium">{fileSystem.used}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Free</p>
                <p className="font-medium">{fileSystem.free}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Usage</p>
                <p className="font-medium">{fileSystem.usage}%</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Status</p>
                <p className="font-medium">
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      fileSystem.status === 'healthy'
                        ? 'bg-green-100 text-green-800'
                        : fileSystem.status === 'degraded'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {fileSystem.status}
                  </span>
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Location</p>
                <p className="font-medium">{fileSystem.location}</p>
              </div>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-2">
              <div
                className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${fileSystem.usage}%` }}
              ></div>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
};

export default FileSystem;