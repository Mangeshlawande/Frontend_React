import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState('');

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Normally here you would send data to your backend or API
    setFormStatus('Submitting...');
    
    // Simulate form submission success after 2 seconds
    setTimeout(() => {
      setFormStatus('Thank you for contacting us!');
      setFormData({ name: '', email: '', message: '' });
    }, 2000);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-semibold text-center mb-8">Contact Us</h1>
      <div className="flex justify-center">
        <form className="w-full max-w-lg space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-lg font-medium">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-2 p-3 w-full border rounded-lg focus:ring-2 focus:ring-blue-400"
              placeholder="Your Name"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-lg font-medium">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-2 p-3 w-full border rounded-lg focus:ring-2 focus:ring-blue-400"
              placeholder="Your Email"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-lg font-medium">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="mt-2 p-3 w-full border rounded-lg focus:ring-2 focus:ring-blue-400"
              placeholder="Your Message"
              rows="5"
              required
            ></textarea>
          </div>

          <div>
            <button
              type="submit"
              className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition"
            >
              Submit
            </button>
          </div>

          {formStatus && (
            <div className="mt-4 text-center text-lg text-green-600">
              {formStatus}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
