import FoodCard from "../FoodCard/FoodCard";

const OrderTab = ({item}) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {
                item.map(data=><FoodCard key={data._id} item={data}></FoodCard>)
            }
            
        </div>
    );
};

export default OrderTab;