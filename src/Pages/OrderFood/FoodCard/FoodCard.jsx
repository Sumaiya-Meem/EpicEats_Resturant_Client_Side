import { Button, Card } from 'flowbite-react';

const FoodCard = ({item}) => {
   const {image,name,price,recipe} = item;
   

    return (
        <div>

    <Card
      className="max-w-sm h-[400px]"
    >
    <div className='relative'>
        <img src={image} className='rounded-lg' alt="" srcset="" />
     <p className='absolute rounded-lg py-1 top-2 right-4 px-2 bg-black text-white'>${price}</p>
        </div>
   
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      {name}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {recipe}
      </p>
      
      <Button color="gray">Add to Cart</Button>
    </Card>
 

            
        </div>
    );
};

export default FoodCard;