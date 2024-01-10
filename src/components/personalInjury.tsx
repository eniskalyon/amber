import React from 'react';
import { useSectionInView } from '@/lib/hooks';

export default function PersonalInjury() {

  const { ref } = useSectionInView('Personal Injury');

  return (
    <section 
      ref={ref}
      id="personal-injury"
      className="container-section my-10 relative bg-cover bg-center bg-fixed h-110 w-full px-6 rounded-xl gap-4" 
      style={{ backgroundImage: `url(/personal-injury.jpg)` }}
    >
      {/* <div className="absolute inset-0 bg-black bg-opacity-30 flex justify-center items-center rounded-lg"> */}
      <div className="text-slate-700 rounded-xl bg-white bg-opacity-70 font-bold p-1">
      <h1 className='text-4xl font-bold m-2'>Personal Injury</h1>

      
        </div>
        <div className="text-slate-700 rounded-xl bg-white bg-opacity-80 font-bold p-4 md:p-8">
        To qualify for a road traffic accident compensation claim, the accident must have been all or partly someone else&apos;s fault. Contact us to learn more.
     
        </div>
      {/* </div> */}

      <a href="#contact"><button className='btn-contact'>Learn more</button></a>
    </section>
  )
}