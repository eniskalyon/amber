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
  link="https://wa.me/yourwhatsappnumber"
  position="fixed bottom-4 right-4"
  backgroundColor="bg-green-500"
  hoverColor="hover:bg-green-600"
/>

<FloatingButton
  icon={FaPhone}
  link="tel:yourphonenumber"
  position="fixed bottom-16 right-4" // Different positioning
  backgroundColor="bg-blue-500"
  hoverColor="hover:bg-blue-600"
/>

<FloatingButton
  icon={FaMapMarkerAlt}
  link="https://goo.gl/maps/dudleyroadlink"
  position="top-24 right-4 fixed hidden xl:flex"
  backgroundColor="bg-red-500"
  hoverColor="hover:bg-red-600"
  text="Dudley Rd"
/>
<FloatingButton
  icon={FaMapMarkerAlt}
  link="https://goo.gl/maps/alumrocklink"
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
