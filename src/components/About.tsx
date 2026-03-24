import img_profile from "../assets/img-profile .png"
import { IconTailwindCSS, IconDjango, IconExpressjs, IconGit, IconJavaScript, IconMySQL, IconPostman, IconPython, IconReact } from "./Icon"

function About(){


    return(
        <div className="md:relative md:z-10 md:w-full md:p-5 md:mb-[5rem] mb-[5rem]">
                    
            <h3 className="md:text-7xl text-center font-playfair-display text-4xl mb-[50px]">Habilidades</h3>
             
            <div className="md:grid md:grid-cols-2 md:mb-[5rem]">
                <div className="md:flex md:w-full md:justify-center grid w-full justify-items-center">
                    <img className="md:rounded-full rounded-full w-1/2" src={img_profile} alt="image-profile" />
                </div>
                <div>
                    
                    <p className="font-rubik md:text-xl md:mb-[30px] p-[50px]">
                        Se dice que la programación es 10% escribir código y 90% entender por qué no funciona. Ahí es donde el análisis y perseverancia se vuelven pilares fundamentales; un error no es un freno, es una pista, una oportunidad de crecer, de pensar y establecer margenes sobre el pensamiento.
                    </p>
                    <div className="md:grid md:grid-cols-5 md:absolute md:gap-[50px] grid grid-cols-3 gap-5 p-[1rem] justify-items-center">

                        <IconJavaScript />
                        <IconPython />
                        <IconReact />
                        <IconDjango />
                        <IconGit />
                        <IconPostman />
                        <IconMySQL />
                        <IconExpressjs />
                        <IconTailwindCSS />

                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default About