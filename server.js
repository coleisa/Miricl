const express = require('express');
const path = require('path');

const app = express();

// Use Railway's PORT if available, otherwise default to 8080 locally
const PORT = process.env.PORT || 8080;

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Fallback for any route to index.html (SPA support)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Miricl site is live at http://localhost:${PORT} (or your Railway URL)`);
});
