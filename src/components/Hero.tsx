/*Aquí estará la parte de hero esta parte tendrá la animación para enganchar a los visitantes*/
import "../styles/animations.css"

function Hero(){
    
    
    return (
      <div className=" md:mb-[5rem] md:h-[100vh] md:items-center md:w-full md:relative md:p-[0] flex w-full py-[10rem]">
          <div className="z-10 select-none flex items-center w-full h-full">
              <div className="flex flex-col items-start w-full">
                  <h1 className="font-playfair-display pb-5 w-full text-center text-4xl md:text-[10rem]">Cristian Delgado</h1>
                  <h2 className="font-rubik text-center w-full text-xl md:text-5xl md:w-full">Desarrollador de Software</h2>
              </div>
          </div>
          <div className="box-boomerang md:absolute md:z-0 md:bg-[#adf125] md:w-[10rem] md:h-[10rem] md:right-[10rem] md:top-[5rem]"></div>
      </div>
      
    );
}


export default Hero
