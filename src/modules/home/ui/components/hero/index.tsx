"use client";
import { Raleway } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"]});
export const Hero = () =>{
    return(
        <div className="pt-16 w-full h-screen bg-[url('/hero-bg.jpg')] bg-cover bg-center flex items-center justify-center gap-4 flex-col text-white">
            <span className={`${raleway.className} text-6xl`}>HI, I'M FAVOUR</span>
            <span>Developer</span>
        </div>
    );
}