import img_profile from "../assets/img-profile .png"
import { IconTailwindCSS, IconDjango, IconExpressjs, IconGit, IconJavaScript, IconMySQL, IconPostman, IconPython, IconReact } from "./Icon"

function About(){


    return(
        <div className="relative z-10 w-full p-5 mb-[5rem]">
                    
            <h3 className="mb-[50px] text-7xl text-center font-playfair-display">Habilidades</h3>
             
            <div className="grid grid-cols-2 mb-[5rem]">
                <div className="flex w-full justify-center">
                    <img className="rounded-full" src={img_profile} alt="image-profile" />
                </div>
                <div>
                    
                    <p className="font-rubik text-xl mb-[30px]">
                        Se dice que la programación es 10% escribir código y 90% entender por qué no funciona. Ahí es donde el análisis y perseverancia se vuelven pilares fundamentales; un error no es un freno, es una pista, una oportunidad de crecer, de pensar y establecer margenes sobre el pensamiento.
                    </p>
                    <div className="grid grid-cols-5 absolute gap-[50px]">

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