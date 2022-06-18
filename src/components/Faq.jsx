import React from "react";
import {motion} from "framer-motion"
function Faq() {
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
        className="bg-white text-zinc-800 my-[50px] md:my-[100px]"
        variants={variants}
        initial="hidden"
        animate="visible"
        >
            <div className="containerr">
            <div className="flex flex-col lg:flex-row gap-x-[10%] gap-y-[50px]">
                <div className="left">
                    
                    <h4 className="text-zinc-800 text-2xl font-bold mb-3">Frequently asked <span className="text-[#6948ff]">questions</span></h4>
                    <p className="text-[#808080]">Can't find the answer you're looking for?<br/>Reach out to our <a href="/#" className="text-[#6948ff]">customer support</a> team.</p>
                </div>

                <div className="right divs">
                    <div>
                        <h1>How do you make holy water?</h1>
                        <p>You biol the hell out of it. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div>
                        <h1>How do you make holy water?</h1>
                        <p>You biol the hell out of it. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div>
                        <h1>How do you make holy water?</h1>
                        <p>You biol the hell out of it. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div>
                        <h1>How do you make holy water?</h1>
                        <p>You biol the hell out of it. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
            </div>
            </div>
        </motion.div>
    );
}

export default Faq;