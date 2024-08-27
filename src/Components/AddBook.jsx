import { useDispatch } from "react-redux";
import {addBook} from "../utils/bookSlice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";





function AddBook() {

    const navigateTo = useNavigate();

    // dispatch for dispatch an action
    let dispatch = useDispatch();

    const initialValues = {title: "", 
        author: "", year: "", pages: "", category: "",
        ratings: "", description: "", image: "",
    }

    const [formValues, setFormValues] = useState(initialValues);


    // handleChange function
    function handleChange(e) {
        const { name } = e.target;
        setFormValues({...formValues, [name]: e.target.value});
        
    }

    // form submit function
    function handleSubmit(e) {
        e.preventDefault();
        
        dispatch(addBook({
            title: formValues.title,
            author: formValues.author,
            year: formValues.year,
            pages: formValues.pages,
            category: formValues.category,
            ratings: formValues.ratings,
            description: formValues.description,
            image: formValues.image,
        }))

        // clearing the values from input fields
        document.getElementById("title").value = "";
        document.getElementById("author").value = "";
        document.getElementById("year").value = "";
        document.getElementById("pages").value = "";
        document.getElementById("category").value = "";
        document.getElementById("ratings").value = "";
        document.getElementById("description").value = "";
        document.getElementById("image").value = "";

        const h1 = document.getElementById("msg");
        h1.innerHTML = "New Book Added Successfully!";
        h1.style.display = "block";
       
        setTimeout(()=> {
            navigateTo('/books')
        },2000)
    }

    

    return(
        <>
            <h1 className="text-center text-2xl mt-5 text-teal-600 drop-shadow-[0_5px_10px_black]">Add Your Book</h1>
            <br />

            <div className="w-full flex justify-center py-4">
                <pre className="px-7 min-w-96 w-auto py-7 mx-5 bg-zinc-100 rounded-xl drop-shadow-[0_10px_10px_gray]">
                    <h1 className="mb-4 text-center text-yellow-700"><b>Latest Data Preview</b></h1>
                    {JSON.stringify(formValues, undefined, 4)}
                </pre>
            </div>
            
            <form onSubmit={handleSubmit} className="w-full h-auto py-24 px-5 bg-black text-white text-left grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2 relative">
    
                <h1 className="text-green-400 hidden absolute top-5 w-full h-auto py-2 text-center text-2xl bg-tranparent" id="msg"></h1>

                <div className="h-auto flex flex-col justify-center items-center">
                    <label className="w-96 mx-auto mb-2 text-teal-400" htmlFor="title">Title</label>
                    <input className="w-96 mx-auto h-9 px-2 py-4 text-teal-400 rounded-lg" id="title" onChange={handleChange}  required name="title" type="text" placeholder="Batman"></input>
                </div>

                <div className="h-auto flex flex-col justify-center items-center">
                    <label className="w-96 mx-auto mb-2 text-yellow-200" htmlFor="author">Author</label>
                    <input className="w-96 mx-auto h-9 px-2 py-4 text-yellow-500 rounded-lg" id="author" onChange={handleChange} required name="author" type="text" placeholder="Chris Richardson"></input>
                </div>

                <div className="h-auto flex flex-col justify-center items-center">
                    <label className="w-96 mx-auto mb-2 text-red-400" htmlFor="year">Year</label>
                    <input className="w-96 mx-auto h-9 px-2 py-4 text-red-400 rounded-lg" id="year" onChange={handleChange}  required name="year" type="text" placeholder="28 October 2020"></input>
                </div>

                <div className="h-auto flex flex-col justify-center items-center">
                    <label className="w-96 mx-auto mb-2 text-blue-300" htmlFor="pages">Pages</label>
                    <input className="w-96 mx-auto h-9 px-2 py-4 text-blue-500 rounded-lg" id="pages" onChange={handleChange}  required name="pages" type="number" placeholder="224"></input>
                </div>

                <div className="h-auto flex flex-col justify-center items-center">
                    <label className="w-96 mx-auto mb-2 text-lime-300" htmlFor="category">Category</label>
                    <input className="w-96 mx-auto h-9 px-2 py-4 text-lime-600 rounded-lg" id="category" onChange={handleChange}  required name="category" type="text" placeholder="Comics"></input>
                </div>

                <div className="h-auto flex flex-col justify-center items-center">
                    <label className="w-96 mx-auto mb-2 text-blue-500" htmlFor="ratings">Ratings</label>
                    <input className="w-96 mx-auto h-9 px-2 py-4 text-blue-500 rounded-lg" id="ratings" onChange={handleChange}  required min="0" max="5" name="ratings" type="number" step="0.01" placeholder="4.7"></input>
                </div>

                <div className="h-auto flex flex-col justify-center items-center">
                    <label className="w-96 mx-auto mb-2 text-zinc-300" htmlFor="description">Descriptions</label>
                    <textarea className="w-96 mx-auto px-2 py-4 text-zinc-800 rounded-lg" id="description" onChange={handleChange}  required name="description" placeholder="Write about the book"></textarea>
                </div>

                <div className="h-auto flex flex-col justify-center items-center">
                    <label className="w-96 mx-auto mb-2 text-purple-400" htmlFor="image">Image URL</label>
                    <input className="w-96 mx-auto h-9 px-2 py-4 text-purple-400 rounded-lg" id="image" onChange={handleChange}  required name="image" type="text" placeholder="Paste image link"></input>
                </div>

                <div className="h-auto flex flex-col justify-center items-center">
                    <button className="w-32 lg:w-32 xl:w-32 lg:py-2 xl:p-2 mx-auto bg-purple-400 px-4 py-2 rounded-lg mt-4 hover:bg-purple-500 hover:text-black">Add Book</button>
                
                </div>
            
            </form>

            
        </>
    )
}

export default AddBook;

