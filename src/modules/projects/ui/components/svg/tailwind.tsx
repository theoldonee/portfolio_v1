import { StyleInterface } from "@/lib/sharedInterfaces";

export function TailwindSvg({style}: {style: StyleInterface}){
    return(
        <div style={{width: style.width, height: style.height}}>
            <svg xmlns="http://www.w3.org/2000/svg" style={{width: "full", height: "full"}} viewBox="0 0 32 32">
                <title>file_type_tailwind</title>
                <path d="M9,13.7q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q11.1,10.9,9,13.7ZM2,22.1q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q4.1,19.3,2,22.1Z" style={{fill : style.fill}}/>
            </svg>
        </div>
        
    )
}