const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files (index.html)
app.use(express.static(path.join(__dirname)));

// Route for root - serve index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🚀 Miricl site is live at http://localhost:${PORT} (or your Railway URL)`);
});
