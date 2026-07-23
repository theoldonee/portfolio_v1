import { programmingProjects, ProjectInterface, foldetPath as imagePath } from "@/modules/projects/data/programming-projetcs";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from 'next/image'
import { Gears } from "../svg/gears";
import { AlertCircleIcon } from "lucide-react";
import { StackPill } from "./stack-pill";
import { StyleInterface } from "@/lib/sharedInterfaces";


export function CodeProjects(){
    const [hoveredProject, setHoveredProject] = useState<ProjectInterface>(programmingProjects[0]);

    const Hovering = (project : ProjectInterface) => {
        setHoveredProject(project);
    }

    return(
        <div className="w-full h-svh flex "
            style={{background: hoveredProject.backgroundColour }}
        >

            <ProjectImage hoveredProject={hoveredProject}/>

            <div className="w-[33.3%] h-full flex justify-end items-center flex-col "
            style={{color: hoveredProject.foregroundColour }}>

                <div className="w-full h-auto flex justify-around items-end border-b-3" style={{borderColor: hoveredProject.foregroundColour}}>
                    <span className="text-5xl font-bold">Works</span> 
                    <span className="text-2xl font-bold">{programmingProjects.length}</span>
                </div>
                
                <div className="w-full h-[600px]">
                    {
                        programmingProjects.map( project => (
                            <motion.div key={project.projectName} className="text-3xl font-bold h-20 border-t-3 flex items-center justify-between cursor-pointer" onHoverStart={() => Hovering(project)}
                            style={{borderColor: hoveredProject.foregroundColour}}
                            >
                                <motion.span
                                animate={hoveredProject.projectName == project.projectName ? {x:20} : {x:0}}
                                transition={{
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 30,
                                }}
                                >{project.projectName}</motion.span>
                                <span className="font-light">{project.type}</span>
                            </motion.div>
                        ))
                    }
                </div>

            </div>

            <TechStack hoveredProject={hoveredProject}/>
            
        </div>
    )

}

const ProjectImage = ({ hoveredProject }: { hoveredProject: ProjectInterface }) => {
    return(
        <div className=" w-[33.3%] h-full flex items-center">
            <div className=" w-[90%] h-[600px] relative">
                {
                    programmingProjects.map( project => (
                        <motion.div key={project.projectName}
                        style={{ position: 'absolute', width: '100%', height: '100%', opacity:0}}
                        animate={hoveredProject.projectName == project.projectName ? {opacity:100,} : {opacity:0,}}
                        transition={{
                            duration:0.5
                        }}
                        >
                            <Image
                                className="rounded-tr-2xl rounded-br-2xl"
                                src={imagePath + project.imgUrl} 
                                alt="Description"
                                fill
                                sizes="100vw"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </motion.div>
                    ))
                }
                
            </div>

        </div>
    )
}

const TechStack = ({ hoveredProject }: { hoveredProject: ProjectInterface }) => {

    const style = {
        colour: hoveredProject.foregroundColour,
        fill: hoveredProject.foregroundColour,
    }

    return(
        <div className=" w-[33.3%] h-full flex items-center justify-end">
            <div className={"w-[90%] h-[600px] rounded-bl-2xl rounded-tl-2xl border-2 flex justify-center items-center"}
            style={{borderColor: hoveredProject.foregroundColour}}
            >
                {
                    hoveredProject.techStack.length == 0 ? <ConstructionTag style={style}/> : <Stack techStack={hoveredProject.techStack} style={style}/>
                }
                
                
            </div>
        </div>
    )
}

const Stack = ({style, techStack} : {style : StyleInterface, techStack: string[]}) =>{
    style.width = 50;
    style.height = 50;

    return(
        <div className="w-full h-full  pt-12 pl-6 pr-6 pb-6 overflow-y-scroll no-scrollbar">
            <div className="gap-x-2.5 gap-y-4.5 flex flex-wrap">
                {techStack.map( item => (
                    <StackPill key={item} stack={item} style={style}/>
                ))}

            </div>
        </div>
    )
}



const ConstructionTag = ({style} : {style : StyleInterface}) => {
    style.scale = 0.5;

    return(
        <div  className=" w-full h-full ">
            <div>
                <Gears style={style}/>
            </div>
            <div className="flex justify-center items-center gap-1.5 text-2xl "
            style={{color: style.fill}}>
                <AlertCircleIcon/>
                <span>Under Construction</span>
            </div>
        </div>
    )
}
