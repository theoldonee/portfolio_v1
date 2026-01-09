import { GeneralLayout } from "@/modules/general/ui/layout/general-layout";
import { Navbar } from "@/modules/general/ui/components/navbar";

interface HomeLayoutProps{
    children: React.ReactNode;
}

export function HomeLayout({children}: HomeLayoutProps){
    return(
        <GeneralLayout>
            <Navbar />
            {children}
        </GeneralLayout>
    );
}