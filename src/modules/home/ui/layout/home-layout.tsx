import { GeneralLayout } from "@/modules/genreral/ui/layout/general-layout";

interface HomeLayoutProps{
    children: React.ReactNode;
}

export function HomeLayout({children}: HomeLayoutProps){
    return(
        <>
        <GeneralLayout>
            {children}
        </GeneralLayout>
        </> 
    );
}