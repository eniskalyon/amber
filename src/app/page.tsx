"use client"

import Brief from "@/components/brief";
import CreditHire from "@/components/creditHire";
import Fleet from "@/components/fleet";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import PersonalInjury from "@/components/personalInjury";
import SectionDivider from "@/components/section-divider";
import Services from "@/components/services";
import { EmailComponent } from "@/components/contactTest";
import Plaque from "@/components/Plaque";

export default function Home() {


  return (
    <main className="flex flex-col items-center px-4 min-h-screen">
    
     <Hero key="home" />
     <Plaque />
     <Brief />
     <SectionDivider />
     <Services key="services" />
     <SectionDivider />
     <PersonalInjury key="credit-hire" />
     <CreditHire />
     <SectionDivider />
     <Fleet key="fleet" />
     <SectionDivider />
     {/* <Contact key="contact" /> */}
     <EmailComponent />
     <Footer />
    </main>
  )
}
