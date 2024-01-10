import React from 'react';
import { useSectionInView } from '@/lib/hooks';

export default function PersonalInjury() {

  const { ref } = useSectionInView('Credit Hire');

  return (
    <section 
      ref={ref}
      id="credit-hire"
      className="container-section my-10 relative bg-cover bg-center bg-fixed h-110 w-full px-6 rounded-xl gap-4" 
      style={{ backgroundImage: `url(/credit-hire.jpg)` }}
    >
      {/* <div className="absolute inset-0 bg-black bg-opacity-30 flex justify-center items-center rounded-lg"> */}
      <div className="text-slate-700 rounded-xl bg-white bg-opacity-70 font-bold p-1">
      <h1 className='text-4xl font-bold m-2'>Credit Hire</h1>

      
        </div>
        <div className="text-slate-700 rounded-xl bg-white bg-opacity-80 font-bold p-4 md:p-8">
        If you were involved in a car accident that wasn&apos;t your fault, a Credit Hire Claim is the process of claiming the cost of hiring the replacement vehicle from the other driver&apos;s insurance company.
At Amber Accident Claims, we provide both Private and Public Hire Vehicles according to your needs so that you can recover from your financial, material and emotional damages as swift as possible.

        </div>
      {/* </div> */}

      <a href="#contact"><button className='btn-contact'>Learn more</button></a>
    </section>
  )
}