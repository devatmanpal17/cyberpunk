import React from 'react';

export default function DiveSection() {
  return (
    <section className="px-6 md:px-[52px] pt-[68px] pb-[76px] border-t border-[#141414] text-center relative overflow-hidden">
      <h2 className="font-exo text-3xl md:text-[40px] font-extrabold text-white leading-[1.18] mb-3.5 tracking-tight">
        Dive into the Cybernetic<br /><span className="text-gradient-neon">Universe</span>
      </h2>
      <p className="font-rajdhani text-sm md:text-[13px] text-[#bebebe] max-w-[490px] mx-auto mb-12 leading-relaxed font-normal">
        A realm where advanced technology meets dystopian reality. Our website is your
        gateway to a universe of neon lights, gritty streets, and cybernetic enhancements.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-left">
        {[
          { title: "Discover the Future" },
          { title: "Explore Features" },
          { title: "Stay Connected" },
        ].map((card, i) => (
          <div className="flex flex-col sm:flex-row items-start gap-4 relative" key={i}>
            <div className="w-11 h-11 bg-white/5 border border-[#ff5000]/20 rounded flex-shrink-0" />
            <div>
              <div className="font-exo text-[14.5px] font-bold text-white mb-1.5">{card.title}</div>
              <div className="font-rajdhani text-xs md:text-[12px] text-[#b9b6b6] leading-relaxed font-normal">
                Explore the high-tech, low-life world where the lines between humanity and machinery blur.
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
