  const { fileId, bands } = req.body;  const inputPath = `uploads/originals/${fileId}`;
  const outputPath = `uploads/processed/${fileId}-eq.${path.extname(inputPath).slice(1)}`;

  const filters = bands
    .map(b => `equalizer=f=${b.frequency}:width_type=h:width=${b.bandwidth}:gain=${b.gain}`)
    .join(',');
  const command = `ffmpeg -i ${inputPath} -af "${filters}" ${outputPath}`;

  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`EQ error: ${error.message}`);
      return res.status(500).json({ error: 'EQ processing failed' });
    }
    res.json({
      processedFileId: `${fileId}-eq`,
      downloadUrl: `/api/download/${fileId}-eq`
    });
  });});