'use client';

import { useState } from 'react';
import { Card } from '../ui/card';

export function MergeFadeControls() {
  const [mergePoint, setMergePoint] = useState(50);
  const [fadeDuration, setFadeDuration] = useState(1000);

  return (
    <Card className="p-4">
      <h2 className="text-lg font-semibold mb-4">Merge & Fade</h2>
      <div className="space-y-4">
        <div>
          <div className="flex justify-between text-sm mb-2">
            <span>Merge Point</span>
            <span>{mergePoint}%</span>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={mergePoint}
            onChange={(e) => setMergePoint(parseInt(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
        </div>
        <div>
          <div className="flex justify-between text-sm mb-2">
            <span>Fade Duration</span>
            <span>{fadeDuration}ms</span>
          </div>
          <input
            type="range"
            min="0"
            max="5000"
            step="100"
            value={fadeDuration}
            onChange={(e) => setFadeDuration(parseInt(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
        </div>
      </div>
    </Card>
  );
}