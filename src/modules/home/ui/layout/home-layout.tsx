import { GeneralLayout } from "@/modules/general/ui/layout/general-layout";

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