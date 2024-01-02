import React from 'react'
import menu from "./imgs/menu.png"
import Dropdown from './Dropdown'
import { useState } from 'react'
import {Link} from "react-router-dom";



const Header = () => {

    const [dropDown, newDropdown] = useState(false)
    

    return (
        <>

            {/* for small screen */}
            <nav className='bg-gray-950 font-mono text-green-300 md:hidden flex justify-between px-4 py-2'>



            <Link to="/" className='head my-auto text-2xl font-semibold bg-gradient-to-r from-[#0021ee] to-[#00f88c] bg-clip-text text-transparent'>Football Loverz</Link>

                <button onClick={()=>{newDropdown((prev)=>!prev)}}><img src={menu} alt="menu icon" /></button>



            </nav>



            {/* js for dropdown component */}

            {

                dropDown && (
                    <Dropdown />
                )

            }






            {/* for large screen */}

            <nav className='head bg-gray-950 font-mono text-green-300 hidden md:flex justify-between px-4 py-2'>

                

                <Link to="/" className='head my-auto text-3xl font-bold bg-gradient-to-r from-[#0021ee] to-[#00f88c] bg-clip-text text-transparent'>Football Loverz</Link>

                

                <ul className="flex space-x-5 my-auto text-xl font-semibold">
                    <li className="hover:text-green-400 cursor-pointer">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="hover:text-green-400 cursor-pointer">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="hover:text-green-400 cursor-pointer">
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>


                
                

            </nav>

        </>
    )
}

export default Header

