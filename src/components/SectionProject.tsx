import ViewProject from "./ViewProject"
import ImgHelena from "../assets/helena/activities-helena.png"
import ImgPygameAlien from "../assets/alien-attack/menu.png"
import type { Image } from "../interfaces/image"


const SectionProject = () => {
    const images:Image[] = [
        { id:1, url:ImgHelena, title:"Helena", alt:"helena", description:"Helena, entorno web desarrollado principal para personas diagnosticadas con Alzheimer en la primeras etapas"},
        { id:2, url:ImgPygameAlien, title:"Alien Attack", alt:"alien-attack", description:"Alien Attack, videojuego desarrollado netamente con Pygame emulando el famoso juego homónimo."},
    ]
    return(
        <div className="md:relative md:z-10 md:flex md:flex-row md:justify-evenly md:gap-5 md:pt-[10rem] justify-items-center">
            {
                images.map((image) => (
                    <ViewProject
                        key={image.id}
                        id={image.id}
                        url={image.url}
                        title={image.title}
                        description={image.description}
                        alt={image.alt}

                    />
                ))
            }
        </div>
    )
}

export default SectionProject