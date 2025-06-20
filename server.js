// server.js

const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve all static files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Catch-all to serve index.html for any route (like "/", "/home")
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Miricl site is live at http://localhost:${PORT}`);
});


app.listen(PORT, () => {
  console.log(`🚀 Miricl site is live at http://localhost:${PORT}`);
});
