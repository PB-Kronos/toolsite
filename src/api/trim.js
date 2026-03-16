app.post('/api/trim', (req, res) => {
  const { fileId, startTime, endTime } = req.body;
  const inputPath = `uploads/originals/${fileId}`;
  const outputPath = `uploads/processed/${fileId}-trimmed.${path.extname(inputPath).slice(1)}`;
  
  const command = `ffmpeg -i ${inputPath} -ss ${startTime} -to ${endTime} -c copy ${outputPath}`;
  
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error trimming: ${error.message}`);
      return res.status(500).json({ error: 'Trimming failed' });
    }
    
    res.json({
      processedFileId: `${fileId}-trimmed`,
      downloadUrl: `/api/download/${fileId}-trimmed`
    });
  });
});