import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../../Components/Header/Header';

const MainLayout = () => {
    const location = useLocation();
    // console.log(location)
    const noHeader = location.pathname.includes('register')
    return (
        <div>
            {noHeader ||  <Header></Header>}
           
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;