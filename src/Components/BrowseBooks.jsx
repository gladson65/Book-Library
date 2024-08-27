import { Books } from "../utils/dummydata";
import { useState, useEffect, useRef } from "react";
import ActionAdventure from "./ActionAdventure";
import Comics from "./Comics";
import NewBook from "./NewBooks";
import ComputersInternet from "./ComputersInternet";
import Sciencefiction from "./ScienceFiction";
import SearchBook from "./SearchBook";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


function BrowseBooks() {

    const [data, setData] = useState(Books); 
    const [filter, setFilter] = useState([]);
    const [isClick, setISClick] = useState(false)

    const books = useSelector((store) => store.book.books)
    
    
    // taking category parameter by using dynamic routing
    let params = useParams();
   

    // inputText function
    var searchText = useRef("");
    function inputText(e) {
        let g = e.target.value;
        searchText.current = g;
    }

    let click = 0;
    // serch button function
    function searchHandle(e) {

        setISClick(!isClick); 
        const filteredData = Books.filter((book) => {
            let search = searchText.current.toLowerCase();
            return book.title.toLowerCase().includes(search);
        })


        setFilter(filteredData);
        document.getElementById("input").value = "";
        
        
        
    }

    

    

    return(
        <>
            <section className="browseBook w-full h-auto relative">

                {/* search bar section */}
                <div className="searchBar w-full flex justify-center item-center gap-7 mt-5 p-5">
                    <input id="input" onChange={inputText} className="w-10/12 md:w-4/6 lg:w-1/3 text-red-600 transition duration-150 linear h-full p-2 rounded-lg border-2 border-dotted border-emerald-500 focus:outline-violet-500 focus:drop-shadow-[0px_5px_5px_black]" type="text" placeholder="Search Book By Title"/>
                    <button onClick={searchHandle} className="p-2 rounded-lg text-white bg-violet-500 hover:bg-violet-600 hover:text-teal-300 transition duration-150 linear focus:ring focus:ring-violet-300" type="button">Search</button>
                    
                </div>

                {/* Searched Books by title */}
                {
                    searchText.current &&
                    <h1 className="w-full bg-zinc-300 p-5 text-2xl text-center text-red-700">Searched Results For "<span className="text-green-600">{searchText.current}</span>"</h1>
                }
                
                {
                    filter.length <= 1 ?  <div className="w-full h-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-5 p-7">
                    {
                       filter.map((item) => {                   
                         return <SearchBook key={item.id} info={item}/>
                       }) 
                    }
                    </div> :
                    <div className="w-full h-auto pb-24 pt-16 grid gap-y-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 p-7">
                    {
                       filter.map((item) => {                   
                         return <SearchBook key={item.id} info={item}/>
                       }) 
                    }
                    </div>

                }

                {
                    isClick == true ? 
                    filter.length == 0 &&
                    <div className="noData absolute inset-y-24 w-full bg-black">
                        <h1 className="text-red-500 text-3xl text-center p-5 pt-5">Ooops! No searched data...</h1>
                    </div>:""
                }

                {/* New Added Books */}
                {
                    books.length >= 1 &&
                    <div className="categoryDiv bg-slate-300 w-full h-auto grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:grid-cols-2 gap-5 p-7 pt-20 relative">
                    <h1 className="absolute w-full text-center p-5 text-2xl text-red-700">New Added Books</h1>
                    {
                        books.map((item, i) => {
                            
                            return <NewBook key={i} info={item} />
                            
                        })
                    }
                    </div>
                }
               


                {/* Comics Category Section */}
                {
                    params.category === 'comics' && 
                    
                    
                    <div className="categoryDiv bg-teal-700 w-full h-auto grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:grid-cols-2 gap-5 p-7 pt-20 relative">
                    <h1 className="absolute w-full text-center p-5 text-2xl text-white">Comics</h1>
                    {
                        data.map((item) => {
                            if (item.category == "comics") {
                                return <Link key={item.id} to={`/book/${item.id}`}><Comics key={item.id} info={item} /></Link>
                            }
                        })
                    }
                    </div>
                }


                {/* Action/Adventure Category Section */}
                {
                    params.category === 'actionadventure' && 
                    
                    
                    <div className="categoryDiv bg-slate-500 w-full h-auto grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:grid-cols-2 gap-5 p-7 pt-20 relative">
                    <h1 className="absolute w-full text-center p-5 text-2xl text-white">Action/Adventure</h1>
                    {
                        data.map((item) => {
                            if (item.category == "actionadventure") {
                                return <Link key={item.id} to={`/book/${item.id}`}><ActionAdventure key={item.id} info={item} /></Link>
                            }
                        })
                    }
                    </div>
                }


                {/* Computers&Internet Category Section */}
                {
                    params.category === 'computersInternet' && 
                    
                    
                    
                    <div className="categoryDiv bg-neutral-600 w-full h-auto grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:grid-cols-2 gap-5 p-7 pt-20 relative">
                    <h1 className="absolute w-full text-center p-5 text-2xl text-white">Computers & Internet</h1>
                    {
                        data.map((item) => {
                            if (item.category == "computersInternet") {
                                return <Link key={item.id} to={`/book/${item.id}`}><ComputersInternet key={item.id} info={item} /></Link>
                            }
                        })
                    }
                    </div>
                }

                {/* Science-Fiction Category Section */}
                {
                    params.category === 'sciencefiction' && 
                    
                    
                    <div className="categoryDiv bg-stone-500 w-full h-auto grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:grid-cols-2 gap-5 p-7 pt-20 relative">
                    <h1 className="absolute w-full text-center p-5 text-2xl text-white">Science-Fiction</h1>
                    {
                        data.map((item) => {
                            if (item.category == "sciencefiction") {
                                return <Link key={item.id} to={`/book/${item.id}`}><Sciencefiction key={item.id} info={item} /></Link>
                            }
                        })
                    }
                    </div>
                }

                
                {/* Generally this divs will render */}

                {
                    
                    params.category === undefined &&
                   
                    <div className="categoryDiv bg-slate-500 w-full h-auto grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:grid-cols-2 gap-5 p-7 pt-20 relative">
                        <h1 className="absolute w-full text-center p-5 text-2xl text-white">Action/Adventure</h1>
                        {
                            data.map((item) => {
                                if (item.category == "actionadventure") {
                                    return <Link key={item.id} to={`/book/${item.id}`}><ActionAdventure key={item.id} info={item} /></Link>
                                }
                            })
                        }
                    </div>

                }

                {
                    
                    params.category === undefined &&
                   
                   <div className="categoryDiv bg-neutral-600 w-full h-auto grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:grid-cols-2 gap-5 p-7 pt-20 relative">
                        <h1 className="absolute w-full text-center p-5 text-2xl text-white">Computers & Internet</h1>
                        {
                            data.map((item) => {
                                if (item.category == "computersInternet") {
                                    return <Link key={item.id} to={`/book/${item.id}`}><ComputersInternet key={item.id} info={item} /></Link>
                                }
                            })
                        }
                    </div>

                }

                {
                    
                    params.category === undefined &&
                   
                    <div className="categoryDiv bg-teal-700 w-full h-auto grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:grid-cols-2 gap-5 p-7 pt-20 relative">
                        <h1 className="absolute w-full text-center p-5 text-2xl text-white">Comics</h1>
                        {
                            data.map((item) => {
                                if (item.category == "comics") {
                                    return <Link key={item.id} to={`/book/${item.id}`}><Comics key={item.id} info={item} /></Link>
                                }
                            })
                        }
                    </div>

                }

                {
                    
                    params.category === undefined &&
                   
                    <div className="categoryDiv bg-stone-500 w-full h-auto grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:grid-cols-2 gap-5 p-7 pt-20 relative">
                        <h1 className="absolute w-full text-center p-5 text-2xl text-white">Science - Fiction</h1>
                        {
                            data.map((item) => {
                                if (item.category == "sciencefiction") {
                                    return <Link key={item.id} to={`/book/${item.id}`}><Sciencefiction key={item.id} info={item} /></Link>
                                }
                            })
                        }
                    </div>

                }
                
                
                
                


            </section>
        </>
    )
}

export default BrowseBooks;