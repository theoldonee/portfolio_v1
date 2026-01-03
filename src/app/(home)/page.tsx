
import { Raleway } from "next/font/google";

import { ExperienceSection } from "@/modules/general/ui/components/experience-section/index";
import { Hero } from "@/modules/home/ui/components/hero/index";
import {About } from "@/modules/home/ui/components/about/index";
import { Contact } from "@/modules/general/ui/components/contact";
import { Footer } from "@/modules/general/ui/components/footer/footer";
import { Resume } from "@/modules/general/ui/components/resume";
import { Works } from "@/modules/home/ui/components/works/index";

const raleway = Raleway({ subsets: ["latin"]});

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <Hero/>
      {/* About */}
      <About/>
      {/* Technologies */}
      <ExperienceSection/>
      {/* What I built */}
      <Works/>
      {/* Cv */}
      <Resume/>
      {/* Get in touch */}
      <Contact/>
      {/* Footer */}
      <Footer/>
    </div>
  ); 
}
