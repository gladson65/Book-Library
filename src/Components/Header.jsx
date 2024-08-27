import { Link } from "react-router-dom";

function Header() {
    return(
        <>
            <header className="w-full flex justify-between item-center p-7 bg-emerald-400">
                <p className="text-2xl relative bottom-1 md:pl-0 xl:pl-12 drop-shadow-[0_10px_10px_black]">
                    <span className="text-teal-50">SPONGEBOB <span className="text-orange-400">LIB</span></span>
                </p>

                <ul className="w-1/2 hidden sm:flex flex justify-around item-center gap-5">
                    <Link className="hover:text-white hover:drop-shadow-[0_5px_10px_black]" to="/"><li>Home</li></Link>
                    <Link className="hover:text-white hover:drop-shadow-[0_5px_10px_black]" to='/books'><li>Browse Books</li></Link>
                    <Link className="hover:text-white hover:drop-shadow-[0_5px_10px_black]" to="/addbook"><li>Add Book</li></Link>
                </ul>
            </header>
        </>
    )
}

export default Header;