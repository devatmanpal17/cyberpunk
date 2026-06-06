import React from 'react';

export default function DiveSection() {
  return (
    <section className="px-5 sm:px-8 md:px-12 lg:px-16 py-12 sm:py-16 md:py-20 border-t border-[#141414] text-center relative overflow-hidden">
      <h2 className="font-exo text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.18] mb-3 sm:mb-4 tracking-tight">
        Dive into the Cybernetic<br /><span className="text-gradient-neon">Universe</span>
      </h2>
      <p className="font-rajdhani text-sm sm:text-base md:text-lg text-[#bebebe] max-w-2xl mx-auto mb-10 sm:mb-14 leading-relaxed font-normal">
        A realm where advanced technology meets dystopian reality. Our website is your
        gateway to a universe of neon lights, gritty streets, and cybernetic enhancements.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 md:gap-10 text-left">
        {[
          { title: "Discover the Future" },
          { title: "Explore Features" },
          { title: "Stay Connected" },
        ].map((card, i) => (
          <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4 relative" key={i}>
            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-white/5 border border-[#ff5000]/20 rounded flex-shrink-0" />
            <div>
              <div className="font-exo text-sm sm:text-base md:text-lg font-bold text-white mb-1.5 sm:mb-2">{card.title}</div>
              <div className="font-rajdhani text-xs sm:text-sm md:text-base text-[#b9b6b6] leading-relaxed font-normal">
                Explore the high-tech, low-life world where the lines between humanity and machinery blur.
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
