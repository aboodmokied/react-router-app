import React from "react";
import Header from "./components/Header";
import MainPage from "./components/MainPage";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer"
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import { Route,Routes} from "react-router-dom";
import "./index.css"

function App() {
    return ( 
        <div className="text-white overflow-hidden">
            {/* <div className="containerr w-[100%] md:w-[80%] mx-auto"> */}

            <Header/>
        
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="pricing" element={<Pricing/>}/>
                <Route path="faq" element={<Faq/>}/>
                <Route path="contact" element={<Contact/>}/>
            </Routes>
            <Footer/>
            {/* </div> */}
        </div>
    );
}

export default App;