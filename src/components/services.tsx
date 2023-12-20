"use client"

import React from 'react';
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';
import { MdOutlinePersonalInjury } from "react-icons/md";
import { FaTaxi, FaParking } from "react-icons/fa";
import { GiTowTruck } from "react-icons/gi";
import CallUsButton from './CallUsButton';
export default function Services() {

  const { ref } = useSectionInView('Services');


  const iconSize = 60;
  const iconColor ="#eab308";

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
    <motion.section id="services"  ref={ref}   className='container-section'
    initial="hidden"
    whileInView="visible"
    exit="exit"
    variants={springVariants}
    >
      <h1 className='text-4xl font-bold mb-4'>24/7 at your service</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Card 1 */}
        <div className="bg-white rounded-lg shadow-md  card-services"
       
        >
          <FaTaxi size={iconSize} color={iconColor}/>
          <h2 className="font-semibold text-lg mb-2">Taxi Replacement Vehicles</h2>
          <p>We provide private hire vehicles readily plated with all councils in Midlands.
Our service is tailored to your needs;
including Prestige and Hybrid taxi vehicles.</p>
        </div>
        {/* Card 2 */}
        <div className="bg-white rounded-lg shadow-md  card-services"
        
        >
          <MdOutlinePersonalInjury size={iconSize} color={iconColor} />
          <h2 className="font-semibold text-lg mb-2">Personal Injury</h2>
          <p>Your personal injury claim is as unique as everyone else's and it is dependant on the circumstances of the accident.
Therefore we work with various leading personal injury solicitors in Birmingham and throughout the UK to ensure the best outcome for your claim.
Contact us to learn more about the possible options for your claim.</p>
        </div>
        {/* Card 3 */}
        <div className="bg-white rounded-lg shadow-md  card-services"
     
        >
          <FaParking size={iconSize} color={iconColor} />
          <h2 className="font-semibold text-lg mb-2">Storage</h2>
          <p>It can be frustrating to find a safe storage option for your vehicle following an unfortunate accident.
This is why we provide safe storage services.</p>
        </div>
        {/* Card 4 */}
        <div className="bg-white rounded-lg shadow-md  card-services"
      
        >
          <GiTowTruck size={iconSize} color={iconColor} />
          <h2 className="font-semibold text-lg mb-2">Recovery</h2>
          <p>Does your vehicle need a recovery service to be taken off the road? Call us on the number below 24/7</p>
          <CallUsButton className="red" />
        </div>
      </div>
    </motion.section>
  );
}