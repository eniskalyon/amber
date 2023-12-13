import Brief from "@/components/brief";
import Contact from "@/components/contact";
import CreditHire from "@/components/creditHire";
import Fleet from "@/components/fleet";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import PersonalInjury from "@/components/personalInjury";
import Services from "@/components/services";


export default function Home() {
  return (
    <main className="flex flex-col items-center px-4 min-h-screen">
    
     <Hero />
     <Brief />
     <Services />
     <Fleet />
     <PersonalInjury />
     <CreditHire />
     <Contact />
     <Footer />
    </main>
  )
}
