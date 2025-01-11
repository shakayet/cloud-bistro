import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const navOptions = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">Our menu</Link></li>
        <li><Link to="/order">Order</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/about">About</Link></li>
    </>

    return (
        <div className='navbar fixed z-10 bg-opacity-30 max-w-screen-xl bg-black text-white'>
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost  lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {navOptions}
                        </ul>
                    </div>
                    <a href="/">
                        <div className='ml-4'>
                            <div className='text-xl font-extrabold'>
                                <p style={{ "letter-spacing": '2px' }} className=''>CLOUD BISTRO</p>
                            </div>
                            <div>
                                <p style={{ "letter-spacing": '7px' }} className="font-bold">RESTAURANT</p>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;