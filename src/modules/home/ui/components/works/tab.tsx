"use client";

import { AnimatePresence, motion, type Variants } from "framer-motion";
import { useState, useEffect, } from "react";
import { tabItems, tabItemsIcons } from "@/modules/home/data/works-data";

const leftVariants: Variants = {
    initial: { y: -700},
    animate: { y: 0, transition: { duration: 2, ease: "easeOut" } },
    exit: { y: 700, transition: { duration: 2, ease: "easeOut" } }
};

const rightVariants: Variants = {
    initial: { y: 700 },
    animate: { y: 0, transition: { duration: 2, ease: "easeOut" } },
    exit: { y: -700, transition: { duration: 2, ease: "easeOut" } }
};



export const Tabs = () => {

    const [itemIndex, setItemIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(true);

    let timeOut = 8000;

    useEffect(() => {
        
        const updateItemIndex = () => {
            if(isAnimating){
                setItemIndex(prev => (prev + 1) % tabItems.length)
            }
        }
   
        console.log(timeOut);
        const interval = setInterval(updateItemIndex, timeOut);
        return () => clearInterval(interval);

    }, [isAnimating, timeOut]);

    const handleMouseEnter = () => {
        setIsAnimating(false);
    }

    const handleMouseLeave = () => {
        timeOut = 1000;
        setIsAnimating(true);
        const interval = setInterval(updateTimeout, timeOut);
       clearInterval(interval);
    }

    const updateTimeout = () => {
        timeOut = 8000;
    }

    const redirect = () => {
        window.location.replace(`projects/${tabItems[itemIndex].url}`);
    }

    return(
        <div 
            className="w-full h-[calc(100vh-200px)] flex- items-center justify-center " 
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave}
            onClick={redirect}
        >
            <AnimatePresence mode="wait">
                <motion.div key={itemIndex} className="w-full h-full flex" >
                    <motion.div
                        className="w-1/2 h-full"
                        variants={leftVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        >
                            <div className="w-full h-full bg-blue-400 text-white p-2.5 flex justify-center items-center border-white">
                                <div className="flex flex-col items-center justify-center gap-3 w-[500px] h-[500px]">

                                    <span className="text-2xl"><strong>{tabItems[itemIndex].title}</strong></span>
                                    <span>{tabItems[itemIndex].details}</span>
                                </div>
                            </div>
                    </motion.div>
                    
                    <motion.div 
                        className="w-1/2 h-full"
                        variants={rightVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                    >
                        <div className="w-full h-full bg-blue-400 text-white p-2.5 flex justify-center items-center border-white">
                            <div className="flex items-center justify-center w-[600px] h-[600px]">
                                <div className="flex justify-center items-center border-3 border-white rounded-full w-130 h-130">
                                   <video width="360" height="360" autoPlay loop preload="auto" muted>
                                        <source src={tabItemsIcons[itemIndex].icon} type="video/webm" />
                                        Your browser does not support the video tag.
                                    </video>
                                   
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </AnimatePresence>
        </div>
          
    );
}