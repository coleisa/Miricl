const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

// Simple HTML page
const html = `
  <!DOCTYPE html>
  <html>
    <head>
      <title>Miricl</title>
      <style>
        body {
          margin: 0;
          padding: 0;
          background: #0a0a23;
          color: white;
          font-family: sans-serif;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100vh;
        }
        h1 {
          font-size: 3rem;
          letter-spacing: 2px;
        }
      </style>
    </head>
    <body>
      <h1>Welcome to Miricl</h1>
    </body>
  </html>
`;

app.get('/', (req, res) => {
  console.log('GET / request received');
  res.send(html);
});

app.listen(PORT, () => {
  console.log(`🚀 Miricl site is live at http://localhost:${PORT}`);
});
