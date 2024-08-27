import { Link } from "react-router-dom";

function DetailsCard(props) {
    
    const {id, title, ratings, pages, year, author, category, coverImages, description} = props.info

    return(
        <>
            <div className="detailsCard w-full p-7 h-auto bg-zinc-300 flex flex-col justify-start
                items-center md:flex-row gap-7">

                <img className="w-2/3 lg:w-96 h-96 md:self-start lg:self-start xl:self-start rounded-lg self-center sm:self-center drop-shadow-[0px_-10px_10px_black]" src={coverImages} alt="CoverImage" />        

                <div className="bg-white w-full self-start py-12 px-5 lg:py-20 xl:py-20 lg:px-24 xl:px-24 md:px-7 h-auto rounded-lg relative drop-shadow-[0px_10px_10px_black]">
                    <h4 className="text-center py-2 text-3xl text-red-700 absolute top-1">{title}</h4>
                    <h4 className="mb-2 mt-5 xl:mt-0 "><span className="text-green-500">Ratings</span> {ratings}</h4>
                    <h4 className="mb-2"><span className="text-red-700">{author}</span> (author)</h4>
                    <h4 className="mb-2"><span className="text-blue-600">Pages</span> {pages}</h4>
                    <h4 className="mb-2"><span className="text-red-700">Published</span> - {year}</h4>
                    <h4 className="font-serif text-sky-800">{description}</h4>
                    <li className="list-none bg-purple-500 w-40 text-white transition duration-200 linear hover:text-black text-center p-2 rounded-lg mt-5 hover:bg-purple-400"><Link to='/books'>Go To Browse Books</Link></li>
                </div>
            </div>
        </>
    )
}

export default DetailsCard;