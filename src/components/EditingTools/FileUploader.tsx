'use client'; 

import { useState } from 'react'; 
import { Button } from '../ui/button'; 
import { Card } from '../ui/card'; 

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
    <Card className="p-6 mt-6"> 
      <div 
        className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${ 
          isDragging 
            ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/20' 
            : 'border-gray-300 dark:border-gray-700' 
        }`} 
        onDragOver={handleDragOver} 
        onDragLeave={handleDragLeave} 
        onDrop={handleDrop} 
      > 
        <div className="space-y-4"> 
          <div className="text-4xl">🎵</div> 
          <div> 
            <p className="text-lg font-medium">Drop your audio/video files here</p> 
            <p className="text-sm text-gray-500 dark:text-gray-400"> 
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
              <li key={index} className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-800 rounded"> 
                <span className="text-sm truncate">{file.name}</span> 
                <span className="text-xs text-gray-500"> 
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