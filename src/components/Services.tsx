import React from 'react';

function Services() {
  return (
    <section id="services" className="bg-gray-100">
      <div className="container mx-auto p-6">
        <h2 className="text-3xl font-bold mb-4">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 bg-white rounded shadow">
            <h3 className="text-xl font-semibold mb-2">Consulting</h3>
            <p>Offering expert advice to optimize your software development processes.</p>
          </div>
          <div className="p-4 bg-white rounded shadow">
            <h3 className="text-xl font-semibold mb-2">Development</h3>
            <p>Building custom applications tailored to your business needs.</p>
          </div>
          <div className="p-4 bg-white rounded shadow">
            <h3 className="text-xl font-semibold mb-2">Training</h3>
            <p>Providing training sessions to upskill your development team.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;