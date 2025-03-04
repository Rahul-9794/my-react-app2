import React, { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Simulated POST request (replace with your backend endpoint)
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      alert('Message sent successfully!');
    } else {
      alert('Failed to send the message.');
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 shadow-lg rounded-xl bg-white">
      <h1 className="text-xl font-bold mb-4">Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block font-medium mb-2">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full p-2 border rounded-md"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block font-medium mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full p-2 border rounded-md"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block font-medium mb-2">Message</label>
          <textarea
            id="message"
            name="message"
            className="w-full p-2 border rounded-md"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
          Send Message
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
