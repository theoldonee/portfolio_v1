import { Button } from "@/components/ui/button";
import { Raleway } from "next/font/google";
import Image from "next/image";

const raleway = Raleway({
  subsets: ["latin"],
});

export function Contact(){
    return(
        <div className="w-full, h-90 bg-gray-300 flex flex-col items-center justify-center gap-3" id="Contact">
            <Image
            width={60}
            height={60}
            src="contact/mail-heart.svg"
            alt="mail-heart.svg"
            />
            <span
            className="text-3xl"
            >GET IN TOUCH</span>
            <span>If you'd like to collaborate on a project or have a quick chat feel free to</span>
            <Button
            className={`bg-transparent border-black border-1 text-black ${raleway.className} hover:text-white`}
            >Say Hello</Button>

        </div>
    );
}