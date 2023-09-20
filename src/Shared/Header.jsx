import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const { user, logOut } = useContext(AuthContext)

    const handleLogout = () =>{
        logOut()
        .then(()=> { })
        .catch(error => console.error(error))
    }

    const navItems = <>

        <li className='text-xl '><Link to='/'>Home</Link></li>

        <li className='text-xl '> <Link to='/all-toyes'>All Toyes</Link></li>
        <li className='text-xl '> <Link to='/my-toyes'>My Toyes</Link></li>
        <li className='text-xl '> <Link to='/add-toyes'>Add a Toye</Link></li>
        <li className='text-xl '> <Link to='/blog'>Blog</Link></li>


    </>
    


    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}

                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">ToY LanD</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                    <Tooltip
                        id="my-tooltip"
                        content={user ? user.displayName : ""}
                        isOpen={isOpen}
                    />


                </ul>

            </div>
            <div className="navbar-end">
                {
                    user ? <>
                        <a data-tooltip-id="my-tooltip" onMouseOver={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
                           
                           {<div className="avatar">
                                <div className="w-12 mr-4 rounded-full">
                                    <img src={user?.photoURL} alt="" />
                                </div>
                                </div>} 
                        </a>
                        <button gradientDuoTone="pinkToOrange" className='lg:relative btn border-t-green-500 lg:bottom-1 lg:text-xl'>
                    <Link onClick={handleLogout}>Logout</Link>
                </button></> 
                : <button gradientDuoTone="pinkToOrange" className='lg:relative lg:bottom-1 lg:text-xl'>
                    <Link to='/login'>Login</Link>
                </button>
                }

            </div>
        </div>
    );
};

export default Header;