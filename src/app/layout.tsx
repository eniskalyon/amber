import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import { FaWhatsapp, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'; // Import necessary icons

import FloatingButton from "@/components/FloatingButton";
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Amber Accident Claims',
  description: 'Amber Accident Claims',
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className='!scroll-smooth'>
      <body className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36`}>
      
       <ActiveSectionContextProvider>
        <Header />
        {children}
        <FloatingButton
  icon={FaWhatsapp}
  link="https://wa.me/+447951009239"
  position="fixed bottom-4 right-4"
  backgroundColor="bg-green-500"
  hoverColor="hover:bg-green-600"
/>

<FloatingButton
  icon={FaPhone}
  link="tel:01214565566"
  position="fixed bottom-16 right-4" // Different positioning
  backgroundColor="bg-blue-500"
  hoverColor="hover:bg-blue-600"
/>

<FloatingButton
  icon={FaMapMarkerAlt}
  link="https://www.google.com/maps/place/Amber+Accident+Claims/@52.4863009,-1.9401358,17z/data=!3m1!4b1!4m6!3m5!1s0x4870bd1b06089047:0x4162c65993acaddd!8m2!3d52.4863009!4d-1.9401358!16s%2Fg%2F1tdltqgd?entry=ttu"
  position="top-24 right-4 fixed hidden xl:flex"
  backgroundColor="bg-red-500"
  hoverColor="hover:bg-red-600"
  text="Dudley Rd"
/>
<FloatingButton
  icon={FaMapMarkerAlt}
  link="https://www.google.com/maps/place/Amber+Accident+Claims+Ltd/@52.4882217,-1.8437388,15z/data=!4m2!3m1!1s0x0:0x8ab6fd8643997c8a?sa=X&ved=2ahUKEwjMqfHDnPX8AhWpi_0HHedFDXIQ_BJ6BAhKEAg"
  position="hidden top-40 right-4 fixed hidden xl:flex"
  backgroundColor="bg-yellow-500"
  hoverColor="hover:bg-yellow-600"
  text="Alum Rock"
/>

       </ActiveSectionContextProvider>
        </body>
    </html>
  )
}
