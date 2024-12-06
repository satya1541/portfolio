import React, { useState, useCallback } from 'react'
// import { Link } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';
import { logo } from '../assets/images/index'
import { menuIcon } from '../assets/icons/index'
import MobileMenu from './MobileMenu'
const NavBar = () => {
    const [sidebar, setSidebar] = useState(false);
    const handelshowSidebar = useCallback(() => {
        setSidebar(prevSidebar => !prevSidebar); // Toggle sidebar state
    }, []);
    return (
        <div className='fixed top-0 left-0 right-0 z-50'>
            <div className='flex justify-between items-baseline md:items-center px-10 py-3 bg-slate-200 fixed top-0 left-0 right-0'>
                <Link to='#'> <div className=' flex items-center gap-x-2'>
                    <img
                        src={logo}
                        alt="Logo"
                        className="h-8 w-8 rounded-md"
                    />
                    <span className="text-blue-500 font-semibold">Biswajit Panda</span>
                </div></Link>
                <div className='md:block hidden'>
                    <ul className="text-black flex items-center gap-10 ">
                        <li className="my-2 font-bold hover:text-blue-800 transition duration-300"><Link to='#about'>About</Link></li>
                        <li className="my-2 font-bold hover:text-blue-800 transition duration-300"><Link to='#services'>Services</Link></li>
                        <li className="my-2 font-bold hover:text-blue-800 transition duration-300"><Link to='#works'>Work</Link></li>
                        <li>
                            <button className=" bg-blue-800 text-white text-sm font-bold py-1 px-2 rounded hover:bg-blue-600 transition duration-300">
                                <Link to='#contact'>Get in Touch</Link>
                            </button>
                        </li>
                    </ul>
                </div>
                <div className='md:hidden '>
                    <button className=' border-0'
                        onClick={handelshowSidebar}
                    >
                        <img src={menuIcon} alt="Menu Icon" className="h-8 w-6" />
                    </button>
                </div>
            </div>
            {/* MOBILE MENU  */}
            <div
                className={`bg-nav-gradient fixed top-0 w-full h-screen py-4 px-6  duration-700 ${sidebar ? 'right-0 opacity-100' : '-right-full opacity-0'
                    }`}
            >
                <MobileMenu handelshowSidebar={handelshowSidebar} />
            </div>
        </div>

    )
}

export default NavBar