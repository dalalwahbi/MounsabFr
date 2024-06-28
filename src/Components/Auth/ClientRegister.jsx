import React from 'react';
import NavBar from "../NavBar.jsx";
import Footer from "../Footer.jsx";
import { Link } from 'react-router-dom';
import backgroundQuiSommesNous from "../../assets/QuiSommeNous1.jpg";

const ClientRegister = () => {
    return (
        <div>
        <nav>
            <NavBar />
        </nav>
        <div className="w-[100%] mx-auto " style={{
            backgroundImage: `url(${backgroundQuiSommesNous})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height: '71vh'
        }}>
            <div className="py-16">
                <div className="w-[50%]  mx-auto bg-white">
                    <div className="py-14">
                        <div className="px-12 ">
                        <div className="w-full">
                            <h1 className="text-3xl font-serif font-bold tracking-wider text-black capitalize">
                                SIGN UP AS CLIENT
                            </h1>
                            <div>
                                <div className=" flex justify-end mt-3 md:flex md:items-center md:-mx-2">
                                    <Link to="/PrestataireRegister" className="flex justify-center font-serif font-medium w-full px-6 py-3 mt-4 text-white border bg-black cursor-pointer rounded-lg md:mt-0 md:w-auto md:mx-2 hover:bg-yellow-600 hover:text-white  duration-500 focus:outline-none">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                                        </svg>
                                        <span className="mx-2">As Prestataire</span>
                                    </Link>
                                </div>
                            </div>

                            <div  className=" w-full">
                                <form className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2 ">
                                    <div>
                                        <label className="block mb-2 text-sm text-black font-medium font-serif ">First Name</label>
                                        <input type="text" placeholder="John" className="block w-full px-5 py-3 border border-black  mt-2 text-gray-700 placeholder-gray-400 bg-white  rounded-lg  focus:border-yellow-600  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"/>
                                    </div>

                                    <div>
                                        <label className="block mb-2 text-sm text-black font-medium font-serif ">Last Name</label>
                                        <input type="text" placeholder="Week" className="block w-full px-5 py-3 border border-black  mt-2 text-gray-700 placeholder-gray-400 bg-white  rounded-lg  focus:border-yellow-600  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"/>
                                    </div>

                                    <div>
                                        <label className="block mb-2 text-sm text-black font-medium font-serif">Email Address</label>
                                        <input type="text" placeholder="johnsnow@example.com" className="block  border border-black w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white  rounded-lg  focus:border-yellow-600  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"/>
                                    </div>

                                    <div>
                                        <label className="block mb-2 text-sm text-black font-medium font-serif">Password</label>
                                        <input type="password" placeholder="" className="block w-full px-5 py-3 border border-black  mt-2 text-gray-700 placeholder-gray-400 bg-white  rounded-lg  focus:border-yellow-600  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"/>
                                    </div>
                                    <div>
                                        <label className="block mb-2 text-sm text-black font-medium font-serif">Phone Number</label>
                                        <input type="number" placeholder="" className="block w-full px-5 py-3 border border-black  mt-2 text-gray-700 placeholder-gray-400 bg-white  rounded-lg  focus:border-yellow-600  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"/>
                                    </div>

                                    <input type="hidden" name="role"/>

                                    <button type="submit"
                                            className="flex items-center justify-between w-full px-6 h-12 mt-7 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-black rounded-lg hover:bg-gray-900 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                        <span>Sign Up </span>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 rtl:-scale-x-100" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
                                        </svg>
                                    </button>
                                </form>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <footer>
            <Footer />
        </footer>
    </div>
    );
};

export default ClientRegister;