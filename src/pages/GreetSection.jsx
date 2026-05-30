import React from 'react';
import './GreetSection.css';

export default function GreetSection() {
  return (
    <section className="cp-greet">
      <div className="cp-greet-left">
        <h2 className="cp-greet-h2">
          Greetings! Dive<br />
          into the Cybernetic<br />Universe
        </h2>
        <p className="cp-greet-body">
          Our website is your gateway to a universe of neon lights, gritty streets, and
          cybernetic enhancements. Explore the high-tech, low-life world where the lines
          between humanity and machinery blur.
        </p>
      </div>
      <div className="cp-greet-right">
        <div className="cp-menu-glass">
          {["Join The Revolution", "Art And Design", "Tech And Gear", "Stories And Lore"].map((item, i) => (
            <div className="cp-menu-item" key={i}>
              <div className="cp-menu-dot" />
              <span className="cp-menu-label">{item}</span>
              <span className="cp-menu-arrow">→</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
