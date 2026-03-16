'use client';

import { useState } from 'react';
import { Card } from '../ui/card';

export function PitchTempoControls() {
  const [pitch, setPitch] = useState(0);
  const [tempo, setTempo] = useState(100);

  return (
    <Card className="p-4">
      <h2 className="text-lg font-semibold mb-4">Pitch & Tempo</h2>
      <div className="space-y-4">
        <div>
          <div className="flex justify-between text-sm mb-2">
            <span>Pitch</span>
            <span>{pitch > 0 ? '+' : ''}{pitch} semitones</span>
          </div>
          <input
            type="range"
            min="-12"
            max="12"
            value={pitch}
            onChange={(e) => setPitch(parseInt(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
        </div>
        <div>
          <div className="flex justify-between text-sm mb-2">
            <span>Tempo</span>
            <span>{tempo}%</span>
          </div>
          <input
            type="range"
            min="50"
            max="150"
            value={tempo}
            onChange={(e) => setTempo(parseInt(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
        </div>
      </div>
    </Card>
  );
}