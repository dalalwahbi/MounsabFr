import React from 'react';
import NavBar from "./NavBar.jsx";
import backgroundQuiSommesNous from "../assets/QuiSommeNous1.jpg";
import backgroundImage from "../assets/image3.jpg";
import Footer from "./Footer.jsx";

const Blog = () => {
    return (
        <div>
            <nav>
                <NavBar/>
            </nav>
            <div className="w-[97%] mx-auto rounded-b-lg" style={{
                backgroundImage: `url(${backgroundQuiSommesNous})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                height: '21vh'
            }}>
                <div className="w-[60%] mx-auto">
                    <h1 className="text-6xl text-white font-bold font-serif py-11">Derniéres nouvelles</h1>
                    <div
                        className="bg-gray-500 opacity-80 px-8 py-3 rounded-t-md mt-1 flex justify-center items-center gap-2 w-[25%]">
                        <p className="text-white font-bold font-serif text-md hover:text-yellow-600 cursor-pointer duration-500">Home</p>
                        <svg className="w-5 h-5 text-yellow-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                             width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M19 12H5m14 0-4 4m4-4-4-4"/>
                        </svg>
                        <p className="text-white font-bold font-serif text-md">Blog</p>
                    </div>
                </div>
            </div>
            <div className="w-[80%] flex justify-between py-10">
                <div></div>
                <div>
                    <div className=" flex text-start">
                        <input
                            className="py-5 border border-gray-400 w-full rounded-l-lg placeholder:text-black px-5 placeholder:font-serif placeholder:text-md"
                            type="text" placeholder="Rechercher"/>
                        <div className="bg-black flex justif-center items-center rounded-r-lg px-5">
                            <svg className="w-7 h-7 text-white" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg"
                                 width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                      stroke-width="2"
                                      d="M19 12H5m14 0-4 4m4-4-4-4"/>
                            </svg>
                        </div>
                    </div>
                    <div className="py-14">
                        <div className="border border-gray-400 px-5 py-5 rounded-t-lg">
                            <h1 className="text-black font-serif font-medium text-md">Tag Cloud</h1>
                        </div>
                        <div className="border border-gray-400 px-5 py-8 rounded-b-lg"></div>
                    </div>
                </div>
            </div>

            <div style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                height: '40vh'
            }}>
                <div className="flex flex-col justify-center items-center text-center w-[30%] mx-auto py-5 ">
                    <h1 className="text-black text-4xl font-serif font-medium py-10">Sign up to receive the latest
                        updates and news</h1>
                    <div className="bg-white w-full px-5 py-3 rounded-r-full shadow-2xl">
                        <div className=" flex gap-4 text-start">
                            <input
                                className="py-5 border border-gray-400 w-full placeholder:text-black px-5 placeholder:font-serif placeholder:text-md"
                                type="text" placeholder="Email"/>
                            <div className="bg-black flex justif-center items-center rounded-r-full px-5">
                                <svg className="w-7 h-7 text-white" aria-hidden="true"
                                     xmlns="http://www.w3.org/2000/svg"
                                     width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                          stroke-width="2"
                                          d="M19 12H5m14 0-4 4m4-4-4-4"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <footer>
                <Footer/>
            </footer>
        </div>
    );
};

export default Blog;