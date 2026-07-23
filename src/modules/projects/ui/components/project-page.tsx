"use client";

import { useParams } from "next/navigation";
import { VideoProjects } from "./video-projects";
import { CodeProjects } from "./code-projects";

export const ProjectPage = () =>{
    const param = useParams<{project: string;}>()['project'];
    if(param == "programming"){
        return(
            <CodeProjects/>
        );
    }else if(param == "design"){
        return(
            <VideoProjects/>
        );
    }else{
        return(
            <VideoProjects/>
        );
    }
    
}