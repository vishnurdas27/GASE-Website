import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// Quick way to check the API is alive
app.get('/api/health', (req, res) => {
  res.json({ ok: true, service: 'gase-server', time: new Date().toISOString() });
});

// TODO: POST /api/contact for the enquiry form

app.listen(PORT, () => {
  console.log(`GASE server listening on http://localhost:${PORT}`);
});
