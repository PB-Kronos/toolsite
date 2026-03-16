const mime = require('mime-types');

export const getMimeType = (filePath) => {
  const ext = path.extname(filePath).slice(1);
  return mime.lookup(ext) || 'application/octet-stream';
};