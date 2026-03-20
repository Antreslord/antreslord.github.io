import { Link } from "react-router-dom"
import type { Image } from "../interfaces/image"

const ViewProject:React.FC<Image>= ({ id, url, alt, title, description}) => {

    return(
        <div className="flex flex-col content-between w-min p-[10px]">
            <div className="mb-[20px] w-[400px] h-[250px] rounded-xl" id={"id-"+id}>
                <img className="object-contain w-full h-full object-cover rounded-xl" src={url} alt={alt} />
            </div>
            <div className="flex flex-col mb-[20px]">
                <h4 className="font-playfair-display text-2xl ps-[20px] mb-3">{ title }</h4>
                <p className="font-rubik text-base w-full  line-clamp-2">
                    { description }
                </p>
            </div>
            <div className="grid items-center w-full">
                <Link to={`/${alt}`} >
                    <input type="button" value="Ver Detalle" className="py-[5px] px-[10px] bg-sky-500 rounded-xl hover:bg-sky-900 font-rubik cursor-pointer w-full"/>
                </Link>
            </div>
        </div>
    )
}

export default ViewProject