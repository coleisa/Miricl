const express = require('express');
const path = require('path');

const app = express();

// Use Railway's assigned port if available, otherwise default to 8080
const PORT = process.env.PORT || 8080;

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Fallback route: send index.html for any route (for SPA support or default page)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
