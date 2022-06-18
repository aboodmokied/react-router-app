import React from "react";
import hero from "../images/photo-1562071707-7249ab429b2a.avif";
import {BiCoinStack} from "react-icons/bi";

function Hero() {
    return ( 
        <div className="hero my-[50px] md:my-[100px]  w-full bg-white">
                <div className="containerr rounded-lg h-[65vh] overflow-hidden relative" >
                    <img src={hero} alt="hero" className="h-full w-full object-cover "/>
                <div className="linearr"></div>
                <div className="absolute left-10 top-[50%] -translate-y-[50%] w-[40%] ">
                    <div className="flex items-center mb-4">
                    <BiCoinStack/>
                    <h4 className="ml-1 font-bold  italic text-white">Stacks</h4>
                    </div>
                    <p className="mb-3 text-[#808080]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam minus totam optio maiores, delectus deserunt rerum quae officiis inventore magni.</p>
                    <p className="mb-3">Marie Chilvers</p>
                    <p>CEO, Stacks</p>
                </div>
                </div>
            </div>
    );
}

export default Hero;