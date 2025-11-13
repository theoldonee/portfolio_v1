import Image from "next/image";
import { SocialMedia } from "./social-media"

export function Footer(){
    return(
        <div className="w-full h-70 flex flex-col bg-stone-900 items-center justify-center gap-2">
            <SocialMedia/>
            <Image
            width={80}
            height={80}
            src="alien-ship.svg"
            alt="alien-ship"
            />
            <span className="text-white">Favour Esset 2025</span>
        </div>
    );
}