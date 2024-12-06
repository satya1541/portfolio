import React from 'react'
import { crossIcon } from '../assets/icons/index'
import { logo } from '../assets/images'
import { HashLink as Link } from 'react-router-hash-link';
const MobileMenu = ({ handelshowSidebar }) => {
    // console.log('child render');

    return (
        // <div className=' bg-nav-gradient fixed top-0 w-full h-screen py-4 px-4'>
        <nav>
            {/* Rounded Button for "X" */}
            <div className=' flex justify-between items-center'>
                <button className="rounded-full text-white"
                    onClick={handelshowSidebar}
                >
                    <img src={crossIcon} alt="crossIcon" className="h-10 w-10" />
                </button>
                <Link to='#'> <img
                    src={logo}
                    alt="Logo"
                    className="h-10 w-10 rounded-md"
                    onClick={handelshowSidebar}
                /></Link>

            </div>

            <ul className="text-white flex flex-col items-center pt-4">
                <li className="my-2 font-bold hover:text-blue-800 transition duration-300" onClick={handelshowSidebar}><Link to='#about'>About</Link></li>
                <hr className="border-gray-300 w-[80%]  border-t-2 my-4" />
                <li className="my-2 font-bold hover:text-blue-800 transition duration-300" onClick={handelshowSidebar}><Link to='#services'>Services</Link></li>
                <hr className="border-gray-300 w-[80%] border-t-2 my-4" />
                <li className="my-2 font-bold hover:text-blue-800 transition duration-300" onClick={handelshowSidebar}><Link to='#works'>Work</Link></li>
                <hr className="border-gray-300 w-[80%]  border-t-2 my-4" />
                <li>
                    <button className="mt-4 bg-blue-800 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300" onClick={handelshowSidebar}>
                        <Link to='#contact'>Get in Touch</Link>
                    </button>
                </li>
            </ul>

        </nav>
        // </div>
    )
}

export default MobileMenu