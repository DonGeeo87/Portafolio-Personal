import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import AkCreations from './components/AkCreations';
import DevPortfolio from './components/DevPortfolio';
import Services from './components/Services';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-background min-h-screen text-white font-sans selection:bg-calipso selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <About />
        <AkCreations />
        <DevPortfolio />
        <Services />
      </main>
      <Contact />
    </div>
  );
}

export default App;