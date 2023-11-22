import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import img from "../../assets/menu/banner3.jpg"
import dessertImg from "../../assets/menu/dessert-bg.jpeg"
import pizzaImg from "../../assets/menu/pizza-bg.jpg"
import saladImg from "../../assets/menu/salad-bg.jpg"
import soupImg from "../../assets/menu/soup-bg.jpg"

import useMenu from '../../Hooks/useMenu';
import TitleSection from '../../Shared/TitleSection/TitleSection';
import MenuCategory from './MenuCategory/MenuCategory';
const Menu = () => {
    const [menuItem] = useMenu();
    const offeredItem = menuItem.filter(item => item.category === "offered")
    const dessertItem = menuItem.filter(item => item.category === "dessert")
    const pizzaItem = menuItem.filter(item => item.category === "pizza")
    const saladItem = menuItem.filter(item => item.category === "salad")
    const soupItem = menuItem.filter(item => item.category === "soup")

    return (
        <div>
            <Helmet>
                <title>EpicEats | Menu</title>
            </Helmet>
            <Cover img={img} title={"OUR MENU"} subtitle={"Would you like to try a dish?"}></Cover>
            <TitleSection heading={"---Today's Offer---"} subHeading={"Don't Miss this"}> </TitleSection>
            <MenuCategory category={offeredItem}></MenuCategory>

            {/* menu item for  dessert*/}
            <MenuCategory
                category={dessertItem}
                img={dessertImg}
                title={"Dessert"}
                subtitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
            ></MenuCategory>

            <MenuCategory
                category={pizzaItem}
                img={pizzaImg}
                title={"Pizza"}
                subtitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
            ></MenuCategory>

            <MenuCategory
                category={saladItem}
                img={saladImg}
                title={"Salad"}
                subtitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
            ></MenuCategory>
            
            <MenuCategory
                category={soupItem}
                img={soupImg}
                title={"Soup"}
                subtitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
            ></MenuCategory>




        </div>
    );
};

export default Menu;