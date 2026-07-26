"use client"

import {motion, useScroll, useTransform} from "framer-motion";
import { useRef } from "react";
import { Geologica } from "next/font/google";

const geologica = Geologica({
  subsets: ["latin"],
  weight: "500"
});

export const VideoHero = () => {
    const heroContainer = useRef(null);

    const {scrollYProgress} =  useScroll({
        target:heroContainer,
        offset: ["end end", "end start"]
    });

    const backgroundColor = useTransform(scrollYProgress, [0, 1], ["#000", "#fff"]);

    const down = useTransform(scrollYProgress, [0, 1], [0, 100]);
    const up = useTransform(scrollYProgress, [0, 1], [0, -100]);

    const opacity = useTransform(scrollYProgress, [0, 1], [100, 0]);
    const pos10 = useTransform(scrollYProgress, [0, 1], [0, 10]);
    const neg10 = useTransform(scrollYProgress, [0, 1], [0, -10]);

    const pos58 = useTransform(scrollYProgress, [0, 1], [0, 58]);


    return(
        <motion.div 
        ref={heroContainer} 
        className="w-full h-dvh flex justify-center items-center relative"
        style={{opacity}}
        >
            <div className="absolute w-full h-full top-0 left-0">
                <video 
                src="./video-edit/hero/hero-video.mp4" loop autoPlay muted
                width={"full"} height={"full"}
                className="absolute z-0 top-0 left-0"/>
                <motion.div className="w-full h-full absolute z-10 top-0 left-0" style={{backgroundColor, opacity: 0.8}}/>
            </div>
            

            <motion.div className={`${geologica.className} text-9xl text-white flex justify-center items-center top-0 left-0 absolute z-30 w-full h-full` }>
                {/* <motion.div>
                    <motion.span>H</motion.span>
                    <motion.span>E</motion.span>
                    <motion.span>L</motion.span>
                    <motion.span>L</motion.span>
                    <motion.span>O</motion.span>
                </motion.div> */}

                <motion.span className="absolute top-[42.2%] left-[610px]" style={{translateY: down, rotateZ: pos10}}>H</motion.span>
                <motion.span className="absolute top-[42.2%] left-[706px]" style={{translateY: up,  rotateZ: neg10}}>E</motion.span>
                <motion.span className="absolute top-[42.2%] left-[786px]" style={{translateY: down}}>L</motion.span>
                <motion.span className="absolute top-[42.2%] left-[856px]" style={{translateY: up,  rotateZ: pos58}}>L</motion.span>
                <motion.span className="absolute top-[42.2%] left-[923px]" style={{translateY: down}}>O</motion.span>
            </motion.div>
            
            
        </motion.div>
    );
}