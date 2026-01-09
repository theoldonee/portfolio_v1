
import { Raleway } from "next/font/google";

import { ExperienceSection } from "@/modules/general/ui/components/experience-section/index";
import { Hero } from "@/modules/home/ui/components/hero/index";
import {About } from "@/modules/home/ui/components/about/index";
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
    </div>
  ); 
}
