import React from 'react';
import Main from './components/Main';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import FadeInSection from './components/FadeInSection'; // Import

function App() {
  return (
    <div>
      <Navbar />

      {/* 메인 섹션 */}
      <section id="home" className="section">
        <FadeInSection>
          <Main />
        </FadeInSection>
      </section>
      <section id="about">
        <About />
      </section>
      <section id="portfolio">
        <Portfolio />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;
