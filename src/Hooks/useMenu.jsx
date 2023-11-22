import axios from "axios";
import { useEffect, useState } from "react";

const useMenu = () => {
    const [menuItem,setMenuItem]=useState([]);
    const [loading,setLoading]=useState(true);

    useEffect(()=>{
        const menuData = async()=>{
            try{

                const result = await axios.get('menu.json');
                setMenuItem(result.data);
                setLoading(false)
            }
            catch{
                
            }

        }
        menuData();
    },[])
    console.log(menuItem)
    return [menuItem,loading]
};

export default useMenu;