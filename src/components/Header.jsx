import React from 'react';

function Header() {
  return (
    <header className="bg-gray-800 text-white">
      <nav className="container mx-auto flex justify-between items-center p-6">
        <div className="text-2xl font-bold">Your Name</div>
        <div>
          <a href="#about" className="px-4">About</a>
          <a href="#services" className="px-4">Services</a>
          <a href="#contact" className="px-4">Contact</a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
