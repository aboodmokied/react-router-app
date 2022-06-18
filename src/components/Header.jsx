import React from "react";
import logo from "../images/logo.png"
import {NavLink} from "react-router-dom"
function Header() {
    return ( 
        <div className="bg-zinc-800">
            <div className="containerr  flex justify-between gap-x-[10%] md:gap-x-0 text-white items-center py-1">

            
            <div className="logo h-[85px] w-[20%] max-w-[80px] overflow-hidden">
                <img src={logo} alt="logo not found" className="w-full h-full "/>
            </div>
            <nav className="w-[70%] flex-grow-[1] lg:flex-grow-[0]">
                <ul className=" flex text-lg gap-x-[20px] lg:gap-x-[70px] justify-evenly lg:justify-end">
                    <li className=""><NavLink to="/">Home</NavLink></li>
                    <li className=""><NavLink to="/pricing">Pricing</NavLink></li>
                    <li className=" "><NavLink to="/faq">Faq</NavLink></li>
                    <li className=""><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </nav>
            </div>
        </div>
    );
}

export default Header;