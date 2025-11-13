"use client";

import { Button } from "@/components/ui/button";
import { Raleway } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"]});

export function Resume(){
    return(
        <div className="w-full bg-[url('/resume-backdrop.jpg')] bg-fixed bg-center bg-cover relative">
        <div className="w-full h-full absolute top-0 left-0 bg-black opacity-40 z-0">

        </div>
        <div className="relative z-10 w-full h-72 flex flex-col items-center justify-center gap-4">
          <span className={`text-4xl ${raleway.className} text-white`}>CHECK OUT MY RESUME</span>
          {/* TODO: add cv download on click */}
          <Button 
            onClick={openResume}
            className="hover:cursor-pointer"
          >
            Grab A Copy
          </Button>
        </div>
        
      </div>
    );
}


function openResume()
{
    window.open("CV_v2.pdf","_blank");
}