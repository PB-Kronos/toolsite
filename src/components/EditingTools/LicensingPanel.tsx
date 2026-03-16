import React from 'react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';

const LicensingPanel = () => {
  const [licenseInfo, setLicenseInfo] = useState({
    type: 'free',
    expires: 'never',
    features: ['basic editing', 'export to mp3'],
  });

  return (
    <Card className="mt-6">
      <h2 className="text-xl mb-4">License</h2>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-500">License Type</p>
            <p className="font-medium">{licenseInfo.type}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Expires</p>
            <p className="font-medium">{licenseInfo.expires}</p>
          </div>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Included Features</h3>
          <ul className="space-y-1">
            {licenseInfo.features.map((feature, index) => (
              <li key={index} className="text-sm text-gray-600">
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <Button asChild>
          <a
            href="https://example.com/pricing"
            target="_blank"
            className="w-full text-left justify-start"
          >
            Upgrade License
          </a>
        </Button>
      </div>
    </Card>
  );
};

export default LicensingPanel;