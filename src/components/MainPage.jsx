import React from "react";
import Home from "./Home";
import Pricing from "./Pricing";
import Faq from "./Faq";
import Hero from "./Hero";
import Contact from "./Contact";
import {motion} from "framer-motion"
function MainPage() {
    
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
        variants={variants}
        initial="hidden"
        animate="visible"
        >
            <Home/>
            <Pricing/>
            <Hero/>
            <Faq/>
            <Contact/>
        </motion.div>
    );
}

export default MainPage;