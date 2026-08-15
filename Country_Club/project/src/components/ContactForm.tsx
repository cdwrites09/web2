import { useState } from 'react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'Membership Inquiry',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-surface-container-lowest ambient-shadow rounded-xl p-8 md:p-12 text-center fade-in">
        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary-fixed flex items-center justify-center">
          <span className="material-symbols-outlined text-primary text-4xl">
            check_circle
          </span>
        </div>
        <h3 className="font-headline-md text-2xl md:text-3xl text-primary mb-3">
          Thank You!
        </h3>
        <p className="text-on-surface-variant text-body-md max-w-md mx-auto mb-6">
          Your inquiry has been received. A member of our team will be in touch with you shortly.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setForm({ name: '', email: '', phone: '', interest: 'Membership Inquiry', message: '' });
          }}
          className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary rounded-full text-sm font-label-lg uppercase tracking-wider hover:bg-primary hover:text-white transition-all duration-300"
        >
          <span className="material-symbols-outlined text-base">arrow_back</span>
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-surface-container-lowest ambient-shadow rounded-xl p-8 md:p-12"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-xs font-label-sm uppercase tracking-wider text-on-surface-variant mb-2">
            Full Name *
          </label>
          <input
            type="text"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-surface-container rounded-lg border border-outline-variant focus:border-primary focus:outline-none transition-colors text-on-surface"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label className="block text-xs font-label-sm uppercase tracking-wider text-on-surface-variant mb-2">
            Email Address *
          </label>
          <input
            type="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-surface-container rounded-lg border border-outline-variant focus:border-primary focus:outline-none transition-colors text-on-surface"
            placeholder="john@example.com"
          />
        </div>
        <div>
          <label className="block text-xs font-label-sm uppercase tracking-wider text-on-surface-variant mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-surface-container rounded-lg border border-outline-variant focus:border-primary focus:outline-none transition-colors text-on-surface"
            placeholder="(601) 000-0000"
          />
        </div>
        <div>
          <label className="block text-xs font-label-sm uppercase tracking-wider text-on-surface-variant mb-2">
            I'm Interested In
          </label>
          <select
            name="interest"
            value={form.interest}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-surface-container rounded-lg border border-outline-variant focus:border-primary focus:outline-none transition-colors text-on-surface"
          >
            <option>Membership Inquiry</option>
            <option>Tee Time Request</option>
            <option>Event Booking</option>
            <option>Pro Shop</option>
            <option>General Question</option>
          </select>
        </div>
      </div>
      <div className="mb-6">
        <label className="block text-xs font-label-sm uppercase tracking-wider text-on-surface-variant mb-2">
          Message
        </label>
        <textarea
          name="message"
          rows={4}
          value={form.message}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-surface-container rounded-lg border border-outline-variant focus:border-primary focus:outline-none transition-colors text-on-surface resize-none"
          placeholder="Tell us how we can help you..."
        />
      </div>
      <button
        type="submit"
        className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-primary text-white rounded-full text-sm font-label-lg uppercase tracking-wider hover:bg-on-primary-fixed-variant transition-all duration-300"
      >
        <span className="material-symbols-outlined text-base">send</span>
        Submit Inquiry
      </button>
    </form>
  );
}
