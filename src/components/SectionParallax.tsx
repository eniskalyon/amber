"use client"

import React, { forwardRef } from 'react';

interface SectionParallaxProps {
  backgroundImage: string;
  textContent: string;
  title: string;
  id: string
}

const SectionParallax = forwardRef<HTMLDivElement, SectionParallaxProps>(({ backgroundImage, textContent, title, id }, ref) => {  
  
  return (
    <section 
      className="container-section my-10 relative bg-cover bg-center bg-fixed h-110 w-full px-6 rounded-xl gap-4" 
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* <div className="absolute inset-0 bg-black bg-opacity-30 flex justify-center items-center rounded-lg"> */}
      <div className="text-slate-700 rounded-xl bg-white bg-opacity-70 font-bold p-1">
      <h1 className='text-4xl font-bold m-2'>{title}</h1>
        </div>
        <div className="text-slate-700 rounded-xl bg-white bg-opacity-80 font-bold p-4 md:p-8">
          {textContent}
     
        </div>
      {/* </div> */}

      <a href="#contact"><button className='btn-contact'>Learn more</button></a>
    </section>
  );
})

SectionParallax.displayName = 'SectionParallax';

export default SectionParallax;
