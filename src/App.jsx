import './App.css';
import {Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./Components/Home.jsx";
import NavBar from "./Components/NavBar.jsx";
import QuiSommesNous from "./Components/QuiSommesNous.jsx";
import Blog from "./Components/Blog.jsx";
import Faq from "./Components/Faq.jsx";
import Compare from "./Components/Compare.jsx";
import Footer from "./Components/Footer.jsx";
import Team from "./Components/Team.jsx";
import Conatct from "./Components/Contact.jsx";
import Annonces from "./Components/Prestataire/Annonces.jsx";
import Favorites from "./Components/Prestataire/Favorites.jsx";
import Login from "./Components/Auth/Login.jsx";
function App() {
    return (
            <div>


                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="NavBar" element={<NavBar/>}/>
                    <Route path="QuiSommesNous" element={<QuiSommesNous/>}/>
                    <Route path="Blog" element={<Blog/>}/>
                    <Route path="Faq" element={<Faq/>}/>
                    <Route path="Compare" element={<Compare/>}/>
                    <Route path="Footer" element={<Footer/>}/>
                    <Route path="Team" element={<Team/>}/>
                    <Route path="contact" element={<Conatct/>}/>
                    <Route path="Annonces" element={<Annonces/>}/>
                    <Route path="Favorites" element={<Favorites/>}/>
                    <Route path="Login" element={<Login/>}/>
                </Routes>
            </div>
    );
}

export default App;
