import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Header />
      <main>
        <About />
        <Services />
        <Contact />
      </main>
    </div>
  );
}

export default App;
