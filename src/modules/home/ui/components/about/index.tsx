import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Raleway } from "next/font/google";
import { about_me } from "@/modules/home/data/about_data";

const raleway = Raleway({ subsets: ["latin"]});

export const About = () =>{
    return (
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
            {about_me}
        </span> 
        {/* Link to interests/passions page */}
        <Link href="/interests">
          <Button>
            More About Me
          </Button>
        </Link>
      </div>
    );
}