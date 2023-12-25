"use client"
import React from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks';
import { sendEmail } from '@/actions/sendEmail'
import SubmitBtn from './submit-btn'

export default function Contact() {
    const { ref } = useSectionInView('Contact');

  return (
    <motion.section id="contact" ref={ref} className='scroll-mt-28 mb-20 sm:mb-28 mt-44 w-[min(100%,38rem)] text-center'
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1 }}
    >
        <SectionHeading>Let's get you covered!</SectionHeading>
        <div className='flex flex-col gap-1 mb-4'>
          <p className='text-gray-700 -mt-6'>Fill out the form below to get in contact with our Accident Claims team.
          </p>
          <br />
          <p className='text-gray-700 -mt-6'>
          Our advisers will get back to you as soon as possible.</p>
        </div>
        <form action={async (formData) => {
    await sendEmail(formData);

}} className='flex flex-col'>
    <input name="senderName" className='h-14 px-4 rounded-lg border borderBlack' type="text" required maxLength={100} placeholder='Your name'/>
    <input name="telephone" className='h-14 px-4 my-3 rounded-lg border borderBlack' type="tel" required maxLength={15} placeholder='Telephone number'/>
    <input name="accidentDate" className='h-14 px-4 my-3 rounded-lg border borderBlack' type="date" required placeholder='Accident date'/>
    <p className='text-gray-700 pb-2 pt-6'>Check below if you would like to claim personal injury, credit hire, or both (optional)</p>
    <div className='flex items-center pb-6 justify-center gap-4 text-xl'>
        <label><input type="checkbox" className='form-checkbox h-5 w-5' name="personalInjury" /> Personal Injury</label>
        <label><input type="checkbox" className='form-checkbox h-5 w-5' name="creditHire" /> Credit Hire</label>
    </div>
   
   
   <input name="senderEmail" className='h-14 px-4 my-3 rounded-lg border borderBlack' type="email" maxLength={500} placeholder='Your email (optional)'/>
  <p>You can add any accident related images by clicking below</p>
    <input name="accidentImages" className='h-14 px-4 my-3' type="file" multiple/>
   

   
    <SubmitBtn />
</form>

    </motion.section>
  )
}