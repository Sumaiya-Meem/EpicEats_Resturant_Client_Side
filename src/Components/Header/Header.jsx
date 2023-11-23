import React from 'react';
import { Avatar, Button, Dropdown, Navbar } from 'flowbite-react';
import { Link, NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';

const Header = () => {

    const {user,logOut}=useContext(AuthContext)

    const handleLogout =()=>{
        console.log("logout")
        logOut()
        .then(()=>{})
        .catch(err=>console.log(err))
    }

    const menus = <>

        <NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-green-400" : "text-white"
            }
        >
            Home
        </NavLink>
        <NavLink
            to="/menu"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-green-400" : "text-white"
            }
        >
            Our Menu
        </NavLink>
        <NavLink
            to="/order/Salad"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-green-400" : "text-white"
            }
        >
            Order Food
        </NavLink>

        <NavLink
            to="/cart"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-green-400" : "text-white"
            }
        >
            My cart
        </NavLink>


    </>
    return (
        <div>

            <Navbar fluid rounded className=' w-full fixed z-10 bg-opacity-30 bg-black text-white max-w-screen-lg' >
                <Navbar.Brand href="https://flowbite-react.com">
                    {/* <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" /> */}
                    <div className='flex flex-col'>
                        <span className="self-center whitespace-nowrap  font-semibold dark:text-white text-2xl">EpicEats</span>
                        <p className='ml-3'>Resturant</p>
                    </div>
                </Navbar.Brand>
                <div className="flex md:order-2">
                    {
                        user ? <>
                        <Dropdown
                        arrowIcon={false}
                        inline
                        label={
                            <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
                        }
                    >
                        <Dropdown.Header>
                            <span className="block text-sm">Bonnie Green</span>
                            <span className="block truncate text-sm font-medium">name@flowbite.com</span>
                        </Dropdown.Header>
                        <Dropdown.Item>Settings</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item>
                        <Button color="" className=''  onClick={handleLogout}>
                        LogOut
                    </Button>
                        </Dropdown.Item>
                    </Dropdown> 
                        </>
                        :
                        <>
                        <Link to="/register">
                    <Button color="" className='mr-2' pill onClick={handleLogout}>
                        SignUp
                    </Button></Link>
                    <Link to="/login">
                    <Button color="light" className='p-2 font-semibold' pill>
                        Login
                    </Button>
                    </Link>
                        </>
                    }
                    
                    
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                    {menus}
                </Navbar.Collapse>
            </Navbar>



        </div>
    );
};

export default Header;