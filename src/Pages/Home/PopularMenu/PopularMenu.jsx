import { useEffect, useState } from "react";
import TitleSection from "../../../Shared/TitleSection/TitleSection";
import axios from 'axios';
import MenuItem from "../../../Shared/MenuItem/MenuItem";
import useMenu from "../../../Hooks/useMenu";
const PopularMenu = () => {

   const [menuItem]=useMenu();
   const popularItem =menuItem.filter(item=>item.category==="popular")


    // console.log(menuItem)

    return (
        <div>
            <div>
                <TitleSection
                 heading={"FROM OUR MENU"}
                 subHeading={"---Check it out---"}
                
                >

                </TitleSection>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
                {
                    popularItem.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <div className="flex justify-center">
            <button className=" text-xl" style={{borderBottom:"3px solid black",borderRadius:"5px"}}>View All Menu</button>
            
            </div>
        </div>
    );
};

export default PopularMenu;