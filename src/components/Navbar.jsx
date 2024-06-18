import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (

    <div>
        <nav className=" bg-[#2C2D30]">
            <ul className="flex gap-20  justify-center items-center p-3">
                <li><Link  to="/"><button className=" bg-[#5F6168] rounded-2xl shadow-gray-400 shadow-xs shadow-inner  px-3 py-1 text-white">Home</button></Link></li>
                <li><Link  to="/resume"><button className=" bg-[#5F6168] rounded-2xl shadow-gray-400 shadow-xs shadow-inner  px-3 py-1 text-white">Resume</button></Link></li>
                <li><Link  to="/about"><button className=" bg-[#5F6168] rounded-2xl shadow-gray-400 shadow-xs shadow-inner  px-3 py-1 text-white">About</button></Link></li>
                <li><Link  to="/certificate"><button className=" bg-[#5F6168] rounded-2xl shadow-gray-400 shadow-xs shadow-inner  px-3 py-1 text-white">Certificates</button></Link></li>
                <li><Link  to="/projects"><button className=" bg-[#5F6168] rounded-2xl shadow-gray-400 shadow-xs shadow-inner  px-3 py-1 text-white">Projects</button></Link></li>
                
            </ul>
        </nav>
    </div>
    )
}