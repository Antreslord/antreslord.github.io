import AboutMe from "./About"
import SectionProject from "./SectionProject"
import "../styles/animations.css"

function Main(){

    return(
        <div className="md:w-full md:full relative w-full">

            <div className="md:blur-2xl md:p-[10rem] md:absolute md:block hidden">
                <div className="md:z-0 md:blur-2xl md:bg-[#457812] md:translate-x-[-15rem] md:w-[70rem] md:h-[70rem] md:absolute triangle  box-spin"></div>
            </div>

            <AboutMe />
            
            <SectionProject /> 
        </div>
    )
}

export default Main