function ComputersInternet(props) {
    const {id, title, author, category,ratings, coverImages} = props.info;

    return(
        <>

            <div className="topRatedCard p-5 h-full rounded-xl shadow-sm bg-slate-800 hover:bg-slate-900">
                
                <img src={coverImages} alt="product-image" className="w-full rounded-lg h-80 object-cover object-top drop-shadow-[0_10px_10px_lightgreen]"/>
                
                <h3 className="text-2xl text-white py-3 text-center font-medium">{title}</h3>
                <h4 className="text-white">{author} (author)</h4>
                <h4 className="text-amber-300"><b>Ratings:</b> <span className="text-green-400">{ratings}</span></h4>
                <h4 className="text-red-500"><b>Category:</b> <span className="text-lime-400">{category}</span></h4>
                
            </div>
            
        </>
    )
}

export default ComputersInternet;