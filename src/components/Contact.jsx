import React from 'react';

function Contact() {
  return (
    <section id="contact" className="container mx-auto p-6">
      <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
      <form className="max-w-md">
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input className="w-full p-2 border rounded" type="text" placeholder="Your Name" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input className="w-full p-2 border rounded" type="email" placeholder="Your Email" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Message</label>
          <textarea className="w-full p-2 border rounded" rows="4" placeholder="Your Message"></textarea>
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
