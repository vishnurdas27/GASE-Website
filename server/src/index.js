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

// Enquiry form submissions from the site's contact form
app.post('/api/contact', (req, res) => {
  const { name, org, email, phone, interest, msg } = req.body ?? {};

  const clean = (value) => (typeof value === 'string' ? value.trim() : '');
  const emailLooksOk = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(clean(email));

  if (!clean(name) || !clean(org) || !emailLooksOk) {
    return res.status(400).json({
      ok: false,
      error: 'Please provide your name, organization and a valid email.'
    });
  }

  // No mailbox is wired up yet, so log the enquiry to make sure it isn't lost.
  // This is where we'd forward it to email or a CRM once that's set up.
  console.log('New enquiry received:', {
    name: clean(name),
    org: clean(org),
    email: clean(email),
    phone: clean(phone),
    interest: clean(interest),
    msg: clean(msg),
    at: new Date().toISOString()
  });

  const firstName = clean(name).split(' ')[0];
  res.json({
    ok: true,
    message: `Thank you, ${firstName}! Our excellence advisors will be in touch shortly.`
  });
});

app.listen(PORT, () => {
  console.log(`GASE server listening on http://localhost:${PORT}`);
});
