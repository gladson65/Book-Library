import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Books } from "../utils/dummydata";
import TopRatedCard from "./topRatedCard"; 

function Home() {

    const [topRated, setTopRated] = useState();


    

    // toprated book function
    function topRatedBook() {
        const top = Books.filter((book) => {
            if(book.ratings >= 4.6) {
                return book;
            }
        })

        setTopRated(top);
    }

    useEffect(()=> {
        setTimeout(()=> {
            topRatedBook()
        }, 1000)
    }, [])



    // Category select function
    function check(e) {
        
    }

    return(
        <>
           
            <section className="home-container w-full h-auto flex flex-col lg:flex-row justify-center items-center bg-neutral-900 pb-24 lg:pb-40 relative">
                <div className="w-full sm:w-5/6 md:w-2/3 h-2/3 home-textContent lg:mt-5 mt-14">
                    <h1 id="homeText" className="text-center w-full text-3xl p-2 mt-7 mb-7 text-white drop-shadow-[0px_10px_10px_green]">Welcome To <span className="text-yellow-300">SPONGEBOB</span> Library</h1>
                    

                    <div className="button-div h-auto w-full xl:w-2/3 p-12 bg-slate-800 rounded-lg grid grid-cols-1 md:grid-cols-2 gap-5">
                        <Link to="/books/computersInternet"><button className="h-auto py-4 px-2 w-full rounded-lg text-cyan-500 bg-zinc-700 hover:bg-slate-700 hover:text-lime-500">Computers & Internet</button></Link>
                        <Link to="/books/sciencefiction"><button className="h-auto py-4 px-2 w-full rounded-lg text-cyan-500 bg-zinc-700 hover:bg-slate-700 hover:text-lime-500">Science Fiction</button></Link>
                        <Link to="/books/actionadventure"><button className="h-auto py-4 px-2 w-full rounded-lg text-cyan-500 bg-zinc-700 hover:bg-slate-700 hover:text-lime-500">Action/Adventure</button></Link>
                        <Link to="/books/comics"><button className="h-auto py-4 px-2 w-full rounded-lg text-cyan-500 bg-zinc-700 hover:bg-slate-700 hover:text-lime-500">Comics</button></Link>
                    </div>

               </div>

                <div className="home-pic h-auto w-1/2 mt-14 order-first">
                    <img src="src\assets\images\homeImg.png" alt="home-image" className="rounded-lg w-72 h-45 lg:h-80" />
                </div>

                <p className="absolute bottom-12 text-center text-2xl text-white w-full"><i className="fa-solid fa-angle-down" style={{color: "#FFD43B",}}></i>Top Rated <span className="text-yellow-300">Books</span></p>
            </section>
    
            {/* List of popular books */}

            <section className="popularBook bg-slate-200 w-full h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:grid-cols-2 md:gap-12 gap-12 p-7 pt-12 pb-12">
                {
                   topRated && topRated.map((item) => {
                    return <TopRatedCard key={item.id} item={item}/>
                   }) 
                }
            </section>
        </>
    )
}

export default Home;