import React from 'react'
import {Link} from "react-router-dom";

const Dropdown = () => {
  return (
    <div className='head bg-gray-950 text-green-300'>

        <ul className="text-center text-2xl">
            <Link to="/"><li className="border-b-2 border-t-2 p-3 hover:bg-gray-800">Home</li></Link>
            <Link to="/about"><li className="border-b-2 p-3 hover:bg-gray-800">About</li></Link>
            <Link to="/contact"><li className="border-b-2 p-3 hover:bg-gray-800">Contact</li></Link>
        </ul>
      

    </div>
  )
}

export default Dropdown
