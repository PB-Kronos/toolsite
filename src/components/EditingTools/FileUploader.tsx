'use client';

import { useState } from 'react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Upload, FileAudio, FileVideo } from 'lucide-react';

export function FileUploader() {
  const [files, setFiles] = useState<File[]>([]);
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFiles = Array.from(e.dataTransfer.files);
    setFiles(prev => [...prev, ...droppedFiles]);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      setFiles(prev => [...prev, ...selectedFiles]);
    }
  };

  return (
    <Card className="p-6">
      <div
        className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
          isDragging
            ? 'border-primary bg-primary/5'
            : 'border-gray-300 dark:border-gray-700'
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <div className="space-y-4">
          <Upload className="h-12 w-12 mx-auto text-gray-400" />
          <div>
            <p className="text-lg font-medium">Drop your audio/video files here</p>
            <p className="text-sm text-muted-foreground">
              Supports: MP3, MP4, WAV, FLAC, AAC, MOV (max 500MB)
            </p>
          </div>
          <Button asChild>
            <label className="cursor-pointer">
              <input
                type="file"
                multiple
                accept=".mp3,.mp4,.wav,.flac,.aac,.mov"
                className="hidden"
                onChange={handleFileSelect}
              />
              Browse Files
            </label>
          </Button>
        </div>
      </div>

      {files.length > 0 && (
        <div className="mt-4">
          <h3 className="font-semibold mb-2">Selected Files ({files.length})</h3>
          <ul className="space-y-2">
            {files.map((file, index) => (
              <li key={index} className="flex items-center justify-between p-2 bg-muted rounded">
                <div className="flex items-center gap-2">
                  {file.type.startsWith('audio/') ? (
                    <FileAudio className="h-4 w-4" />
                  ) : (
                    <FileVideo className="h-4 w-4" />
                  )}
                  <span className="text-sm truncate">{file.name}</span>
                </div>
                <span className="text-xs text-muted-foreground">
                  {(file.size / 1024 / 1024).toFixed(2)} MB
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </Card>
  );
}