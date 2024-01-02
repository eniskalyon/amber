"use client"

import React, { useState } from 'react';
import { useSectionInView } from '@/lib/hooks';
// Adjust the import path according to your project structure
import { motion } from 'framer-motion';
import { fleet } from '@/lib/data'; // Ensure this path is correct
import { Car } from '@/lib/types'; // Import the Car type, adjust the path as necessary
import SectionHeading from './section-heading';
import CarImage from './CarImage';

export default function Fleet() {
  const { ref } = useSectionInView('Fleet');


  const [activeCar, setActiveCar] = useState<Car>(fleet[0]);

  const variants = {
    initial: { x: '30%', opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: '-100%', opacity: 0 }
  };

  return (
<>
  

      <section ref={ref} id="fleet" className=' 
      container-section my-10 bg-cover bg-center bg-fixed h-110 px-6 rounded-xl gap-4
      max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem] relative w-full items-center 
      p-4
     border-2 border-opacity-40 shadow-lg
     shadow-black/[0.03] backdrop-blur-[0.5rem] mx-auto '>
     
      <div className="text-slate-700 rounded-xl bg-black bg-opacity-5 font-bold p-2 flex flex-col gap-1">
      <h1 className='text-2xl font-bold m-2'>Meet Our Brand New Fleet Of Courtesy Cars</h1>
      <p className='italic text-slate-500'>Experience the privilege of working with Birmingham's best credit hire company. </p>
      <p className='text-amber-700'>Taxi Plated Vehicles Available Within 24 hours!</p>
        </div>


<div className='flex flex-col md:flex-row-reverse md:gap-[10rem] md:justify-end'>
          <div className='w-full flex md:flex-col '>
             <CarImage car={activeCar} />
          </div>
          <div>
            <div className='w-full md:w-1/4 flex flex-wrap md:flex-col items-start gap-1'>
              {fleet.map((car: Car) => (
                <button
                  key={car.id}
                  className={`text-md rounded-lg px-2 py-1 lg:w-[8vw] flex my-1 hover:bg-amber-300 ${activeCar.id === car.id ? 'bg-amber-700 text-white' : 'bg-gray-200'}`}
                  onClick={() => setActiveCar(car)}
                >
                  {car.name}
                </button>
              ))}
            </div>
          </div>
        </div>
        <a href="#contact"><button className='btn-contact'>Learn more</button></a>

      </section>

</>
  );
}
