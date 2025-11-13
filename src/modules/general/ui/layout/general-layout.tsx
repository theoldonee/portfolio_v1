import { Navbar } from "../components/navbar";

interface GeneralLayoutProps{
    children: React.ReactNode;
}

export const GeneralLayout = ({children}:GeneralLayoutProps) =>{
    return(
        <div className="w-full"> 
          <Navbar />
            {children}
        </div>
    );
}