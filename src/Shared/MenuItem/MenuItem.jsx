
const MenuItem = ({item}) => {
    const {image,price,name,recipe} = item;
    return (
        <div className=" p-3 flex gap-2 space-y-4">
            <img src={image} alt="" className="w-[120px] h-[105px]" style={{borderRadius:"0 200px 200px 200px"}}/>
            <div>
                <h1 className="text-[#151515] uppercase ">{name} ---------</h1>
                <p className="text-[#737373] text-[14px]">{recipe}</p>
            </div>
            <p className="text-[#BB8506] text-lg">${price}</p>
        </div>
    );
};

export default MenuItem;