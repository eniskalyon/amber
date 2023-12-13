import React from 'react'

export default function Brief() {
  return (
    <section className='mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem] relative w-full flex flex-col items-center justify-center'>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Card 1 */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="font-semibold text-lg mb-2">FCA Regulated</h2>
          <p>Description of Service 1.</p>
        </div>
        {/* Card 2 */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="font-semibold text-lg mb-2">Nationwide Coverage</h2>
          <p>Description of Service 2.</p>
        </div>
        {/* Card 3 */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="font-semibold text-lg mb-2">Over 12 years' experience</h2>
          <p>Description of Service 3.</p>
        </div>
      
      </div>
</section>
  )
}
