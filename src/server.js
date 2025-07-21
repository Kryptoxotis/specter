const express = require('express');
const path = require('path');
const spectre = require('./spectre');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

// API endpoint for chat
app.post('/api/chat', async (req, res) => {
  const { message } = req.body;
  if (!message) return res.status(400).json({ error: 'Message required' });
  try {
    const reply = await spectre.respond(message);
    res.json({ reply });
  } catch (err) {
    res.status(500).json({ error: 'Spectre error', details: err.message });
  }
});

// Serve chat UI
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(PORT, () => {
  console.log(`Spectre server running on port ${PORT}`);
});
