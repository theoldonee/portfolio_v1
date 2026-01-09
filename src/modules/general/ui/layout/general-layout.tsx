import { Contact } from "../components/contact";
import { Footer } from "../components/footer/footer";
import { Resume } from "../components/resume";

interface GeneralLayoutProps{
    children: React.ReactNode;
}

export const 
GeneralLayout = ({children}:GeneralLayoutProps) =>{
    return(
        <div className="w-full"> 
            {children}
            {/* Cv */}
            <Resume/>
            {/* Get in touch */}
            <Contact/>
            {/* Footer */}
            <Footer/>
        </div>
    );
}