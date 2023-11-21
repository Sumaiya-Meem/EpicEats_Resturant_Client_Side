import { useEffect, useState } from "react";
import TitleSection from "../../../Shared/TitleSection/TitleSection";
import axios from 'axios';
import MenuItem from "../../../Shared/MenuItem/MenuItem";
const PopularMenu = () => {

    const [menuItem,setMenuItem]=useState([]);

    useEffect(()=>{
        const menuData = async()=>{
            try{

                const result = await axios.get('menu.json');

                const popularItem= result.data.filter(item => item.category === "popular")
                setMenuItem(popularItem);
            }
            catch{
                console.error("Error to fetch menu item",error)
            }

        }
        menuData();
    },[])

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
                    menuItem.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            
        </div>
    );
};

export default PopularMenu;