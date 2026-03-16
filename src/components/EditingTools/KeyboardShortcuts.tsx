import React from 'react';
import { Card } from '../ui/card';

const KeyboardShortcuts = () => {
  const shortcuts = [
    { key: 'Space', action: 'Play/Pause' },
    { key: 'Ctrl+Z', action: 'Undo' },
    { key: 'Ctrl+Y', action: 'Redo' },
    { key: 'Ctrl+S', action: 'Save' },
    { key: 'Ctrl+E', action: 'Export' },
    { key: 'Ctrl+O', action: 'Open File' },
  ];

  return (
    <Card className="mt-6">
      <h2 className="text-xl mb-4">Keyboard Shortcuts</h2>
      <div className="space-y-4">
        <div className="overflow-y-auto max-h-48">
          <table className="w-full text-sm">
            <thead>
              <tr>
                <th className="text-left font-medium">Shortcut</th>
                <th className="text-left font-medium">Action</th>
              </tr>
            </thead>
            <tbody>
              {shortcuts.map((shortcut, index) => (
                <tr key={index}>
                  <td className="pr-4">{shortcut.key}</td>
                  <td>{shortcut.action}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Card>
  );
};

export default KeyboardShortcuts;