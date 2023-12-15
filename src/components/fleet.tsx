"use client"

import React, { useState } from 'react';
// Adjust the import path according to your project structure
import { motion } from 'framer-motion';
import { fleet } from '@/lib/data'; // Ensure this path is correct
import { Car } from '@/lib/types'; // Import the Car type, adjust the path as necessary

export default function Fleet() {
  const [activeCar, setActiveCar] = useState<Car>(fleet[0]);

  const variants = {
    initial: { x: '30%', opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: '-100%', opacity: 0 }
  };

  return (
    <section className='my-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem] relative w-full items-center md:justify-end
    p-4
   border-2 border-opacity-40 shadow-lg
   shadow-black/[0.03] backdrop-blur-[0.5rem] rounded-lg mx-auto flex flex-col md:flex-row-reverse'>

      <div className='w-full md:w-1/2'>
 <motion.img
          key={activeCar.id} // Change key to trigger animation on state change
          src={`/fleet/${activeCar.image}`}
          alt={activeCar.name}
          className='w-full h-auto'
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ type: "spring", stiffness: 100, damping: 10 }}
        />      </div>
      
      <div className='w-full md:w-1/3 flex flex-wrap md:flex-col items-start gap-1'>
        {fleet.map((car: Car) => (
          <button
            key={car.id}
            className={`text-xl p-2 my-1 hover:bg-amber-300 ${activeCar.id === car.id ? 'bg-amber-500 text-white' : 'bg-gray-200'}`}
            onClick={() => setActiveCar(car)}
          >
            {car.name}
          </button>
        ))}
      </div>

    </section>
  );
}
