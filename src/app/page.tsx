import SectionParallax from "@/components/SectionParallax";
import Brief from "@/components/brief";
import Contact from "@/components/contact";
import CreditHire from "@/components/creditHire";
import Fleet from "@/components/fleet";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import PersonalInjury from "@/components/personalInjury";
import SectionDivider from "@/components/section-divider";
import Services from "@/components/services";


export default function Home() {
  return (
    <main className="flex flex-col items-center px-4 min-h-screen">
    
     <Hero />
     <Brief />
     <SectionDivider />
     <Services />
     <SectionDivider />

     <SectionParallax 
     title="Personal Injury"
     backgroundImage="/personal-injury.jpg"
     textContent="Personal Injury: To qualify for a road traffic accident compensation claim, the accident must have been all or partly someone's else's fault.

     Contact us to learn more."
     />
     <SectionParallax 
     title="Credit Hire"
     backgroundImage="/credit-hire.jpg"
     textContent="If you were involved in a car accident that wasn't your fault, a Credit Hire Claim is the process of claiming the cost of hiring the replacement vehicle from the other driver's insurance company.

     At Amber Accident Claims, we provide both Private and Public Hire Vehicles according to your needs so that you can recover from your financial, material and emotional damages as swift as possible."
     />
          <SectionDivider />

     <Fleet />
     <SectionDivider />

     <Contact />
     <Footer />
    </main>
  )
}
