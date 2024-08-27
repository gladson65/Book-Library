import { Link } from "react-router-dom";

function SearchBook(props) {
    const {id, title, author, category,ratings, coverImages} = props.info;

    return(
        <>
            
            <div className=" p-5 h-full w-72 md:w-80 lg:w-80 m-auto lg:mg-auto rounded-xl shadow-sm bg-slate-800 drop-shadow-[0px_20px_10px_black]">
                
                <img src={coverImages} alt="product-image" className="w-full rounded-lg h-80 object-cover object-top drop-shadow-[0_10px_10px_teal]"/>
                
                <h3 className="text-2xl text-white py-3 text-center font-medium">{title}</h3>
                <h4 className="text-white">{author} (author)</h4>
                <h4 className="text-amber-300"><b>Ratings:</b> <span className="text-green-400">{ratings}</span></h4>
                <h4 className="text-red-500"><b>Category:</b> <span className="text-lime-400">{category}</span></h4>
                <h4 className="text-white"><Link className="hover:text-yellow-300" key={id} to={`/book/${id}`}>View More <span className="text-sm ml-2"><i className="fa-solid fa-arrow-right"></i></span></Link></h4>
            </div>
            
        </>
    )
}

export default SearchBook;