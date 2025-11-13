import { Technologies } from "./technologies";

import { Raleway } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"]});

export const ExperienceSection = () =>{
    return(
        <div className=" w-full h-[calc(100vh-100px)] bg-gray-200 flex flex-col items-center justify-center gap-5" id="Experience">
            <span className={`text-4xl ${raleway.className}`}>EXPERIENCE</span>
            <span className="w-100">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore fuga ipsum, recusandae nulla dicta ratione nam velit rerum nobis eum ab, a accusamus itaque consequuntur deserunt laudantium explicabo eveniet reprehenderit?
            </span>
            <Technologies/>
        </div>
    );
}