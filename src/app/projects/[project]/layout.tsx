import { ProjectLayout } from "@/modules/projects/ui/layout/project-layout";

interface LayoutProps{
    children: React.ReactNode;
}

export default function Layout({children}: LayoutProps){
    return(
        <ProjectLayout>
            {children}
        </ProjectLayout>
    );
}