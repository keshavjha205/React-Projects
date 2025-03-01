


function Cards({products}) {
    return (
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 px-4 md:px-8 w-full'>
            {products.map(singleItem => (
                <div key={singleItem.id}
                    className="bg-teal-500 text-zinc-600 max-w-sm p-4 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300" >
                    <img src={singleItem.thumbnail} alt= {singleItem.title} />
                    <h2  
                    className="text-xl font-semibold mt-2">Product: {singleItem.title}
                    </h2>
                    <p className="text-lg font-bold">Price:${singleItem.price}</p>
                    <p className="text-sm max-w-[90%] break-words text-ellipsis">{singleItem.description}</p>
                </div>
            ))}
        </div>
    )
}

export default Cards