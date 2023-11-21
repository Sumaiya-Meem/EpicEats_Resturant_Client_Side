import React from 'react';
import { Avatar, Button, Dropdown, Navbar } from 'flowbite-react';
import { NavLink } from 'react-router-dom';

const Header = () => {

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
            to="/dashboard"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-green-400" : "text-white"
            }
        >
            Dashbaord
        </NavLink>
        <NavLink
            to="/cart"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-green-400" : "text-white"
            }
        >
            My cart
        </NavLink>
        <NavLink
            to="/contact"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-green-400" : "text-white"
            }
        >
            Contact
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
                    {/* <Dropdown
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
                        <Dropdown.Item>Dashboard</Dropdown.Item>
                        <Dropdown.Item>Settings</Dropdown.Item>
                        <Dropdown.Item>Earnings</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item>Sign out</Dropdown.Item>
                    </Dropdown> */}
                    <Button color="" className='mr-2' pill>
                        SignUp
                    </Button>
                    <Button color="light" className='p-2 font-semibold' pill>
                        Login
                    </Button>
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