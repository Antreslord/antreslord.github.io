import { Link } from "react-router-dom"

const ButtonReturn = () => {
    return (
        <div className="fixed md:-translate-x-[70px] -translate-x-[30px]">
            <Link className="md:text-5xl text-2xl" to={"/"}>
            &#x21A9;
            </Link>
        </div>
    )
}

export default ButtonReturn