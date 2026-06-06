import React from 'react';

export default function HeroSection() {
  return (
    <section className="flex flex-col md:flex-row items-start justify-between p-6 md:p-12 lg:p-16 relative overflow-hidden min-h-[420px]">
      <div className="flex-1 md:pr-8 pt-2">
        <h1 className="font-exo text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white mb-6 tracking-tight">
          Where <span className="text-gradient-neon">Neon Dreams<br />&amp; Digital Nightmares</span><br />
          Converge.
        </h1>
        <p className="font-rajdhani text-base md:text-lg text-[#bababa] leading-relaxed max-w-md mb-10 font-normal">
          A realm where advanced technology meets dystopian reality. Our website
          is your gateway to a universe of neon lights, gritty streets, and cybernetic
          enhancements. Explore the high-tech, low-life world where the lines
          between humanity and machinery blur.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 md:gap-10">
          <div>
            <span className="font-exo text-2xl font-extrabold block text-gradient-neon">89,2K+</span>
            <span className="font-rajdhani text-xs md:text-sm text-[#bcbaba] uppercase tracking-wider mt-1 block font-medium">Discover the Future</span>
          </div>
          <div>
            <span className="font-exo text-2xl font-extrabold block text-gradient-neon">7001+</span>
            <span className="font-rajdhani text-xs md:text-sm text-[#bcbaba] uppercase tracking-wider mt-1 block font-medium">Stories and Lore</span>
          </div>
          <div>
            <span className="font-exo text-2xl font-extrabold block text-gradient-neon">3,124+</span>
            <span className="font-rajdhani text-xs md:text-sm text-[#bcbaba] uppercase tracking-wider mt-1 block font-medium">Art and Design</span>
          </div>
        </div>
      </div>
      <div className="w-full md:w-2/5 lg:w-1/3 h-64 md:h-80 flex-none mt-10 md:mt-0" />
    </section>
  );
}
