"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { links } from '@/lib/data';
import Link from 'next/link';
import clsx from 'clsx';
import { useActiveSectionContext } from '@/context/active-section-context';

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const scrollToSection = (sectionId: string) => {
    // Find the section element
    const section = document.getElementById(sectionId);
    if (section) {
      // Calculate the top position of the section with an additional offset
      const offset = 100; // Adjust this value as needed for spacing
      const top = section.getBoundingClientRect().top + window.pageYOffset - offset;
  
      // Scroll to the section
      window.scrollTo({ top: top, behavior: 'smooth' });
    }
  };

  return (
    <header className='z-[999] relative'>
        <motion.div className='fixed top-0 left-1/2 
        -translate-x-1/2 h-[4.5rem] w-full
        rounded-none border 
        border-amber-300 border-opacity-40 bg-white bg-opacity-80 shadow-lg
         shadow-black/[0.03] backdrop-blur-[0.5rem] 
         lg:top-6 lg:h-[3.25rem] lg:w-[50rem] lg:rounded-full'
         initial={{y: -100, x: "-50%", opacity: 0}}
         animate={{y: 0, x: "-50%", opacity: 1}}
         >
        </motion.div>
        <nav className='flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 lg:top-[1.7rem] lg:h-[initial] lg:py-0'>
  <ul className='flex w-[22rem] md:w-[28rem] lg:w-[40rem] xl:w-[50rem] flex-wrap items-center justify-center gap-x-3 md:gap-x-2 gap-y-1 text-[0.9rem] md:text-[0.85rem] font-medium text-gray-500 sm:flex-nowrap'>
            {
              links.map(link => (
                <motion.li className='relative h-3/4 flex items-center justify-center'
                key={link.hash}
                initial={{y: -100, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                >
                  <Link className={clsx('flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition', {
                    'text-gray-950': activeSection === link.name,
                  })} href={link.hash}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveSection(link.name);
                    setTimeOfLastClick(Date.now());
                    const sectionId = link.hash.replace('#', '');
  scrollToSection(sectionId);
                  }}
                  >
                    {
                      link.name
                    }
                    {
                      link.name === activeSection && (<motion.span className='bg-amber-300 rounded-full absolute inset-0 -z-10' layoutId='activeSection'
                      transition={
                        {type: "spring",
                        stiffness: 380,
                        damping: 30}
                      }></motion.span>
                      )
                    }
                  </Link>
                </motion.li>
              ))
            }
          </ul>
        </nav>
    </header>
  )
}
