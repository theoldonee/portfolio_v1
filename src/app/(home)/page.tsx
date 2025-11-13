import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

import { Raleway } from "next/font/google";

import { ExperienceSection } from "@/modules/general/ui/components/experience-section/index";
import { Hero } from "@/modules/home/ui/components/hero/index";
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
      <div id="About" className="w-full h-[calc(100vh-200px)] bg-white flex flex-col items-center justify-center gap-3.5">
        <span
          className={`text-4xl ${raleway.className}`}
        >ABOUT ME</span>
        <Image
          width={300}
          height={300}
          alt="me"
          src="/hero-bg.jpg"
          className="w-52 h-52 border rounded-full"
        />
        <span className="w-200">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis suscipit, at recusandae facere ipsum officiis aspernatur, dicta velit illum similique voluptate corrupti repellendus ea dolores itaque, harum commodi laudantium officia.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo dolore maiores expedita obcaecati error provident fugiat nostrum esse. Magni, eligendi? Incidunt aliquam exercitationem ab libero est quia eius minus officia?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ex eligendi porro eveniet repellendus asperiores doloremque harum! Sapiente dolores maxime saepe nobis assumenda, itaque sequi unde pariatur vitae odit quos!
        </span> 
        {/* Link to interests/passions page */}
        <Link href="/interests">
          <Button>
            More About Me
          </Button>
        </Link>
      </div>
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
