import React from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { useAudioContext } from 'react-audio-context';

const MergeFadeControls = () => {
  const [audio, setAudio] = useState(null);
  const [mergePosition, setMergePosition] = useState(0);
  const [fadeDuration, setFadeDuration] = useState(0);
  const [isEditing, setIsEditing] = useState(false);

  const [audioContext, setAudioContext] = useAudioContext();

  useEffect(() => {
    if (audio) {
      audioContext.setAudioBuffer(audio);
    }
  }, [audio]);

  const handleMergeChange = (e) => {
    setMergePosition(e.nativeEvent.offsetX);
    setIsEditing(true);
  };

  const handleFadeChange = (e) => {
    setFadeDuration(e.nativeEvent.offsetX);
    setIsEditing(true);
  };

  return (
    <div className="merge-fade-controls p-4 bg-gray-800 text-white">
      <h2 className="text-xl mb-4">Merge & Fade</h2>
      <div className="flex flex-col space-y-2">
        <div className="flex items-center space-x-2">
          <div className="flex-1 relative h-4 bg-gray-700 rounded-lg shadow-sm cursor-grab">
            <div
              ref={ref}
              className="absolute inset-0 bg-gray-600 rounded-lg h-full w-full"
            />
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <div className="flex-1 relative h-4 bg-gray-700 rounded-lg shadow-sm cursor-grab">
            <div
              ref={ref}
              className="absolute inset-0 bg-gray-600 rounded-lg h-full w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MergeFadeControls;