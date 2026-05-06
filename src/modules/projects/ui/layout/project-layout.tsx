import { GeneralLayout } from "@/modules/general/ui/layout/general-layout";

interface LayoutProps{
    children: React.ReactNode;
}

export function ProjectLayout({children}:LayoutProps){
    return(
        <GeneralLayout>
            {children}
        </GeneralLayout>
    );
}