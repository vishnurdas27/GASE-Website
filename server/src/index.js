import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// Health check — confirms the API is up
app.get('/api/health', (req, res) => {
  res.json({ ok: true, service: 'gase-server', time: new Date().toISOString() });
});

// Contact endpoint is wired up in a later step (Step 12).

app.listen(PORT, () => {
  console.log(`GASE server listening on http://localhost:${PORT}`);
});
