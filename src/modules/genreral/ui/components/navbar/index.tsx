import { Button } from "@/components/ui/button";
import Link from "next/link";

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

export const Navbar = () =>{
    return(
        <nav className="fixed top-0 h-16 bg-transparent w-full flex justify-end items-center gap-2 pr-2">
            {items.map((item) => (
                <Link href={item.url} scroll={false} key={item.title}>
                    <Button 
                    className="bg-transparent hover:cursor-pointer"
                    >
                        <span>{item.title}</span>
                    </Button>
                </Link>
            ))}
        </nav>
    );
}