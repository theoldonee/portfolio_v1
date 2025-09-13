import { Button } from "@/components/ui/button";
import { ExperienceSection } from "@/modules/genreral/ui/components/experience-section/index";
import { Hero } from "@/modules/home/ui/components/hero/index";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <Hero/>
      {/* About */}
      <div id="About" className="w-full h-[calc(100vh-200px)] bg-white flex flex-col items-center justify-center gap-3.5">
        <span
          className="text-5xl"
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
        <Button>
          More About Me
        </Button>
      </div>
      {/* Interest */}
      {/* Technologies */}
      {/* Cv */}
      {/* What I built */}
      {/* Get in touch */}
      {/* Footer */}
    </div>
  );
}
