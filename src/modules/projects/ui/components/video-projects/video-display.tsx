
import { useScroll, motion} from "framer-motion";
import { useRef} from "react";
import { Camera, AnimatedHeading } from "./animation-items";


export const VideoDisplay = () => {
    const container = useRef(null);

    // "start end" represents when the top of the div is at the bottom of the viewport.
    // "center center" represents when the center of the div is at the center of the viewport.
    //The cap letters after scroll represents the offset order.
    // e.g SECC represents ["start end", "center center"] 

    // tracks when top of div (start) is at bottom till when the center of div is at center.
    const scrollSECC = useScroll({
        target: container,
        offset: ["start end", "center center"]
    });

    // tracks when center of div is at center till when end of div is at the top.
    const scrollCCES = useScroll({
        target: container,
        offset: ["center center", "end start"]
    });

    const scrollSESC = useScroll({
        target: container,
        offset: ["start end", "start center"]
    });

    return(
        <motion.div ref={container} className="w-full h-[800px] bg-white flex justify-center items-baseline relative">
            <AnimatedHeading
                yProgressSESC={scrollSESC.scrollYProgress}
            />
           <Camera 
                yProgressSECC={scrollSECC.scrollYProgress}
                yProgressCCES={scrollCCES.scrollYProgress}
            />
        </motion.div>
    );
}