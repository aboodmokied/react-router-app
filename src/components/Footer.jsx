import React from "react";
import {BsFacebook} from "react-icons/bs"
import {AiFillTwitterCircle,AiFillGithub} from "react-icons/ai"
function Footer() {
    return (
        <div className="pt-[50px] pb-[20px] bg-zinc-800">
            <div className="containerr">

            <div className="top pb-5 border-b border-gray-400 mb-5 font-extralight">

            <div className="grid grid-col-1 gap-y-[50px] lg:grid-cols-2 ">

            <div className="lists grid grid-cols-4 gap-x-[60px]  md:gap-x-[80px]">
                <ul className="ul-list">
                    <li className="li-list"><a href="/#" >Solutions</a></li>
                    <li className="li-list"><a href="/#" >Marketing</a></li>
                    <li className="li-list"><a href="/#" >Analytics</a></li>
                    <li className="li-list"><a href="/#" >Commerce</a></li>
                    <li className="li-list"><a href="/#" >Insights</a></li>
                
                </ul>
                <ul className="ul-list">
                    <li className="li-list"><a href="/#" >Support</a></li>
                    <li className="li-list"><a href="/#" >Pricing</a></li>
                    <li className="li-list"><a href="/#" >Documentation</a></li>
                    <li className="li-list"><a href="/#" >Guides</a></li>
                    <li className="li-list"><a href="/#" >API</a> Status</li>
                </ul>
                <ul className="ul-list">
                    <li className="li-list"><a href="/#" >Company</a></li>
                    <li className="li-list"><a href="/#" >About</a></li>
                    <li className="li-list"><a href="/#" >Blog</a></li>
                    <li className="li-list"><a href="/#" >Jops</a></li>
                    <li className="li-list"><a href="/#" >Press</a></li>
                </ul>
                <ul className="ul-list">
                    <li className="li-list"><a href="/#" >Legal</a></li>
                    <li className="li-list"><a href="/#" >Claim</a></li>
                    <li className="li-list"><a href="/#" >Privacy</a></li>
                    <li className="li-list"><a href="/#" >Cookies</a></li>
                    <li className="li-list"><a href="/#" >Terms</a></li>
                </ul>

            </div>

            <div className="lg:justify-self-end">
                <h1 className="mb-[20px]">Subscribe to our newsletter</h1>
                <p className="mb-[20px] text-sm text-gray-400">The latest news, articles, and resources sent to your inbox weekly.</p>
                <div>
                    <form action="">
                        <input type="text" className="p-1 rounded outline-0 text-black w-[60%] max-w-[250px]" placeholder="Enter your email"/>
                        <button className="ml-[10px] bg-[#6948ff] py-1 px-3 rounded">Subscribe</button>
                    </form>
                </div>
            </div>
            </div>

            </div>
            


            <div className="bottom flex flex-col-reverse justify-between items-center gap-y-5">
                <p className="text-gray-400 text-sm">© Workflow, Inc. All rights reserved.</p>
                <div className="icons flex items-center text-2xl gap-5 text-gray-200">
                    <div className="cursor-pointer hover:scale-150 duration-500">
                    <a href="/#"><AiFillTwitterCircle/></a>
                    </div>
                    <div className="cursor-pointer hover:scale-150 duration-500">
                    <a href="/#"><BsFacebook/></a>
                    </div>
                    <div className="cursor-pointer hover:scale-150 duration-500">
                    <a href="/#"><AiFillGithub/></a>
                    </div>

                    </div>
            </div>
            </div>
        </div>
    );
}

export default Footer;