import React from 'react';

export default function UnveilSection() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-end p-6 md:p-12 lg:p-16 bg-transparent relative overflow-hidden">
      <div className="flex-none w-full md:w-1/2 lg:w-5/12">
        <h2 className="font-exo text-3xl md:text-4xl lg:text-5xl font-extrabold leading-[1.18] text-white mb-4 tracking-tight">
          Unveil <span className="text-gradient-neon">the Secrets<br />of the</span> Cybernetic<br />
          Underworld
        </h2>
        <p className="font-rajdhani text-base md:text-lg text-[#b8b8b8] leading-relaxed mb-8 max-w-sm font-normal">
          A realm where advanced technology meets dystopian reality. Our website
          is your gateway to a universe of neon lights, gritty streets,
          and cybernetic enhancements.
        </p>
        <div className="flex items-center gap-4 max-w-sm p-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-md cursor-pointer relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-br before:from-[#ff500012] before:to-transparent before:pointer-events-none hover:bg-white/10 transition-colors">
          <div className="w-14 h-14 flex-shrink-0 rounded-sm bg-white/5 border border-white/10" />
          <div className="z-10">
            <div className="font-exo text-sm md:text-base font-bold text-white mb-1">Join the Revolution</div>
            <div className="font-rajdhani text-xs md:text-sm text-[#b3b3b3] leading-relaxed font-normal">
              Explore the high-tech, low-life world where the lines between
              humanity and machinery blur.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
