import React from 'react';
import './DiveSection.css';

export default function DiveSection() {
  return (
    <section className="cp-dive">
      <h2 className="cp-dive-h2">
        Dive into the Cybernetic<br /><span className="grad">Universe</span>
      </h2>
      <p className="cp-dive-sub">
        A realm where advanced technology meets dystopian reality. Our website is your
        gateway to a universe of neon lights, gritty streets, and cybernetic enhancements.
      </p>
      <div className="cp-dive-cards">
        {[
          { title: "Discover the Future" },
          { title: "Explore Features" },
          { title: "Stay Connected" },
        ].map((card, i) => (
          <div className="cp-dive-card" key={i}>
            <div className="cp-dive-card-icon-wrap" />
            <div>
              <div className="cp-dive-card-title">{card.title}</div>
              <div className="cp-dive-card-body">
                Explore the high-tech, low-life world where the lines between humanity and machinery blur.
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
