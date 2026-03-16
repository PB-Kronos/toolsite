'use client';

import { useState } from 'react';
import { Card } from '../ui/card';

export function EQControls() {
  const [eqValues, setEqValues] = useState({
    low: 0,
    mid: 0,
    high: 0,
  });

  return (
    <Card className="p-4">
      <h2 className="text-lg font-semibold mb-4">Equalizer</h2>
      <div className="space-y-4">
        <div>
          <div className="flex justify-between text-sm mb-2">
            <span>Low</span>
            <span>{eqValues.low} dB</span>
          </div>
          <input
            type="range"
            min="-12"
            max="12"
            value={eqValues.low}
            onChange={(e) => setEqValues({...eqValues, low: parseInt(e.target.value)})}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
        </div>
        <div>
          <div className="flex justify-between text-sm mb-2">
            <span>Mid</span>
            <span>{eqValues.mid} dB</span>
          </div>
          <input
            type="range"
            min="-12"
            max="12"
            value={eqValues.mid}
            onChange={(e) => setEqValues({...eqValues, mid: parseInt(e.target.value)})}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
        </div>
        <div>
          <div className="flex justify-between text-sm mb-2">
            <span>High</span>
            <span>{eqValues.high} dB</span>
          </div>
          <input
            type="range"
            min="-12"
            max="12"
            value={eqValues.high}
            onChange={(e) => setEqValues({...eqValues, high: parseInt(e.target.value)})}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
        </div>
      </div>
    </Card>
  );
}