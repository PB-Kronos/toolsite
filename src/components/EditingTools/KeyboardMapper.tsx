import React from 'react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';

const KeyboardMapper = () => {
  const [shortcuts, setShortcuts] = useState([
    { action: 'Play/Pause', key: 'Space' },
    { action: 'Undo', key: 'Ctrl+Z' },
    { action: 'Redo', key: 'Ctrl+Y' },
    { action: 'Save', key: 'Ctrl+S' },
    { action: 'Export', key: 'Ctrl+E' },
  ]);

  const handleEditShortcut = (index) => {
    // Edit shortcut logic here
  };

  return (
    <Card className="mt-6">
      <h2 className="text-xl mb-4">Keyboard Shortcuts</h2>
      <div className="space-y-4">
        <div className="overflow-y-auto max-h-48">
          <table className="w-full text-sm">
            <thead>
              <tr>
                <th className="text-left font-medium">Action</th>
                <th className="text-left font-medium">Shortcut</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {shortcuts.map((shortcut, index) => (
                <tr key={index}>
                  <td className="pr-4">{shortcut.action}</td>
                  <td className="pr-4">{shortcut.key}</td>
                  <td>
                    <Button size="sm" onClick={() => handleEditShortcut(index)}>
                      Edit
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Card>
  );
};

export default KeyboardMapper;