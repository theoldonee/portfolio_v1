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
        offset: ["end end", "center start"]
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
        style={{backgroundColor}}
        >
            <motion.div className={`${geologica.className} text-9xl text-white flex justify-center items-center` } style={{opacity}}>
                {/* <motion.div>
                    <motion.span>H</motion.span>
                    <motion.span>E</motion.span>
                    <motion.span>L</motion.span>
                    <motion.span>L</motion.span>
                    <motion.span>O</motion.span>
                </motion.div> */}

                <motion.span className="absolute top-[42.2%] left-[560px]" style={{translateY: down, rotateZ: pos10}}>H</motion.span>
                <motion.span className="absolute top-[42.2%] left-[656px]" style={{translateY: up,  rotateZ: neg10}}>E</motion.span>
                <motion.span className="absolute top-[42.2%] left-[736px]" style={{translateY: down}}>L</motion.span>
                <motion.span className="absolute top-[42.2%] left-[806px]" style={{translateY: up,  rotateZ: pos58}}>L</motion.span>
                <motion.span className="absolute top-[42.2%] left-[873px]" style={{translateY: down}}>O</motion.span>
            </motion.div>
            
        </motion.div>
    );
}