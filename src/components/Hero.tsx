/*Aquí estará la parte de hero esta parte tendrá la animación para enganchar a los visitantes*/
import "../styles/animations.css"

function Hero(){
    
    
    return (
      <div className="relative flex mb-[5rem] h-[100vh] items-center ">
          <div className="z-10 select-none flex items-center w-full h-full">
              <div className="flex flex-col items-start w-full">
                  <h1 className="font-playfair-display text-[10rem] pb-5 w-full text-center">Cristian Delgado</h1>
                  <h2 className="font-rubik text-center text-5xl w-full">Desarrollador de Software</h2>
              </div>
          </div>
          <div className="box-boomerang absolute z-0 bg-[#adf125] w-[10rem] h-[10rem] right-[10rem] top-[5rem]"></div>
      </div>
      
    );
}


export default Hero
