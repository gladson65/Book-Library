import { Link } from "react-router-dom";

function TopRatedCard(props) {

    const {id, title, author, ratings, coverImages, category} = props.item

    return(
        <>
            
            <div className="topRatedCard p-5 h-full rounded-xl shadow-sm bg-slate-800 drop-shadow-[0px_20px_10px_black]">
                
                <img src={coverImages} alt="product-image" className="w-full rounded-lg h-80 object-cover object-top drop-shadow-[0_10px_10px_cyan]"/>
                
                <h3 className="text-2xl text-white py-3 text-center font-medium">{title}</h3>
                <h4 className="text-white">{author} (author)</h4>
                <h4 className="text-amber-300"><b>Ratings:</b> <span className="text-green-400">{ratings}</span></h4>
                <h4 className="text-red-500"><b>Category:</b> <span className="text-lime-400">{category}</span></h4>
                <h4 className="text-white relative"><Link className="hover:text-yellow-300" to={`/book/${id}`}>View More <span className="absolute top-1 text-sm ml-2"><i className="fa-solid fa-arrow-right"></i></span></Link></h4>
                
            </div>
            
        </>
    )
}

export default TopRatedCard;