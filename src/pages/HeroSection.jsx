import React from 'react';

export default function HeroSection() {
  return (
    <section className="flex flex-col md:flex-row items-start justify-between p-6 md:px-[52px] md:py-[50px] relative overflow-hidden min-h-[420px]">
      <div className="flex-1 md:pr-5 pt-[6px]">
        <h1 className="font-exo text-3xl md:text-[43px] font-extrabold leading-tight text-white mb-5 tracking-tight">
          Where <span className="text-gradient-neon">Neon Dreams<br />&amp; Digital Nightmares</span><br />
          Converge.
        </h1>
        <p className="font-rajdhani text-sm md:text-[13.5px] text-[#bababa] leading-relaxed max-w-[340px] mb-8 font-normal">
          A realm where advanced technology meets dystopian reality. Our website
          is your gateway to a universe of neon lights, gritty streets, and cybernetic
          enhancements. Explore the high-tech, low-life world where the lines
          between humanity and machinery blur.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 md:gap-9">
          <div>
            <span className="font-exo text-xl font-extrabold block text-gradient-neon">89,2K+</span>
            <span className="font-rajdhani text-[10.5px] text-[#bcbaba] uppercase tracking-wider mt-1 block font-medium">Discover the Future</span>
          </div>
          <div>
            <span className="font-exo text-xl font-extrabold block text-gradient-neon">7001+</span>
            <span className="font-rajdhani text-[10.5px] text-[#bcbaba] uppercase tracking-wider mt-1 block font-medium">Stories and Lore</span>
          </div>
          <div>
            <span className="font-exo text-xl font-extrabold block text-gradient-neon">3,124+</span>
            <span className="font-rajdhani text-[10.5px] text-[#bcbaba] uppercase tracking-wider mt-1 block font-medium">Art and Design</span>
          </div>
        </div>
      </div>
      <div className="w-full md:w-[310px] h-[200px] md:h-[330px] flex-none mt-8 md:mt-0" />
    </section>
  );
}
