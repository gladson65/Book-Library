import { useParams } from "react-router-dom";
import { Books } from "../utils/dummydata";
import DetailsCard from "./DetailsCard";
import { useEffect, useState } from "react";

function BookDetails() {

    const [data, setData] = useState([]);

    // dynamic routing
    let param = useParams()
    
    function searchedBook() {
        const book = Books.filter((item)=> {
            if(item.id == param.id) {
                return item;
            }
        })

        setData(book)
    }

    useEffect(()=> {
        setTimeout(()=> {
            searchedBook()
        }, 1000)
    },[])
    

    
    


    return(
        <>
            <h1 className="text-center p-5 text-2xl text-red-700">Book Details</h1>
            {
               data.length == 1 ?
               
               data.map((book) => {
                return <DetailsCard key={book.id} info={book} />
               })
               
               :

               <div className="w-full h-screen bg-black flex justify-center items-start">
                <h1 className="mt-24 p-2 text-3xl text-teal-300">Loading...</h1>
               </div>
                
            }
           
        </>
    )
}

export default BookDetails;