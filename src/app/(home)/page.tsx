import { Button } from "@/components/ui/button";
import { ExperienceSection } from "@/modules/genreral/ui/components/experience-section/index";
import { Hero } from "@/modules/home/ui/components/hero/index";

import Image from "next/image";
import { Raleway } from "next/font/google";

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
        {/* TODO: link to me page */}
        <Button>
          More About Me
        </Button>
      </div>
      {/* Interest */}
      <div id="Passion" className="w-full h-[calc(100vh-200px)] flex items-center justify-center gap-3.5 bg-amber-300">
        
      </div>
      {/* Technologies */}
      <ExperienceSection/>
      {/* Cv */}
      <div className="w-full bg-[url('/resume-backdrop.jpg')] bg-fixed bg-center bg-cover relative">
        <div className="w-full h-full absolute top-0 left-0 bg-black opacity-40 z-0">

        </div>
        <div className="relative z-10 w-full h-72 flex flex-col items-center justify-center gap-4">
          <span className={`text-4xl ${raleway.className} text-white`}>CHECK OUT MY RESUME</span>
          {/* TODO: add cv download on click */}
          <Button>
            Grab A Copy
          </Button>
        </div>
        
      </div>
      {/* What I built */}
      {/* Get in touch */}
      {/* Footer */}
    </div>
  );
}
