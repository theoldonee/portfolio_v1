"use client";

import { motion, useTransform, useMotionValueEvent, MotionValue } from "framer-motion";
import { useState} from "react";
import { Geologica } from "next/font/google";

const geologica = Geologica({
  subsets: ["latin"],
  weight: "500"
});

//The cap letters after progress represents the offset order.
// e.g SECC represents ["start end", "center center"] 

export const Camera = ({yProgressSECC, yProgressCCES}: {yProgressSECC: MotionValue<number>, yProgressCCES: MotionValue<number>}) => {

    // for scalling camera and focus ring
    const scale1 = useTransform(yProgressSECC, [0, 1], [0.1, 1]);

    // for lens scaling
    const scale2 = useTransform(yProgressCCES, [0, 1], [1, 1.5]);

    const blur = useTransform(yProgressSECC, [0, 1], [0, 1.3]);

    const rotateZ = useTransform(yProgressSECC, [0, 1], [0, 100]);

    const translateY = useTransform(yProgressSECC, [0, 1], [0, 0]);

    const [lensScale, SetLensScale] = useState(scale1.get());

    useMotionValueEvent(scale1, "change", (latest) => {

        if(latest <= 1){
            SetLensScale(latest);
        }
        
    });

    useMotionValueEvent(scale2, "change", (latest) => {
        
        if(latest >= 1){
            SetLensScale(latest);
        }

    });
    
    return(
        <>
            <motion.div
                className="top-[50%] z-9"
                style={{
                    scaleX: yProgressSECC,
                    position: "absolute",
                    left: 10,
                    right: 0,
                    height: 10,
                    originX: 0,
                    backgroundColor: "black",
                }}
            />

            <motion.img
            className="absolute top-[50%] left-[50%] translate-[-50%] z-10 " 
            style={{scale: scale1}}
            src="/projects/video-edit/camera/camera.svg"
            alt="camera"
            />

            <motion.img
            className="absolute top-[50%] left-[50%] translate-[-50%] z-11 origin-center"
            style={{scale: scale1}}
            src="/projects/video-edit/camera/camera_focus_ring.svg"
            alt="camera focus ring"
            />

            <motion.img
            className="absolute top-[50%] left-[50%] translate-[-50%] z-12"
            style={{scale: lensScale, translateY}}
            src="/projects/video-edit/camera/camera_lens.svg"
            alt="camera lens"
            />

        </>
    );
}

export const AnimatedHeading = ({yProgressSESC}: {yProgressSESC: MotionValue<number>}) => {

    // for scalling camera and focus ring
    const blurValue = useTransform(yProgressSESC, [0, 1], [15, 0]);
    const blur = useTransform(blurValue, (value) => `blur(${value}px)`);

    return(
        <motion.div
            className={`${geologica.className} text-7xl absolute top-[150px] left-[50%] translate-[-50%]`}
            style={{filter: blur, }}
        >
            <motion.span
            > WELCOME 
            </motion.span>
        </motion.div>
        
    );
}