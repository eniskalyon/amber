"use client"
import React from 'react';
import Image from 'next/image';
import { FaAward } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Brief() {

 

  const springVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, damping: 10 }
    },
    exit: { scale: 0.5, opacity: 0, transition: { duration: 0.3 } }
  };


  return (
    <section className='mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem] relative w-full flex flex-col items-center justify-center'>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Card 1 */}
        <motion.div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center"
          initial="hidden"
          whileInView="visible"
          exit="exit"
          variants={springVariants}
        >
          <Image src="/fca.jpg" alt="Service 1" width={500} height={300} />
          <h2 className="font-semibold text-lg mt-4 md:mt-9">FCA Regulated</h2>
        </motion.div>
        {/* Card 2 */}
        <motion.div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center"
         initial="hidden"
         whileInView="visible"
         exit="exit"
         variants={springVariants}
       >
          <Image src="/nationwide.png" alt="Service 2" width={500} height={300} />
          <h2 className="font-semibold text-lg mt-4">Nationwide Coverage</h2>
        </motion.div>
        {/* Card 3 */}
        <motion.div className="bg-white rounded-lg shadow-md p-6 md:pt-8 flex flex-col items-center justify-center"
    initial="hidden"
    whileInView="visible"
    exit="exit"
    variants={springVariants}
       >
          <FaAward size={80} /> {/* React icon with specified size */}
          <p className="font-semibold text-md md:mt-12">Over 12 years' experience</p>
        </motion.div>
      </div>
    </section>
  )
}
