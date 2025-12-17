
import { Raleway } from "next/font/google";

import { ExperienceSection } from "@/modules/general/ui/components/experience-section/index";
import { Hero } from "@/modules/home/ui/components/hero/index";
import {About } from "@/modules/home/ui/components/about/index";
import { Contact } from "@/modules/general/ui/components/contact";
import { Footer } from "@/modules/general/ui/components/footer/footer";
import { Resume } from "@/modules/general/ui/components/resume";

const raleway = Raleway({ subsets: ["latin"]});

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <Hero/>
      {/* About */}
      <About/>
      {/* Interest */}
      <div id="Passion" className="w-full h-[calc(100vh-200px)] flex items-center justify-center gap-3.5 bg-amber-300">
        
      </div>
      {/* Technologies */}
      <ExperienceSection/>
      {/* Cv */}
      <Resume/>
      {/* What I built */}
      {/* Get in touch */}
      <Contact/>
      {/* Footer */}
      <Footer/>
    </div>
  ); 
}
