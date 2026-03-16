app.post('/api/eq', (req, res) => {
  const { fileId, bands } = req.body;
  const inputPath = `uploads/originals/${fileId}`;
  const outputPath = `uploads/processed/${fileId}-eq.${path.extname(inputPath).slice(1)}`;
  
  const filters = bands.map(band => `equalizer=f=${band.frequency}:width_type=h:width=${band.bandwidth}:gain=${band.gain}`).join(',');
  const command = `ffmpeg -i ${inputPath} -af "${filters}" ${outputPath}`;
  
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`EQ processing failed: ${error.message}`);
      return res.status(500).json({ error: 'EQ processing failed' });
    }
    
    res.json({
      processedFileId: `${fileId}-eq`,
      downloadUrl: `/api/download/${fileId}-eq`
    });
  });
});