import React from 'react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';

const PackageManager = () => {
  const [packages, setPackages] = useState([
    { name: 'ffmpeg', version: '4.4', installed: true },
    { name: 'sox', version: '14.4', installed: false },
    { name: 'libmp3lame', version: '3.100', installed: true },
    { name: 'libvorbis', version: '1.3', installed: false },
  ]);

  const handleInstall = (pkg) => {
    // Install package logic here
  };

  const handleUninstall = (pkg) => {
    // Uninstall package logic here
  };

  return (
    <Card className="mt-6">
      <h2 className="text-xl mb-4">Package Manager</h2>
      <div className="space-y-4">
        <div className="overflow-y-auto max-h-48">
          <table className="w-full text-sm">
            <thead>
              <tr>
                <th className="text-left font-medium">Package</th>
                <th className="text-left font-medium">Version</th>
                <th className="text-left font-medium">Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {packages.map((pkg, index) => (
                <tr key={index}>
                  <td className="pr-4">{pkg.name}</td>
                  <td className="pr-4">{pkg.version}</td>
                  <td className="pr-4">
                    {pkg.installed ? (
                      <span className="text-green-600">Installed</span>
                    ) : (
                      <span className="text-red-600">Not Installed</span>
                    )}
                  </td>
                  <td>
                    {pkg.installed ? (
                      <Button size="sm" onClick={() => handleUninstall(pkg)}>
                        Uninstall
                      </Button>
                    ) : (
                      <Button size="sm" onClick={() => handleInstall(pkg)}>
                        Install
                      </Button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Card>
  );
};

export default PackageManager;