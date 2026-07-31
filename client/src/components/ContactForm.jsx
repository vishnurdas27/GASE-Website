import { useState } from 'react';
import { services } from '../data/nav.js';

const emptyForm = {
  name: '',
  org: '',
  email: '',
  phone: '',
  interest: services[0].title,
  msg: ''
};

// Enquiry form. Only checks the fields in the browser for now.
// TODO: post this to /api/contact once the backend route is ready.
export default function ContactForm({ className = 'cta__form' }) {
  const [values, setValues] = useState(emptyForm);
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const emailLooksOk = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(values.email.trim());

    if (!values.name.trim() || !values.org.trim() || !emailLooksOk) {
      setIsError(true);
      setMessage('Please fill in your name, organization and a valid email.');
      return;
    }

    const firstName = values.name.trim().split(' ')[0];
    setIsError(false);
    setMessage(`Thank you, ${firstName}! Our excellence advisors will be in touch shortly.`);
    setValues(emptyForm);
  }

  return (
    <form className={className} onSubmit={handleSubmit} noValidate>
      <div className="field">
        <label htmlFor="name">Full name</label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Your name"
          value={values.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="field">
        <label htmlFor="org">Organization</label>
        <input
          id="org"
          name="org"
          type="text"
          placeholder="Company / institution"
          value={values.org}
          onChange={handleChange}
          required
        />
      </div>

      <div className="field field--row">
        <div>
          <label htmlFor="email">Work email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@company.com"
            value={values.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+91"
            value={values.phone}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="field">
        <label htmlFor="interest">I'm interested in</label>
        <select id="interest" name="interest" value={values.interest} onChange={handleChange}>
          {services.map((service) => (
            <option key={service.to}>{service.title}</option>
          ))}
        </select>
      </div>

      <div className="field">
        <label htmlFor="msg">How can we help?</label>
        <textarea
          id="msg"
          name="msg"
          rows="3"
          placeholder="Briefly describe your goals"
          value={values.msg}
          onChange={handleChange}
        />
      </div>

      <button type="submit" className="btn btn--primary btn--full">
        Request Assessment
      </button>

      <p className="form__note" role="status" style={isError ? { color: '#c0392b' } : undefined}>
        {message}
      </p>
    </form>
  );
}
