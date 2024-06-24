import React from 'react';
import NavBar from "./NavBar.jsx";
import Footer from "./Footer.jsx";

const Compare = () => {
    return (
        <div>
            <nav>
                <NavBar/>
            </nav>

            <div>
                <div className="w-[60%] mx-auto flex justify-between py-24">
                    <div className="w-[40%]">
                        <h1 className="text-5xl font-medium font-serif">Comparer</h1>
                        <p className="text-gray-500 font-medium font-serif text-lg py-10">Lorem ipsum dolor sit amet,
                            consectetur adipisicing elit. Enim, et. Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Enim, et..</p>
                        <div className="flex gap-10">
                            <button className="text-white font-serif font-bold bg-black px-10 py-3 rounded">Retour à la
                                recherche
                            </button>
                            <div className="flex gap-5">
                                <div className="bg-yellow-600 px-3 py-3 rounded cursor-pointer">
                                    <svg className="w-6 h-6 text-white" aria-hidden="true"
                                         xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                         viewBox="0 0 24 24">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                              stroke-width="2" d="m15 19-7-7 7-7"/>
                                    </svg>
                                </div>
                                <div className="bg-yellow-600 px-3 py-3 rounded cursor-pointer">
                                    <svg className="w-6 h-6 text-white" aria-hidden="true"
                                         xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                         viewBox="0 0 24 24">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                              stroke-width="2" d="m9 5 7 7-7 7"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[50%]"></div>
                </div>
            </div>

            <footer>
                <Footer/>
            </footer>
        </div>
    );
};

export default Compare;