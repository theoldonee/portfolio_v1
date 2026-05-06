import { VideoHero } from "./Hero/video-hero";
import { VideoDisplay } from "./video-display";
import { ReactLenis } from 'lenis/react';


export const VideoProjects = () => {
    return(
        <div>
            <ReactLenis root>
                <VideoHero/>
                <VideoDisplay/>
            </ReactLenis>
        </div>
    );
}