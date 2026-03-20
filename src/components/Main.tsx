import AboutMe from "./About"
import SectionProject from "./SectionProject"
import "../styles/animations.css"

function Main(){

    return(
        <div className="relative">

            <div className="blur-2xl p-[10rem]">
                <div className="box-spin absolute bg-[#457812] translate-x-[-15rem] w-[70rem] h-[70rem] triangle z-0 blur-2xl"></div>
            </div>

            <AboutMe />
            
            <SectionProject /> 
        </div>
    )
}

export default Main