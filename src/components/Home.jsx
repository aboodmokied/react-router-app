import React from "react";
import {BsFacebook} from "react-icons/bs"
import {AiFillTwitterCircle,AiFillGithub} from "react-icons/ai"
import {BiCoinStack} from "react-icons/bi"
import {FaStarOfLife,FaAccusoft} from "react-icons/fa"

function Home() {
    return (
        <div className="min-h-[90vh] bg-zinc-800">
            <div className="containerr">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[80px] lg:gap-[50px] py-[50px]  ">
            <div className="info self-center">
                <h1 className="text-5xl font-bold mb-3">Data to enrich your</h1>
                <h1 className="text-5xl font-bold mb-3 text-[#6948ff]">online business</h1>
                <p className="text-[#808080] mt-8">Lorem ipsum dolor sit amet, consec tetur adipisicing elit. Architecto iure fuga deleniti sit! Cum doloribus, nesciunt laboriosam eos praesentium veritatis!</p>
                
                <div className="mt-10 text-[#808080]">
                    <h2 className="mb-3 text-sm">USED BY</h2>
                    <div className="flex gap-7 italic">
                        <div className="flex gap-2 items-center"><BiCoinStack/><span>Stacks</span></div>
                        <div className="flex gap-2 items-center"><FaStarOfLife/><span>Star AI</span></div>
                        <div className="flex gap-2 items-center"><FaAccusoft/><span>Accusoft</span></div>
                    </div>
                </div>
            </div>

            <div className="rounded-md bg-white overflow-hidden text-black w-full max-w-[390px] justify-self-center mb-[30px] lg:mb-0">
            <div className="login pt-5 px-7 ">
                <h1 className="text-gray-600  mb-2">sign in with</h1>
                <div className="media grid grid-cols-3 text-xl text-zinc-800">
                    <div className="facebook social"><BsFacebook/></div>
                    <div className="twitter social"><AiFillTwitterCircle/></div>
                    <div className="github social"><AiFillGithub/></div>
                    
                </div>
                <div className="or flex mt-4 mb-6">
                    <div className="flex-grow border-b"></div>
                    <div className="px-2 text-gray-600 text-md ">Or</div>
                    <div className="flex-grow border-b"></div>
                </div>
                <div className="input-form mb-4">
                    <form action="">
                        <input className="input-field" type="text" name="name" placeholder="Name"/>
                        <input className="input-field" type="email" name="email" placeholder="Email"/>
                        <input className="input-field" type="password" name="password" placeholder="Password"/>
                        <button className="bg-[#6948ff] block w-full px-1 py-2 rounded text-white text-sm hover:bg-[#553bcb] mt-5 transition">Create your account</button>
                    </form>
                </div>
            </div>
                <div className="caption border-t-2 py-5 px-7 text-sm text-gray-600 bg-[#f0f0f0]">By signing up, you agree to our Terms, Data Policy and Cookies Policy.</div>
            </div>

        </div>
            </div>
        </div>
    );
}

export default Home
