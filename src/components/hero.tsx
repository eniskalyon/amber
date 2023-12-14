"use client"

import React, { useEffect } from 'react';
import Image from 'next/image';

export default function Hero() {
    const handleScroll = () => {
        const offset = window.pageYOffset;
        const parallaxElement = document.querySelector('.parallax') as HTMLElement | null;
      
        if (parallaxElement) {
          parallaxElement.style.backgroundPositionY = -offset * 0.5 + 'px';
        }
      };
      

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className='mb-28 max-w-[80rem] text-center sm:mb-0 scroll-mt-[100rem] relative w-full min-h-screen flex items-center justify-center'>
      <div className='parallax bg-no-repeat w-full h-full absolute bottom-40 lg:top-0 lg:left-0 z-[-1]' style={{ backgroundImage: 'url(/amber-hero-lg.png)', backgroundSize: 'cover' }}>
        {/* Removed <Image> component to use CSS background for parallax */}
      </div>
      <div className='absolute top-1/4 flex rounded-lg flex-col items-center justify-center p-4
          
         '>
        <h1 className='text-4xl sm:bg-white shadow-lg
         shadow-black/[0.03] backdrop-blur-[0.5rem] bg-opacity-40 px-4 py-2 sm:rounded-full text-slate-500 font-bold mb-4'>Amber Accident Claims</h1>
        <p className='text-xl italic bg-opacity-80 px-4 py-2 bg-white sm:rounded-full'>Leading accident claims management in West Midlands.</p>
        <button className="w-[15rem] mt-16 bg-amber-400 hover:bg-amber-500 text-white text-3xl font-bold font py-2 px-4 rounded-full">
  Make a claim
</button>

      </div>
    </section>
  );
}