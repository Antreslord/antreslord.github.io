// importaciones de imagenes
import img1 from "../assets/helena/activities-helena.png";
import img2 from "../assets/helena/memo-helena.png";
import img3 from "../assets/helena/results-helena.png";

// importaciones de interfaces
import type { Image } from "../interfaces/image";

// importacion de iconos
import { IconReact, IconTailwindCSS } from "../components/Icon";


import { Link } from "react-router-dom";

const HelenaPage = () => {
  const image: Image = {
    id: 1,
    alt: "helena",
    url: img1,
    width: 600,
    height: 300,
  };
  const image2: Image = {
    id: 2,
    alt: "helena",
    url: img2,
    width: 600,
    height: 200,
  };
  const image3: Image = {
    id: 3,
    alt: "helena",
    url: img3,
    width: 1000,
    height: 700,
  };

  return (
    <div className="px-[100px] py-[60px] relative">
      <div className="fixed -translate-x-[70px]">
        <Link className="text-5xl" to={"/"}>
          &#x21A9;
        </Link>
      </div>

      <h2 className="text-5xl font-playfair-display mb-[50px]">
        Helena: De la Teoría a la Práctica
      </h2>

      <h3 className="text-3xl font-playfair-display mb-[30px]">
        Cómo un proyecto de grado sobre Alzheimer definió mi transición hacia el
        desarrollo de software con propósito
      </h3>

      <div className="font-rubik text-xl mb-[100px] grid grid-cols-2 gap-[50px] items-center">
        <div className="">
          <p>
            Cuando inicié mi proyecto de grado, Helena, me enfrenté a algo muy
            diferente: la realidad del Síndrome de Alzheimer. El primer
            obstáculo no fue el código, fue la incertidumbre. ¿Cómo se traduce
            una enfermedad neurodegenerativa compleja en requisitos de software?
            La magnitud de la información disponible era abrumadora. Me di
            cuenta rápidamente de que para construir algo útil, primero tenía
            que dejar de pensar como un programador y empezar a pensar como un
            investigador y un usuario empático. Este fue mi primer gran
            aprendizaje profesional: la tecnología es inútil sin un
            entendimiento profundo del dominio del problema.
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
            Con esta nueva comprensión, el diseño dejó de ser estético para
            volverse funcional. Cada botón, cada color y cada flujo de
            navegación fue pensado para reducir la carga cognitiva. La
            Tecnología como Aliada Invisible: <br />
            <br />
            Para construir esta experiencia fluida, elegimos Angular combinado
            con Tailwind CSS. Esta combinación nos permitió crear interfaces
            limpias, responsivas y consistentes, donde la simplicidad visual es
            clave para usuarios con dificultades de atención.
            <br />
            <br />
            El Corazón de los Datos: Sabíamos que cada interacción contaba.
            Implementamos Firebase como backend, no solo para almacenar
            usuarios, sino para capturar la evolución del paciente en tiempo
            real.
          </p>
        </div>
      </div>

      <div className="font-rubik text-xl mb-[60px] grid grid-cols-2 gap-[50px] items-center">
        <div className="">
          <p>
            Uno de los puntos de inflexión fue el desarrollo de las actividades
            cognitivas. Crear juegos como "encontrar parejas" o "buscar figuras
            iguales" parecía sencillo en papel, pero requería una lógica precisa
            para: Ser lo suficientemente desafiantes para estimular el cerebro.
            Ser lo suficientemente intuitivos para no causar frustración.
            Registrar meticulosamente el tiempo de reacción y la precisión en la
            base de datos. Aquí, la ingeniería se encontró con la terapia. Cada
            clic era un dato; cada segundo contado, una métrica de la capacidad
            cognitiva del momento.
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

      <div>
        <h3 className="text-3xl text-center font-playfair-display mb-[50px]">Tecnologías usadas</h3>
        <div className="flex justify-center gap-[50px]">
          <IconReact />
          <IconTailwindCSS />
        </div>
      </div>
    </div>
  );
};

export default HelenaPage;
