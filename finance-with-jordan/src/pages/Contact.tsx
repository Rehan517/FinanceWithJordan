import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
    consultation: false,
  });
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      setForm((prev) => ({
        ...prev,
        [name]: (e.target as HTMLInputElement).checked,
      }));
    } else {
      setForm((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    // Placeholder for email sending logic
    setTimeout(() => {
      setSubmitting(false);
      setStatus('success');
    }, 1200);
  };

  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-gray-50 py-16">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg p-8 md:p-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-2 text-center">Contact Jordan</h1>
        <p className="text-gray-600 mb-8 text-center">Have a question or want to get in touch? Fill out the form below and I'll get back to you soon.</p>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name<span className="text-primary-600">*</span></label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email<span className="text-primary-600">*</span></label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
              placeholder="you@email.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">What would you like to contact about?<span className="text-primary-600">*</span></label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              value={form.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 resize-none"
              placeholder="Type your message here..."
            />
          </div>
          <div className="flex items-center">
            <input
              id="consultation"
              name="consultation"
              type="checkbox"
              checked={form.consultation}
              onChange={handleChange}
              className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
            />
            <label htmlFor="consultation" className="ml-2 block text-sm text-gray-700">
              I want to claim my <span className="font-semibold text-primary-600">free consultation</span>
            </label>
          </div>
          <button
            type="submit"
            disabled={submitting}
            className="w-full py-3 px-6 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors disabled:opacity-60"
          >
            {submitting ? 'Sending...' : 'Send Message'}
          </button>
          {status === 'success' && (
            <div className="text-green-600 text-center font-medium mt-2">Thank you! Your message has been sent.</div>
          )}
          {status === 'error' && (
            <div className="text-red-600 text-center font-medium mt-2">Oops! Something went wrong. Please try again.</div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact; 