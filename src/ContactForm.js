import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/xldrknkp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setResponseMessage('Thank you for contacting us! We will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setResponseMessage('There was an error submitting the form. Please try again later.');
      }
    } catch (error) {
      setResponseMessage('There was an error submitting the form. Please try again later.');
    }

    setIsSubmitting(false);
  };

  return (
    <div className="contact-form bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="form-group">
          <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-md"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-md"
          />
        </div>
        <div className="form-group">
          <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            className="w-full p-3 border border-gray-300 rounded-md"
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-2 text-white rounded-md ${isSubmitting ? 'bg-gray-400' : 'bg-yellow-500 hover:bg-yellow-600'}`}
        >
          {isSubmitting ? 'Submitting...' : 'Send Message'}
        </button>
      </form>
      {responseMessage && (
        <p className={`mt-4 text-center ${responseMessage.includes('error') ? 'text-red-500' : 'text-green-500'}`}>
          {responseMessage}
        </p>
      )}
    </div>
  );
};

export default ContactForm;
