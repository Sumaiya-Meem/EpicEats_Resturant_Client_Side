import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import img from "../../assets/shop/banner2.jpg"
import Cover from '../../Shared/Cover/Cover';
import { useState } from 'react';
import useMenu from '../../Hooks/useMenu';
import OrderTab from './OrderTab/OrderTab';
import { useParams } from 'react-router-dom';
const OrderFood = () => {
    const categories =["Pizza","Salad","Soup","Dessert"]
    
    const [menuItem] = useMenu();
    const {category} =useParams();
    console.log(category);
    const intialTabCategory = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(intialTabCategory);

    const pizzaItem = menuItem.filter(item => item.category === "pizza")
    const saladItem = menuItem.filter(item => item.category === "salad")
    const soupItem = menuItem.filter(item => item.category === "soup")
    const dessertItem = menuItem.filter(item => item.category === "dessert")
    // const drinkItem = menuItem.filter(item => item.category === "drinks")
    

    return (
        <div>
            <Cover img={img} title={"Our Resturant"} subtitle={"Would you like to try a dish?"}></Cover>

             <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
      <TabList>
        <Tab>Pizza</Tab>
        <Tab>Salad</Tab>
        <Tab>Soup</Tab>
        <Tab>Dessert</Tab>
        {/* <Tab>Drinks</Tab> */}
      </TabList>

      <TabPanel>
        <OrderTab item={pizzaItem}></OrderTab>
      </TabPanel>
      <TabPanel>
      <OrderTab item={saladItem}></OrderTab>
      </TabPanel>
      <TabPanel>
      <OrderTab item={soupItem}></OrderTab>
      </TabPanel>
      <TabPanel>
      <OrderTab item={dessertItem}></OrderTab>
      </TabPanel>
      {/* <TabPanel>
      <OrderTab item={drinkItem}></OrderTab>
      </TabPanel> */}

    </Tabs>
        </div>
    );
};

export default OrderFood;