import React from 'react';

const Waveform = ({ waveformData }) => {
  return (
    <svg className="w-full h-full" viewBox="0 0 1000 100">
      {waveformData.map((point, index) => (
        <line
          key={index}
          x1={index * 10}
          y1={50 + point * 50}
          x2={index * 10}
          y2={50 - point * 50}
          stroke="currentColor"
          strokeWidth="2"
        />
      ))}
    </svg>
  );
};

export default Waveform;