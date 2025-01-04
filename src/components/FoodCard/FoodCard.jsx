const FoodCard = ({item}) => {
    const {name, image, price, recipe} = item;

    return (
        <div>
            <div className="card bg-base-100 shadow-xl h-[400px]">
                <figure>
                    <img className=""
                        src={image}
                        alt="Shoes" />
                </figure>
                <p className="bg-slate-900 text-white absolute right-0 mr-4 mt-4 px-4">${price}</p>
                <div className="card-body flex flex-col items-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-outline text-orange-500 border-orange-400 border-0 border-b-4">Add To cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;