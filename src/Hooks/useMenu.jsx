import axios from "axios";
import { useEffect, useState } from "react";

const useMenu = () => {
    const [menuItem,setMenuItem]=useState([]);
    const [loading,setLoading]=useState(true);

    useEffect(()=>{
        const menuData = async()=>{
            try{

                const result = await axios.get('http://localhost:5000/menu');
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