import React from 'react';
import MenuItem from '../../../Shared/MenuItem/MenuItem';
import Cover from '../../../Shared/Cover/Cover';
import { Link } from 'react-router-dom';

const MenuCategory = ({category,img,title,subtitle}) => {
    return (
        <div>
            {title && <Cover img={img} title={title} subtitle={subtitle}></Cover>}
             <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
                {
                    category.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <div className='flex justify-center'>
            
            <Link to={`/order/${title}`}>
            <button className=" text-lg uppercase my-6" style={{borderBottom:"3px solid black",borderRadius:"5px"}}>ORDER NOW</button>
            
            </Link>
            </div>
        </div>
    );
};

export default MenuCategory;