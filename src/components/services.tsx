"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { MdOutlinePersonalInjury } from "react-icons/md";
import { FaTaxi, FaParking } from "react-icons/fa";
import { GiTowTruck } from "react-icons/gi";
export default function Services() {

  const iconSize = 60;
  const iconColor ="#fde68a";

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
    <section className='container-section' id='services'>
      <h1 className='text-4xl font-bold mb-4'>24/7 at your service</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Card 1 */}
        <motion.div className="bg-white rounded-lg shadow-md p-6 card-services"
        initial="hidden"
        whileInView="visible"
        exit="exit"
        variants={springVariants}
        >
          <FaTaxi size={iconSize} color={iconColor}/>
          <h2 className="font-semibold text-lg mb-2">Taxi Replacement Vehicles</h2>
          <p>We provide private hire vehicles readily plated with all councils in Midlands.
Our service is tailored to your needs;
including Prestige and Hybrid taxi vehicles.</p>
        </motion.div>
        {/* Card 2 */}
        <motion.div className="bg-white rounded-lg shadow-md p-6 card-services"
        initial="hidden"
        whileInView="visible"
        exit="exit"
        variants={springVariants}
        >
          <MdOutlinePersonalInjury size={iconSize} color={iconColor} />
          <h2 className="font-semibold text-lg mb-2">Personal Injury</h2>
          <p>Your personal injury claim is as unique as everyone else's and it is dependant on the circumstances of the accident.
Therefore we work with various leading personal injury solicitors in Birmingham and throughout the UK to ensure the best outcome for your claim.
Contact us to learn more about the possible options for your claim.</p>
        </motion.div>
        {/* Card 3 */}
        <motion.div className="bg-white rounded-lg shadow-md p-6 card-services"
        initial="hidden"
        whileInView="visible"
        exit="exit"
        variants={springVariants}
        >
          <FaParking size={iconSize} color={iconColor} />
          <h2 className="font-semibold text-lg mb-2">Storage</h2>
          <p>It can be frustrating to find a safe storage option for your vehicle following an unfortunate accident.
This is why we provide safe storage services.</p>
        </motion.div>
        {/* Card 4 */}
        <motion.div className="bg-white rounded-lg shadow-md p-6 card-services"
        initial="hidden"
        whileInView="visible"
        exit="exit"
        variants={springVariants}
        >
          <GiTowTruck size={iconSize} color={iconColor} />
          <h2 className="font-semibold text-lg mb-2">Recovery</h2>
          <p>Does your vehicle need a recovery service to be taken off the road? Call us on the number below 24/7</p>
          <button type="button" className='text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900'>01214565566</button>
        </motion.div>
      </div>
    </section>
  );
}
