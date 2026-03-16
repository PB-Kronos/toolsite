import React from 'react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';

const ImportExport = () => {
  const [importFormat, setImportFormat] = useState('json');
  const [exportFormat, setExportFormat] = useState('json');

  const handleImport = () => {
    // Import logic here
  };

  const handleExport = () => {
    // Export logic here
  };

  return (
    <Card className="mt-6">
      <h2 className="text-xl mb-4">Import/Export</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Import Format</label>
          <select
            value={importFormat}
            onChange={(e) => setImportFormat(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg bg-gray-50 dark:bg-gray-800"
          >
            <option value="json">JSON</option>
            <option value="xml">XML</option>
            <option value="csv">CSV</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Export Format</label>
          <select
            value={exportFormat}
            onChange={(e) => setExportFormat(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg bg-gray-50 dark:bg-gray-800"
          >
            <option value="json">JSON</option>
            <option value="xml">XML</option>
            <option value="csv">CSV</option>
          </select>
        </div>
        <div className="flex space-x-2">
          <Button onClick={handleImport}>Import</Button>
          <Button onClick={handleExport}>Export</Button>
        </div>
      </div>
    </Card>
  );
};

export default ImportExport;