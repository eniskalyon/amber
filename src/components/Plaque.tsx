"use client"
import React from 'react';
import Image from 'next/image';

export default function Plaque() {
  return (
    <section className='mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem] relative w-full flex flex-col items-center justify-center'>
      <Image
        src="/enterprise-plaque.png"
        alt="Enterprise Partner Plaque"
        width={800}
        height={600}
        priority
        className="w-full h-auto max-w-3xl rounded-lg shadow-md"
      />
    </section>
  )
}