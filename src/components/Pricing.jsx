import React from "react";
import {motion} from "framer-motion"
function Pricing() {
    let variants={
        hidden:{
            opacity:0,
            x:"100vw"
        },
        visible:{
            opacity:1,
            x:0,
            transition:{
                type:"spring",
                mass:0.4,
                damping:8,
            }
        }
    }
    return (
        <motion.div 
        className=" bg-white text-zinc-800 my-[50px] md:my-[100px]"
        variants={variants}
        initial="hidden"
        animate="visible"
        >
            <div className="containerr">

            <div className="top flex flex-col gap-y-10 justify-between lg:flex-row lg:items-center pb-[50px] border-b border-gray-400">
                <div className="left">
                    <h1 className="text-4xl font-bold">Everything you need for <span className="text-[#6948ff]">$99 a month</span></h1>
                    <p className="mt-4 text-[#808080]">Includes every feature we offer plus unlimited projects and unlimited users.</p>
                </div>
                <div className="right"><button className="bg-[#6948ff] p-3 rounded-md text-white w-full lg:w-[200px] hover:bg-[#553bcb] transition">Get started today</button></div>
            </div>
            <div className="bottom grid grid-cols-1 lg:grid-cols-2 py-[50px] gap-x-[20px] gap-y-[50px]">
                <div className="left">
                    <p className="text-[#6948ff] mb-3">EVERYTHING YOU NEED</p>
                    <h4 className="text-zinc-800 pl-2 text-2xl font-bold mb-3">All-in-one platform</h4>
                    <p className="text-[#808080]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo soluta,<br/>temporibus ea est ipsum vero recusandae blanditiis ut doloribus excepturi!</p>
                </div>

                <div className="right pars grid grid-cols-1 lg:grid-cols-2 gap-x-[15px] gap-y-[30px] w-[80%] lg:w-full mx-auto">
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                </div>
            </div>
            </div>
        </motion.div>
    );
}

export default Pricing;