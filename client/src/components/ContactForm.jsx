import { useState } from 'react';
import { services } from '../data/nav.js';

const EMPTY = { name: '', org: '', email: '', phone: '', interest: services[0].title, msg: '' };
const isEmail = (v) => /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v);

// Enquiry form. Validates in the browser for now; still needs hooking up to the API.
export default function ContactForm({ className = 'cta__form' }) {
  const [values, setValues] = useState(EMPTY);
  const [note, setNote] = useState(null);

  const set = (field) => (e) => setValues((v) => ({ ...v, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, org, email } = values;
    if (!name.trim() || !org.trim() || !isEmail(email.trim())) {
      setNote({ type: 'error', text: 'Please fill in your name, organization and a valid email.' });
      return;
    }
    setNote({
      type: 'ok',
      text: `Thank you, ${name.trim().split(' ')[0]}! Our excellence advisors will be in touch shortly.`
    });
    setValues(EMPTY);
  };

  return (
    <form className={className} onSubmit={handleSubmit} noValidate>
      <div className="field">
        <label htmlFor="name">Full name</label>
        <input id="name" name="name" type="text" placeholder="Your name" value={values.name} onChange={set('name')} required />
      </div>

      <div className="field">
        <label htmlFor="org">Organization</label>
        <input id="org" name="org" type="text" placeholder="Company / institution" value={values.org} onChange={set('org')} required />
      </div>

      <div className="field field--row">
        <div>
          <label htmlFor="email">Work email</label>
          <input id="email" name="email" type="email" placeholder="you@company.com" value={values.email} onChange={set('email')} required />
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <input id="phone" name="phone" type="tel" placeholder="+91" value={values.phone} onChange={set('phone')} />
        </div>
      </div>

      <div className="field">
        <label htmlFor="interest">I'm interested in</label>
        <select id="interest" name="interest" value={values.interest} onChange={set('interest')}>
          {services.map((s) => (
            <option key={s.to}>{s.title}</option>
          ))}
        </select>
      </div>

      <div className="field">
        <label htmlFor="msg">How can we help?</label>
        <textarea id="msg" name="msg" rows="3" placeholder="Briefly describe your goals" value={values.msg} onChange={set('msg')} />
      </div>

      <button type="submit" className="btn btn--primary btn--full">
        Request Assessment
      </button>

      <p className="form__note" role="status" style={note?.type === 'error' ? { color: '#c0392b' } : undefined}>
        {note?.text}
      </p>
    </form>
  );
}
