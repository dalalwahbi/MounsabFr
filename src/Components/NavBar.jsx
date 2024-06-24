import React from 'react';
import {Link} from "react-router-dom";
import logo from '/src/assets//logo.png'

const NavBar = () => {
    return (
        <div>
            <header  className="gi-header bg-[#fff] z-[14] max-[991px]:z-[16] relative">
                <div  className="gi-header-bottom p-[0] border-b-[1px] border-solid boredr-[#eee] max-[991px]:py-[15px] min-[992px]:block max-[575px]:pt-[15px] max-[575px]:border-[0] max-[575px]:pb-[0] shadow-md">
                    <div  className="flex flex-wrap justify-between items-center mx-auto min-[1600px]:max-w-[1600px] min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px] relative">
                        <div  className="w-full flex flex-wrap px-[12px] max-[575px]:p-[0]">
                            <div  className="gi-flex flex flex-row justify-between w-full max-[575px]:p-[0] max-[575px]:flex-col">
                                <div  className="gi-header-logo flex items-center self-center max-[575px]:mb-[15px]">
                                    <a href="#"  className="gi-header-btn gi-site-menu-icon mr-[20px] flex items-center min-[992px]:hidden max-[575px]:hidden">
                                        <i  className="fi-rr-menu-burger text-[24px] leading-[17px] text-black"></i>
                                    </a>
                                    <Link to="/"  className="header-logo text-left">
                                        <img src={logo}  className="max-w-[144px] max-[1199px]:max-w-[120px] max-[991px]:max-w-[120px] max-[767px]:max-w-[100px] w-[110px] h-[85px]"/>
                                    </Link>
                                </div>
                                <div  className="gi-header-cat transition-all duration-[0.3s] w-full ease-in-out bg-[#fff] hidden min-[992px]:block">
                                    <div  className="flex flex-wrap justify-between items-center mx-auto min-[1600px]:max-w-[1600px] min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px] relative">
                                        <div  className="gi-nav-bar flex flex-row justify-between relative w-full px-[12px]">
                                            <div id="gi-main-menu-desk"  className="w-full flex items-center min-[992px]:block hidden">
                                                <div  className="nav-desk">
                                                    <div  className="w-full flex flex-wrap px-[12px] min-[1400px]:relative">
                                                        <div  className="basis-auto w-full self-center">
                                                            <div  className="gi-main-menu flex">
                                                                <ul  className="w-full flex flex-wrap pl-[0]">
                                                                    <li  className="dropdown drop-list relative ml-[20px] mr-[30px] transition-all duration-[0.3s] ease-in-out max-[1199px]:ml-[15px]">
                                                                        <a href="#"  className="dropdown-arrow relative transition-all duration-[0.3s] ease-in-out py-[15px] text-[15px] leading-[60px] capitalize text-black flex items-center font-medium">Marriage<i  className="fi-rr-angle-small-right transition-all duration-[0.3s] ease-in-out mr-[5px] text-black absolute right-[-27px] text-[18px] rotate-[90deg] flex"></i></a>
                                                                        <ul  className="sub-menu transition-all duration-[0.3s] ease-in-out mt-[15px] absolute z-[16] text-left opacity-0 invisible min-w-[205px] left-0 right-auto bg-[#fff] block rounded-[5px] border-[1px] border-solid border-[#eee] py-2 w-[410px] shadow-lg">
                                                                            <li><a href="#"  className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px]   py-[4px] font-normal text-gray-800capitalize flex justify-between items-center hover:text-yellow-600">Traiteur Pour Mariage</a></li>
                                                                            <li  className="dropdown position-static">
                                                                                <a href="#"  className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px]   py-[4px] font-normal text-gray-800capitalize flex justify-between items-center hover:text-yellow-600">Lieu de réception
                                                                                    <i  className="fi-rr-angle-small-right transition-all duration-[0.3s] ease-in-out mr-[5px] text-black absolute right-[2px] text-[18px] flex"></i>
                                                                                </a>
                                                                                <ul  className="sub-menu sub-menu-child transition-all duration-[0.3s] ease-in-out mt-[15px] absolute z-[16] text-left opacity-0 invisible min-w-[205px] left-0 right-auto bg-[#fff] block rounded-[5px] border-[1px] border-solid border-[#eee] py-[5px]">
                                                                                    <li><a href="#"  className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px]   py-[4px] font-normal text-gray-800capitalize flex justify-between items-center hover:text-yellow-600">Salle de fete</a></li>
                                                                                    <li><a href="#"  className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px]   py-[4px] font-normal text-gray-800capitalize flex justify-between items-center hover:text-yellow-600">Villa privée</a></li>
                                                                                    <li><a href="#"  className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px]   py-[4px] font-normal text-gray-800capitalize flex justify-between items-center hover:text-yellow-600">Salle de Réception</a></li>
                                                                                </ul>
                                                                            </li>
                                                                            <li><a href="#"  className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px]   py-[4px] font-normal text-gray-800capitalize flex justify-between items-center hover:text-yellow-600">Nagafa (Planification de marriage)</a></li>
                                                                            <li><a href="#"  className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px]   py-[4px] font-normal text-gray-800capitalize flex justify-between items-center hover:text-yellow-600">Tyafer / Chocolatier</a></li>
                                                                            <li><a href="#"  className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px]   py-[4px] font-normal text-gray-800capitalize flex justify-between items-center hover:text-yellow-600">Photographe et vidéographe</a></li>
                                                                            <li  className="dropdown position-static">
                                                                                <a href="#"  className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px]   py-[4px] font-normal text-gray-800capitalize flex justify-between items-center hover:text-yellow-600">Musique
                                                                                    <i  className="fi-rr-angle-small-right transition-all duration-[0.3s] ease-in-out mr-[5px] text-black absolute right-[2px] text-[18px] flex"></i>
                                                                                </a>
                                                                                <ul className="sub-menu sub-menu-child transition-all duration-[0.3s] ease-in-out mt-[15px] absolute z-[16] text-left opacity-0 invisible min-w-[205px] left-0 right-auto bg-[#fff] block rounded-[5px] border-[1px] border-solid border-[#eee] py-[5px]">
                                                                                    <li><a href="#"
                                                                                           className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px]   py-[4px] font-normal text-gray-800capitalize flex justify-between items-center hover:text-yellow-600">Orchester</a>
                                                                                    </li>
                                                                                    <li><a href="#"
                                                                                           className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px]   py-[4px] font-normal text-gray-800capitalize flex justify-between items-center hover:text-yellow-600">Orcheste
                                                                                        Chaabi / Tarab </a></li>
                                                                                    <li><a href="#"
                                                                                           className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px]   py-[4px] font-normal text-gray-800capitalize flex justify-between items-center hover:text-yellow-600">DJ
                                                                                        (Animateur) </a></li>
                                                                                    <li><a href="#"
                                                                                           className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px]   py-[4px] font-normal text-gray-800capitalize flex justify-between items-center hover:text-yellow-600">Issawa
                                                                                        / DQAYQYA </a></li>
                                                                                    <li><a href="#"
                                                                                           className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px]   py-[4px] font-normal text-gray-800capitalize flex justify-between items-center hover:text-yellow-600">Awniyat</a>
                                                                                    </li>
                                                                                    <li><a href="#"
                                                                                           className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px]   py-[4px] font-normal text-gray-800capitalize flex justify-between items-center hover:text-yellow-600">Amdah</a>
                                                                                    </li>


                                                                                </ul>
                                                                            </li>
                                                                            <li><a href="#"
                                                                                   className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px]   py-[4px] font-normal text-gray-800capitalize flex justify-between items-center hover:text-yellow-600">Serveur Freelance</a></li>
                                                                            <li><a href="#"  className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px]   py-[4px] font-normal text-gray-800capitalize flex justify-between items-center hover:text-yellow-600">Femme de Menage Freelance</a></li>
                                                                            <li><a href="#"  className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px]   py-[4px] font-normal text-gray-800capitalize flex justify-between items-center hover:text-yellow-600">Agence de voyage (Lien de Miel)</a></li>
                                                                            <li><a href="#"  className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px]   py-[4px] font-normal text-gray-800capitalize flex justify-between items-center hover:text-yellow-600">Patisserie / Wedding Cake</a></li>
                                                                            <li><a href="#"  className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px]   py-[4px] font-normal text-gray-800capitalize flex justify-between items-center hover:text-yellow-600">Adoul / Cérémonie</a></li>
                                                                            <li><a href="#"  className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px]   py-[4px] font-normal text-gray-800capitalize flex justify-between items-center hover:text-yellow-600">Locataire des Robes de mariée et tenues pour le marié</a></li>
                                                                        </ul>
                                                                    </li>
                                                                    <li  className="dropdown drop-list relative ml-[20px] mr-[30px] transition-all duration-[0.3s] ease-in-out max-[1199px]:ml-[15px]">
                                                                        <a href="#"  className="dropdown-arrow relative transition-all duration-[0.3s] ease-in-out py-[15px] text-[15px] leading-[60px] capitalize text-black flex items-center font-medium">Fete de naissance<i  className="fi-rr-angle-small-right transition-all duration-[0.3s] ease-in-out mr-[5px] text-black absolute right-[-27px] text-[18px] rotate-[90deg] flex"></i></a>
                                                                        <ul  className="sub-menu transition-all duration-[0.3s] ease-in-out mt-[15px] absolute z-[16] text-left opacity-0 invisible min-w-[205px] left-0 right-auto bg-[#fff] block rounded-[5px] border-[1px] border-solid border-[#eee] py-[5px] w-[350px]">
                                                                            <li><a href="#"  className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px]   py-[4px] font-normal text-gray-800capitalize flex justify-between items-center hover:text-yellow-600">Artiste ou Animateur</a></li>
                                                                            <li><a href="#"  className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px]   py-[4px] font-normal text-gray-800capitalize flex justify-between items-center hover:text-yellow-600">Décorateur de Fete</a></li>
                                                                            <li><a href="#"  className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px]   py-[4px] font-normal text-gray-800capitalize flex justify-between items-center hover:text-yellow-600">Henné</a></li>
                                                                            <li><a href="#"  className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px]   py-[4px] font-normal text-gray-800capitalize flex justify-between items-center hover:text-yellow-600">Lieu de réception</a></li>
                                                                            <li><a href="#"  className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px]   py-[4px] font-normal text-gray-800capitalize flex justify-between items-center hover:text-yellow-600">Location de matériel Patissier ou boulanger</a></li>
                                                                            <li><a href="#"  className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px]   py-[4px] font-normal text-gray-800capitalize flex justify-between items-center hover:text-yellow-600">Photographer ou Vidéographer</a></li>
                                                                            <li><a href="#"  className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px]   py-[4px] font-normal text-gray-800capitalize flex justify-between items-center hover:text-yellow-600">Traiteur Pour Sbouaa</a></li>
                                                                        </ul>
                                                                    </li>
                                                                    <li  className="dropdown drop-list relative ml-[20px] mr-[30px] transition-all duration-[0.3s] ease-in-out max-[1199px]:ml-[15px]">
                                                                        <a href="#"  className="dropdown-arrow relative transition-all duration-[0.3s] ease-in-out py-[15px] text-[15px] leading-[60px] capitalize text-black flex items-center font-medium">BabyShower<i  className="fi-rr-angle-small-right transition-all duration-[0.3s] ease-in-out mr-[5px] text-black absolute right-[-27px] text-[18px] rotate-[90deg] flex"></i></a>
                                                                        <ul  className="sub-menu transition-all duration-[0.3s] ease-in-out mt-[15px] absolute z-[16] text-left opacity-0 invisible min-w-[205px] left-0 right-auto bg-[#fff] block rounded-[5px] border-[1px] border-solid border-[#eee] py-[5px] w-[250px]">
                                                                            <li><a href="#"  className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px]   py-[4px] font-normal text-gray-800capitalize flex justify-between items-center hover:text-yellow-600">Agence Décoration</a></li>
                                                                            <li><a href="#"  className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px]   py-[4px] font-normal text-gray-800capitalize flex justify-between items-center hover:text-yellow-600">Patisserie / Wedding Cake</a></li>
                                                                            <li><a href="#"  className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px]   py-[4px] font-normal text-gray-800capitalize flex justify-between items-center hover:text-yellow-600">Traiteur Pour Baby Shower</a></li>
                                                                        </ul>
                                                                    </li>
                                                                    <li  className="dropdown drop-list relative ml-[20px] mr-[30px] transition-all duration-[0.3s] ease-in-out max-[1199px]:ml-[15px]">
                                                                        <a href="#"  className="dropdown-arrow relative transition-all duration-[0.3s] ease-in-out py-[15px] text-[15px] leading-[60px] capitalize text-black flex items-center font-medium">Anniversaire<i  className="fi-rr-angle-small-right transition-all duration-[0.3s] ease-in-out mr-[5px] text-black absolute right-[-27px] text-[18px] rotate-[90deg] flex"></i></a>
                                                                        <ul  className="sub-menu transition-all duration-[0.3s] ease-in-out mt-[15px] absolute z-[16] text-left opacity-0 invisible min-w-[205px] left-0 right-auto bg-[#fff] block rounded-[5px] border-[1px] border-solid border-[#eee] py-[5px] w-[250px]">
                                                                            <li  className="dropdown position-static">
                                                                                <a href="#"  className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px]   py-[4px] font-normal text-gray-800capitalize flex justify-between items-center hover:text-yellow-600">Anniversaire Pour Enfants
                                                                                    <i  className="fi-rr-angle-small-right transition-all duration-[0.3s] ease-in-out mr-[5px] text-black absolute right-[2px] text-[18px] flex"></i>
                                                                                </a>
                                                                                <ul  className="sub-menu sub-menu-child transition-all duration-[0.3s] ease-in-out mt-[15px] absolute z-[16] text-left opacity-0 invisible min-w-[205px] left-0 right-auto bg-[#fff] block rounded-[5px] border-[1px] border-solid border-[#eee] py-[5px] w-[300px]">
                                                                                    <li><a href="#"  className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px]   py-[4px] font-normal text-gray-800capitalize flex justify-between items-center hover:text-yellow-600">Traiteur Pour Anniversaire Enfants</a></li>
                                                                                    <li><a href="#"  className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px]   py-[4px] font-normal text-gray-800capitalize flex justify-between items-center hover:text-yellow-600">Animateur</a></li>
                                                                                    <li><a href="#"  className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px]   py-[4px] font-normal text-gray-800capitalize flex justify-between items-center hover:text-yellow-600">Clown</a></li>
                                                                                    <li><a href="#"  className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px]   py-[4px] font-normal text-gray-800capitalize flex justify-between items-center hover:text-yellow-600">Patissier ou Boulanger</a></li>
                                                                                    <li><a href="#"  className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px]   py-[4px] font-normal text-gray-800capitalize flex justify-between items-center hover:text-yellow-600">Décorateur de Fete</a></li>
                                                                                    <li><a href="#"  className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px]   py-[4px] font-normal text-gray-800capitalize flex justify-between items-center hover:text-yellow-600">Lieu de Réception</a></li>
                                                                                    <li><a href="#"  className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px]   py-[4px] font-normal text-gray-800capitalize flex justify-between items-center hover:text-yellow-600">Photographe et Vidéographer</a></li>
                                                                                    <li><a href="#"  className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px]   py-[4px] font-normal text-gray-800capitalize flex justify-between items-center hover:text-yellow-600">Patisserie / Wedding Cake</a></li>
                                                                                    <li><a href="#"  className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px]   py-[4px] font-normal text-gray-800capitalize flex justify-between items-center hover:text-yellow-600">Locataire de jeux et d'attractions</a></li>
                                                                                    <li><a href="#"  className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px]   py-[4px] font-normal text-gray-800capitalize flex justify-between items-center hover:text-yellow-600">Magasin de déguisements</a></li>
                                                                                </ul>
                                                                            </li>
                                                                            <li  className="dropdown position-static">
                                                                                <a href="#"  className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px]   py-[4px] font-normal text-gray-800capitalize flex justify-between items-center hover:text-yellow-600">Anniversaire Pour Adultes
                                                                                    <i  className="fi-rr-angle-small-right transition-all duration-[0.3s] ease-in-out mr-[5px] text-black absolute right-[2px] text-[18px] flex"></i>
                                                                                </a>
                                                                                <ul  className="sub-menu sub-menu-child transition-all duration-[0.3s] ease-in-out mt-[15px] absolute z-[16] text-left opacity-0 invisible min-w-[205px] left-0 right-auto bg-[#fff] block rounded-[5px] border-[1px] border-solid border-[#eee] py-[5px] w-[300px]">
                                                                                    <li><a href="#"  className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px]   py-[4px] font-normal text-gray-800capitalize flex justify-between items-center hover:text-yellow-600">Traiteur Anniversaire Adulte</a></li>
                                                                                    <li><a href="#"  className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px]   py-[4px] font-normal text-gray-800capitalize flex justify-between items-center hover:text-yellow-600">Patissier ou Boulanger</a></li>
                                                                                    <li><a href="#"  className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px]   py-[4px] font-normal text-gray-800capitalize flex justify-between items-center hover:text-yellow-600">Décorateur de Fete</a></li>
                                                                                    <li><a href="#"  className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px]   py-[4px] font-normal text-gray-800capitalize flex justify-between items-center hover:text-yellow-600">Photographe et Vidéographer</a></li>
                                                                                    <li><a href="#"  className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px]   py-[4px] font-normal text-gray-800capitalize flex justify-between items-center hover:text-yellow-600">DJ ou groupe de Musique</a></li>
                                                                                    <li><a href="#"  className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px]   py-[4px] font-normal text-gray-800capitalize flex justify-between items-center hover:text-yellow-600">Lieu de Réception</a></li>
                                                                                </ul>
                                                                            </li>

                                                                        </ul>
                                                                    </li>

                                                                    <li  className="dropdown drop-list relative ml-[20px] mr-[30px] transition-all duration-[0.3s] ease-in-out max-[1199px]:ml-[15px]">
                                                                        <a href="#"  className="dropdown-arrow relative transition-all duration-[0.3s] ease-in-out py-[15px] text-[15px] leading-[60px] capitalize text-black flex items-center font-medium">Conférence<i  className="fi-rr-angle-small-right transition-all duration-[0.3s] ease-in-out mr-[5px] text-black absolute right-[-27px] text-[18px] rotate-[90deg] flex"></i></a>
                                                                        <ul  className="sub-menu transition-all duration-[0.3s] ease-in-out mt-[15px] absolute z-[16] text-left opacity-0 invisible min-w-[205px] left-0 right-auto bg-[#fff] block rounded-[5px] border-[1px] border-solid border-[#eee] py-[5px] w-[250px]">
                                                                            <li  className="dropdown position-static">
                                                                                <a href="#"  className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px]   py-[4px] font-normal text-gray-800capitalize flex justify-between items-center hover:text-yellow-600">Colloque
                                                                                    <i  className="fi-rr-angle-small-right transition-all duration-[0.3s] ease-in-out mr-[5px] text-black absolute right-[2px] text-[18px] flex"></i>
                                                                                </a>
                                                                                <ul  className="sub-menu sub-menu-child transition-all duration-[0.3s] ease-in-out mt-[15px] absolute z-[16] text-left opacity-0 invisible min-w-[205px] left-0 right-auto bg-[#fff] block rounded-[5px] border-[1px] border-solid border-[#eee] py-[5px]">
                                                                                    <li><a href="#"  className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px]   py-[4px] font-normal text-gray-800capitalize flex justify-between items-center hover:text-yellow-600">Traiteur Conférence</a></li>
                                                                                    <li><a href="#"  className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px]   py-[4px] font-normal text-gray-800capitalize flex justify-between items-center hover:text-yellow-600">Salle Hotel</a></li>
                                                                                </ul>
                                                                            </li>
                                                                            <li  className="dropdown position-static">
                                                                                <a href="#"  className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px]   py-[4px] font-normal text-gray-800capitalize flex justify-between items-center hover:text-yellow-600">Evénement professionnel
                                                                                    <i  className="fi-rr-angle-small-right transition-all duration-[0.3s] ease-in-out mr-[5px] text-black absolute right-[2px] text-[18px] flex"></i>
                                                                                </a>
                                                                                <ul  className="sub-menu sub-menu-child transition-all duration-[0.3s] ease-in-out mt-[15px] absolute z-[16] text-left opacity-0 invisible min-w-[205px] left-0 right-auto bg-[#fff] block rounded-[5px] border-[1px] border-solid border-[#eee] py-[5px]">
                                                                                    <li><a href="#"  className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px]   py-[4px] font-normal text-gray-800capitalize flex justify-between items-center hover:text-yellow-600">Traiteur pour Event pro</a></li>
                                                                                    <li><a href="#"  className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px]   py-[4px] font-normal text-gray-800capitalize flex justify-between items-center hover:text-yellow-600">Salle Hotel</a></li>
                                                                                </ul>
                                                                            </li>
                                                                            <li  className="dropdown position-static">
                                                                                <a href="#"  className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px]   py-[4px] font-normal text-gray-800capitalize flex justify-between items-center hover:text-yellow-600">Séminaire
                                                                                    <i  className="fi-rr-angle-small-right transition-all duration-[0.3s] ease-in-out mr-[5px] text-black absolute right-[2px] text-[18px] flex"></i>
                                                                                </a>
                                                                                <ul  className="sub-menu sub-menu-child transition-all duration-[0.3s] ease-in-out mt-[15px] absolute z-[16] text-left opacity-0 invisible min-w-[205px] left-0 right-auto bg-[#fff] block rounded-[5px] border-[1px] border-solid border-[#eee] py-[5px]">
                                                                                    <li><a href="#"  className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px]   py-[4px] font-normal text-gray-800capitalize flex justify-between items-center hover:text-yellow-600">Traiteur Pour Séminaire</a></li>
                                                                                    <li><a href="#"  className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px]   py-[4px] font-normal text-gray-800capitalize flex justify-between items-center hover:text-yellow-600">Salle Hotel</a></li>
                                                                                </ul>
                                                                            </li>

                                                                        </ul>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="gi-header-action self-center max-[575px]:w-full max-[575px]:py-[10px] max-[575px]:bg-[#4b5966] w-[400px]">
                                    <div
                                        className="text-white bg-yellow-600 py-3.5 px-8 rounded-md font-serif font-medium ">
                                        <div className="flex justify-center items-center gap-10">
                                            <button className="">Publier votre annonce</button>
                                            <svg className="w-5 h-5 dark:text-white" aria-hidden="true"
                                                 xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                                 viewBox="0 0 24 24">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-width="2"
                                                      d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/>
                                            </svg>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default NavBar;