import { Link } from "react-router-dom"
import type { Image } from "../interfaces/image"

// importacion de las imagenes
import img from "../assets/alien-attack/menu.png"
import img2 from "../assets/alien-attack/gameplay1.png"
import img3 from "../assets/alien-attack/gameplay2.png"
import img4 from "../assets/alien-attack/game-play3.png"
import img6 from "../assets/alien-attack/game-over.png"

//importacion de iconos
import { IconPython } from "../components/Icon"

const AlienPage = () => {

    const image:Image = {id: 4, url: img, width: 600, height: 300}
    const image2:Image = {id: 5, url: img2, width: 600, height: 300}
    const image3:Image = {id: 6, url: img3, width: 600, height: 300}
    const image4:Image = {id: 7, url: img4, width: 600, height: 300}
    const image6:Image = {id: 9, url: img6, width: 600, height: 300}

    return (
      <div className="px-[100px] py-[60px] relative">
        <div className="fixed -translate-x-[70px]">
          <Link className="text-5xl" to={"/"}>
            &#x21A9;
          </Link>
        </div>

        <h2 className="text-5xl font-playfair-display mb-[50px]">
          De la Teoría a la Acción: Construyendo un Motor de Juego en Python
        </h2>

        <h3 className="text-3xl font-playfair-display mb-[30px]">
          El desarrollo de la Programación Orientada a Objetos (POO) en un
          entorno donde el tiempo real y la interacción son increíbles.
        </h3>

        <div className="font-rubik text-xl mb-[100px] grid grid-cols-2 gap-[50px] items-center">
          <div className="">
            <p>
              Decidí crear un videojuego tipo shooter espacial (estilo "Alien
              Attack") utilizando Pygame. El objetivo no era solo hacer un juego
              divertido, sino construir desde cero un motor ligero que me
              obligara a entender la física básica, el ciclo de renderizado y,
              sobre todo, la arquitectura de software escalable. Quería
              demostrar que podía gestionar múltiples entidades interactuando
              simultáneamente sin perder el control del código.
            </p>
          </div>

          <div className="">
            <img
              className=""
              src={image.url}
              alt={image.alt}
              width={image.width}
              height={image.height}
            />
          </div>
        </div>

        <div className="font-rubik text-xl mb-[100px] grid grid-cols-2 gap-[50px] items-center">
          <div className="">
            <img
              className=""
              src={image2.url}
              alt={image2.alt}
              width={image2.width}
              height={image2.height}
            />
          </div>
          <div className="">
            <p>
              El mayor obstáculo técnico no fue dibujar los sprites, sino
              orquestar la interacción entre ellos. En un juego con decenas de
              enemigos, balas y el jugador moviéndose a 60 cuadros por segundo,
              saber qué choca con qué y cuándo es vital. <br /> <br />
              Necesitaba un sistema robusto donde cada objeto (instancia de una
              clase) pudiera identificar automáticamente si estaba interceptando
              con un objeto de otra clase (ej. Bala vs. Enemigo, Enemigo vs.
              Jugador).
              <br /> <br />
              En lugar de escribir funciones sueltas, diseñé una jerarquía de
              clases coherente. Cada entidad heredaba de una clase base que
              gestionaba sus coordenadas y estado. Implementé un sistema de
              detección de colisiones basado en rectángulos (AABB - Axis-Aligned
              Bounding Box) que iteraba eficientemente sobre las listas de
              objetos activos.
            </p>
          </div>
        </div>

        <div className="font-rubik text-xl mb-[60px] grid grid-cols-2 gap-[50px] items-center">
          <div className="">
            <p>
              Una de las funciones como jugador fue la implementación de poder
              disparar hacia las 4 direcciones(Arriba, Abajo, Derecha e
              Izquierda).El jugador puede eliminar a cualquier enemigo asi este
              a los lados de este. Algunos enemigos están desarrollados para
              poder disparar de igula forma hacia el jugador
              <br /> <br />
              El Movimiento del jugador se realiza con el mouse, Pygame aporta
              muchas herramientas entre ellas la obtención de la posición de
              cursor sobre la ventana. El movimiento es fluido y versátil,
              diseñado para no ir muy rápido pero tampoco lento.
            </p>
          </div>

          <div className="">
            <img
              className=""
              src={image3.url}
              alt={image3.alt}
              width={image3.width}
              height={image3.height}
            />
          </div>
        </div>

        <div className="font-rubik text-xl mb-[100px] grid grid-cols-2 gap-[50px] items-center">
          <div className="">
            <img
              className=""
              src={image4.url}
              alt={image4.alt}
              width={image4.width}
              height={image4.height}
            />
            <img
              className=""
              src={image6.url}
              alt={image6.alt}
              width={image6.width}
              height={image6.height}
            />
          </div>
          <div className="">
            <p>
              Este proyecto marcó un punto de inflexión en mi trayectoria
              técnica: De la teoria a la practica real, Pasé de entender la POO
              conceptualmente a aplicarla en un sistema donde un mal diseño de
              clases habría resultado en un código espagueti inmantenible y
              lento. Aprendí que la estructura del código es tan importante como
              la funcionalidad. <br />
              <br />
              Desarrollar en Python para juegos me enseñó a ser consciente de
              cada ciclo de CPU. Entendí la importancia de optimizar bucles,
              gestionar la memoria de las listas de objetos activos y liberar
              recursos inmediatamente cuando ya no se necesitan. <br />
              <br />
              Aunque este proyecto nació como un hobby para dominar la sintaxis
              y lógica de Python, confirmó mi fascinación por la ingeniería
              detrás de los videojuegos. Me dio la confianza necesaria para
              explorar motores más complejos y profundizar en áreas como la
              inteligencia artificial de NPCs o la generación procedural.
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-3xl text-center font-playfair-display mb-[50px]">
            Tecnologías usadas
          </h3>
          <div className="flex justify-center gap-[50px]">
            <IconPython />
          </div>
        </div>
      </div>
    );

}

export default AlienPage