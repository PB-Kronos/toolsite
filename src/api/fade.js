app.post('/api/fade', (req, res) => {
  const { fileId, fadeIn, fadeOut } = req.body;
  const inputPath = `uploads/originals/${fileId}`;
  const outputPath = `uploads/processed/${fileId}-fade.${path.extname(inputPath).slice(1)}`;

  const durationCmd = `ffprobe -v error -show_entries format=duration -of default=noprint_wrappers=1:nokey=1 ${inputPath}`;
  exec(durationCmd, (error, stdout, stderr) => {
    if (error) {
      console.error(`Duration error: ${error.message}`);
      return res.status(500).json({ error: 'Could not determine file duration' });
    }

    const duration = parseFloat(stdout.trim());
    const fadeOutStart = duration - fadeOut;

    const command = `ffmpeg -i ${inputPath} -af "afade=t=in:st=0:d=${fadeIn},afade=t=out:st=${fadeOutStart}:d=${fadeOut}" ${outputPath}`;
    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error(`Fade error: ${error.message}`);
        return res.status(500).json({ error: 'Fade processing failed' });
      }
      res.json({
        processedFileId: `${fileId}-fade`,
        downloadUrl: `/api/download/${fileId}-fade`
      });
    });  });
});