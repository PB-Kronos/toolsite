const express = require('express');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const app = express();
const upload = multer({ dest: 'uploads/originals/' });

// Create required directories['originals', 'processed'].forEach(dir => {
  if (!fs.existsSync(`uploads/${dir}`)) {
    fs.mkdirSync(`uploads/${dir}`);
  }
});
// File upload endpoint
app.post('/api/upload', upload.single('file'), (req, res) => {
  const file = req.file;
  if (!file) return res.status(400).json({ error: 'No file uploaded' });

  const allowedTypes = ['mp3', 'wav', 'flac', 'mp4', 'mov', 'aac'];
  const ext = path.extname(file.originalname).toLowerCase();  if (!allowedTypes.includes(ext)) {
    return res.status(400).json({ error: 'Invalid file type' });
  }

  if (file.size > 500 * 1024 * 1024) { // 500MB limit
    return res.status(400).json({ error: 'File too large' });
  }

  const fileId = `${Date.now()}-${file.originalname}`;
  fs.renameSync(file.path, `uploads/originals/${fileId}`);

  res.json({
    fileId,
    originalName: file.originalname,
    size: file.size
  });
});

// Trim endpoint
app.post('/api/trim', (req, res) => {
  const { fileId, startTime, endTime } = req.body;
  const inputPath = `uploads/originals/${fileId}`;
  const outputPath = `uploads/processed/${fileId}-trimmed.${path.extname(inputPath).slice(1)}`;

  const command = `ffmpeg -i ${inputPath} -ss ${startTime} -to ${endTime} -c copy ${outputPath}`;
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`Trim error: ${error.message}`);
      return res.status(500).json({ error: 'Trimming failed' });
    }
    res.json({
      processedFileId: `${fileId}-trimmed`,
      downloadUrl: `/api/download/${fileId}-trimmed`
    });
  });
});
// EQ endpoint
app.post('/api/eq', (req, res) => {
  const { fileId, bands } = req.body;
  const inputPath = `uploads/originals/${fileId}`;
  const outputPath = `uploads/processed/${fileId}-eq.${path.extname(inputPath).slice(1)}`;

  const filters = bands
    .map(b => `equalizer=f=${b.frequency}:width_type=h:width=${b.bandwidth}:gain=${b.gain}`)
    .join(',');
  const command = `ffmpeg -i ${inputPath} -af "${filters}" ${outputPath}`;

  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`EQ error: ${error.message}`);      return res.status(500).json({ error: 'EQ processing failed' });
    }
    res.json({
      processedFileId: `${fileId}-eq`,
      downloadUrl: `/api/download/${fileId}-eq`
    });
  });
});
// Fade endpoint
app.post('/api/fade', (req, res) => {
  const { fileId, fadeIn, fadeOut } = req.body;
  const inputPath = `uploads/originals/${fileId}`;
  const outputPath = `uploads/processed/${fileId}-fade.${path.extname(inputPath).slice(1)}`;

  // Get duration via ffprobe  const durationCmd = `ffprobe -v error -show_entries format=duration -of default=noprint_wrappers=1:nokey=1 ${inputPath}`;
  exec(durationCmd, (error, stdout, stderr) => {
    if (error) {
      console.error(`Duration error: ${error.message}`);      return res.status(500).json({ error: 'Could not determine file duration' });
    }

    const duration = parseFloat(stdout.trim());    const fadeOutStart = duration - fadeOut;

    const command = `ffmpeg -i ${inputPath} -af "afade=t=in:st=0:d=${fadeIn},afade=t=out:st=${fadeOutStart}:d=${fadeOut}" ${outputPath}`;    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error(`Fade error: ${error.message}`);
        return res.status(500).json({ error: 'Fade processing failed' });
      }
      res.json({
        processedFileId: `${fileId}-fade`,
        downloadUrl: `/api/download/${fileId}-fade`
      });    });
  });
});

// Download endpoint
app.get('/api/download/:fileId', (req, res) => {
  const fileId = req.params.fileId;
  const filePath = `uploads/processed/${fileId}`;

  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ error: 'File not found' });
  }

  const mimeType = require('../utils/mime-type').getMimeType(filePath);
  res.header('Content-Type', mimeType);
  res.header('Content-Disposition', 'attachment');
  res.sendFile(path.resolve(filePath));
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'healthy' });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal server error' });
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));