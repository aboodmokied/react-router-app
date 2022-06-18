import React from "react";
import {motion} from "framer-motion"
function Contact() {
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
        className="my-[50px] md:my-[100px] bg-white text-black"
        variants={variants}
        initial="hidden"
        animate="visible"
        >
            <div className="containerr flex flex-col lg:flex-row gap-y-[50px] gap-x-[15%]">
                <div className="left flex flex-col gap-y-6 text-[#808080] text-sm">
                    <h2 className="font-bold text-3xl text-zinc-800">Get in touch</h2>
                    <p className="">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam,<br/>iusto natus fugit saepe minima rem nemo laborum ea dolorum est.</p>
                    <p>742 Evergreen Terrace</p>
                    <p>Springfield, OR 12345</p>
                    <p>+970 597201294</p>
                    <p>aboodhmokied@gmail.com</p>
                    <p>Looking for careers? <a href="/#" className="text-[#6948ff]">View all jop openings.</a></p>
                </div>
                <div className="right w-full md:w-[80%] mx-auto  max-w-[500px] lg:w-full">
                    <form action="" className="flex flex-col gap-y-6">
                        <input className="gray-border" type="text" placeholder="Full name"/>
                        <input className="gray-border" type="email" placeholder="Email"/>
                        <input className="gray-border" type="phone" placeholder="Phone"/>
                        <textarea className="gray-border" name="message" id="" cols="60" rows="10" placeholder="Message"></textarea>
                        <label htmlFor="box">
                            <input className="mr-1" type="checkbox" id="box"/>
                            By checking this box, you agree to<br/>the Privacy Policy andCookie Policy.
                        </label>
                        <button className="bg-[#6948ff] hover:bg-[#553bcb] transition p-2 rounded text-white">Submit</button>
                    </form>
                </div>
            </div>
        </motion.div>
    );
}

export default Contact;