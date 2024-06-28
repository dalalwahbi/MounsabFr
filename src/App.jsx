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
import Contact from "./Components/Contact.jsx";
import Annonces from "./Components/Prestataire/Annonces.jsx";
import Favorites from "./Components/Prestataire/Favorites.jsx";
import Login from "./Components/Auth/Login.jsx";
import ClientRegister from "./Components/Auth/ClientRegister.jsx";
import PrestataireRegister from "./Components/Auth/PrestataireRegister.jsx";
import Dashboard from './Components/Admin/Dashboard.jsx';
import PrivateRoute from './Components/PrivateRoute.jsx';

function App() {
    return (
            <div>
                 <Routes>
                <Route path="/" element={<Home />} />
                <Route path="Login" element={<Login />} />
                <Route path="ClientRegister" element={<ClientRegister />} />
                <Route path="PrestataireRegister" element={<PrestataireRegister />} />


                {/* Admin routes */}
                <Route path="Dashboard" element={
                    <PrivateRoute roles={['admin']}>
                        <Dashboard />
                    </PrivateRoute>
                }/>

                {/* Prestataire routes */}
                <Route path="Annonces" element={
                    <PrivateRoute roles={['prestataire']}>
                        <Annonces />
                    </PrivateRoute>
                }/>
                <Route path="Favorites" element={
                    <PrivateRoute roles={['prestataire']}>
                        <Favorites />
                    </PrivateRoute>
                }/>

                {/* Client routes */}
                <Route path="Home" element={
                    <PrivateRoute roles={['client']}>
                        <Home />
                    </PrivateRoute>
                }/>
                <Route path="Blog" element={
                    <PrivateRoute roles={['client']}>
                        <Blog />
                    </PrivateRoute>
                }/>
                <Route path="Faq" element={
                    <PrivateRoute roles={['client']}>
                        <Faq />
                    </PrivateRoute>
                }/>
                <Route path="Compare" element={
                    <PrivateRoute roles={['client']}>
                        <Compare />
                    </PrivateRoute>
                }/>
                <Route path="Team" element={
                    <PrivateRoute roles={['client']}>
                        <Team />
                    </PrivateRoute>
                }/>
                 <Route path="Contact" element={
                    <PrivateRoute roles={['client']}>
                        <Contact />
                    </PrivateRoute>
                }/>
                  <Route path="QuiSommesNous" element={
                    <PrivateRoute roles={['client']}>
                        <QuiSommesNous />
                    </PrivateRoute>
                }/>
            </Routes>
            </div>
    );
}

export default App;
