import React from 'react';

export default function GreetSection() {
  return (
    <section className="flex flex-col md:flex-row items-center p-6 md:px-[52px] md:py-[60px] bg-transparent gap-8 md:gap-[56px] relative overflow-hidden">
      <div className="flex-1 w-full">
        <h2 className="font-exo text-3xl md:text-[44px] font-extrabold leading-[1.12] text-white mb-5 tracking-tight">
          Greetings! Dive<br />
          into the Cybernetic<br />Universe
        </h2>
        <p className="font-rajdhani text-sm md:text-[13px] text-[#afadad] leading-relaxed max-w-[350px] font-normal">
          Our website is your gateway to a universe of neon lights, gritty streets, and
          cybernetic enhancements. Explore the high-tech, low-life world where the lines
          between humanity and machinery blur.
        </p>
      </div>
      <div className="flex-none w-full md:w-[252px]">
        <div className="bg-white/5 backdrop-blur-md border border-[#ff6400]/30 rounded-lg py-6 px-4 flex flex-col gap-2">
          {["Join The Revolution", "Art And Design", "Tech And Gear", "Stories And Lore"].map((item, i) => (
            <div className="flex items-center gap-4 py-2.5 px-3.5 cursor-pointer hover:bg-white/5 transition-colors rounded-md" key={i}>
              <div className={`w-2 h-2 flex-shrink-0 ${i % 2 === 0 ? "bg-neon-yellow" : "bg-[#dd1100]"}`} />
              <span className="font-exo text-sm font-bold text-white flex-1 tracking-wide">{item}</span>
              <span className="text-white text-base font-normal">→</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
