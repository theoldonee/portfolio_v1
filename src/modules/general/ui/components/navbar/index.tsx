'use client';

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";

const items =[
    {
        title:"About",
        url:"#About"
    },
    {
        title:"Passion",
        url:"#Passion"
    },
    {
        title:"Experience",
        url:"#Experience"
    },
    {
        title:"Work",
        url:"#About"
    },
    {
        title:"Contact",
        url:"#Contact"
    },
];

// Sections with light/white backgrounds that need black text
const LIGHT_BACKGROUND_SECTIONS = ['About', 'Passion'];

export const Navbar = () =>{
    const [textColor, setTextColor] = useState('white');

    useEffect(() => {
        const handleScroll = () => {
            let currentSection = null;

            // Find which section we're in by checking all sections with IDs
            const sections = document.querySelectorAll('[id]');
            sections.forEach((section) => {
                const rect = section.getBoundingClientRect();
                // Check if this section is at the top of the viewport (where navbar is)
                if (rect.top <= 80 && rect.bottom >= 80) {
                    currentSection = section.id;
                }
            });

            // If no section found at top, check scroll position
            if (!currentSection) {
                // Default to dark background (white text)
                setTextColor('white');
                return;
            }

            // Determine text color based on current section
            if (LIGHT_BACKGROUND_SECTIONS.includes(currentSection)) {
                setTextColor('black');
            } else {
                setTextColor('white');
            }
        };

        // Initial check
        handleScroll();

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        };
    }, []);

    return(
        <nav className="fixed top-0 h-16 bg-transparent w-full flex justify-end items-center gap-2 pr-2 z-10">
            {items.map((item) => (
                <Link href={item.url} key={item.title}>
                    <Button 
                    className={`bg-transparent hover:cursor-pointer transition-colors duration-300 font-semibold`}
                    style={{
                        color: textColor
                    }}
                    >
                        <span>{item.title}</span>
                    </Button>
                </Link>
            ))}
        </nav>
    );
}