import { Raleway } from "next/font/google";
import Image from "next/image";

const raleway = Raleway({ subsets: ["latin"]});

const items = [
    {
        title:"c-sharp",
        url:"/c-sharp.svg"
    },
    {
        title:"html-5",
        url:"/html-5.svg"
    },
    {
        title:"css-3",
        url:"/css-3.svg"
    },
    {
        title:"python",
        url:"/python.svg"
    },
    {
        title:"js",
        url:"/js.svg"
    },
    {
        title:"git",
        url:"/git.svg"
    },
    {
        title:"java-4",
        url:"/java-4.svg"
    },
    {
        title:"jquery",
        url:"/jquery.svg"
    },
    {
        title:"node-js",
        url:"/node-js.svg"
    },
    {
        title:"next-js",
        url:"/next-js.svg"
    },
    {
        title:"davinci-resolve",
        url:"/davinci-resolve.svg"
    },
    {
        title:"photoshop",
        url:"/photoshop.svg"
    },
];

export const Technologies = () =>{
    return(
        <div className="w-[700px] h-110 flex flex-col justify-center items-center gap-2.5">
            <span className={`text-3xl ${raleway.className}`}>Some Technologies I have Worked with:</span>

            <div className="w-full h-90 flex flex-wrap justify-evenly items-center flex-4 gap-2.5 p-2.5">
                {items.map((item) => 
                    <Image 
                    width={100}
                    height={100}
                    src={`experience/${item.url}`}
                    alt={item.title}
                    key={item.title}
                    />
                )}
            </div>
        </div>
    );
}