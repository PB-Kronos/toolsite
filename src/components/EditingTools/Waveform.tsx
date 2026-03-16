import React from 'react';

export function Waveform() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="flex items-end gap-1 h-16">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="w-1 bg-primary/30 rounded-full"
            style={{ height: `${Math.random() * 100}%` }}
          />
        ))}
      </div>
    </div>
  );
}