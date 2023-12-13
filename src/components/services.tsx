import React from 'react';

export default function Services() {
  return (
    <section className='mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem] relative w-full min-h-screen flex flex-col items-center justify-center' id='services'>
      <h1 className='text-4xl font-bold mb-4'>24/7 at your service</h1>
<div>this will be a ruler line</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Card 1 */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="font-semibold text-lg mb-2">Taxi Replacement Vehicles</h2>
          <p>Description of Service 1.</p>
        </div>
        {/* Card 2 */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="font-semibold text-lg mb-2">Personal Injury</h2>
          <p>Description of Service 2.</p>
        </div>
        {/* Card 3 */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="font-semibold text-lg mb-2">Storage</h2>
          <p>Description of Service 3.</p>
        </div>
        {/* Card 4 */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="font-semibold text-lg mb-2">Recovery</h2>
          <p>Description of Service 4.</p>
        </div>
      </div>
    </section>
  );
}
