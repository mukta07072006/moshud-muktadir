const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Serve ALL static files from root
app.use(express.static(path.join(__dirname)));

// Special handling for contact form
app.post('/contact', express.json(), (req, res) => {
  console.log('Form data:', req.body);
  res.json({ success: true });
});

// Handle SPA routing (for React/Vue if added later)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`\nServer running: http://localhost:${PORT}`);
  console.log(`CTRL + C to stop\n`);
});
