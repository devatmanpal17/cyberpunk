import React from 'react';
import './UnveilSection.css';

export default function UnveilSection() {
  return (
    <section className="cp-unveil">
      <div className="cp-unveil-right">
        <h2 className="cp-unveil-h2">
          Unveil <span className="grad">the Secrets<br />of the</span> Cybernetic<br />
          Underworld
        </h2>
        <p className="cp-unveil-body">
          A realm where advanced technology meets dystopian reality. Our website
          is your gateway to a universe of neon lights, gritty streets,
          and cybernetic enhancements.
        </p>
        <div className="cp-glass-card">
          <div className="cp-glass-card-icon" />
          <div>
            <div className="cp-glass-card-title">Join the Revolution</div>
            <div className="cp-glass-card-body">
              Explore the high-tech, low-life world where the lines between
              humanity and machinery blur.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
