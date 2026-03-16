app.get('/api/download/:fileId', (req, res) => {
  const fileId = req.params.fileId;
  const filePath = `uploads/processed/${fileId}`;
  
  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ error: 'File not found' });
  }
  
  const mimeType = getMimeType(filePath);
  res.header('Content-Type', mimeType);
  res.header('Content-Disposition', 'attachment');
  res.sendFile(path.resolve(filePath));
});