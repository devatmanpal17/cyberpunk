import React from 'react';
import './HeroSection.css';

export default function HeroSection() {
  return (
    <section className="cp-hero">
      <div className="cp-hero-left">
        <h1 className="cp-hero-h1">
          Where <span className="grad">Neon Dreams<br />&amp; Digital Nightmares</span><br />
          Converge.
        </h1>
        <p className="cp-hero-body">
          A realm where advanced technology meets dystopian reality. Our website
          is your gateway to a universe of neon lights, gritty streets, and cybernetic
          enhancements. Explore the high-tech, low-life world where the lines
          between humanity and machinery blur.
        </p>
        <div className="cp-stats">
          <div>
            <span className="cp-stat-val">89,2K+</span>
            <span className="cp-stat-lbl">Discover the Future</span>
          </div>
          <div>
            <span className="cp-stat-val">7001+</span>
            <span className="cp-stat-lbl">Stories and Lore</span>
          </div>
          <div>
            <span className="cp-stat-val">3,124+</span>
            <span className="cp-stat-lbl">Art and Design</span>
          </div>
        </div>
      </div>
      <div className="cp-hero-right" />
    </section>
  );
}
