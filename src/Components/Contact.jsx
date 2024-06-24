import React from 'react';
import NavBar from "./NavBar.jsx";
import Footer from "./Footer.jsx";
import backgroundQuiSommesNous from "../assets/QuiSommeNous1.jpg";
const Contact = () => {
    return (
        <div>
            <nav>
                <NavBar/>
            </nav>
            <div className="w-[100%] mx-auto rounded-b-lg" style={{backgroundImage: `url(${backgroundQuiSommesNous})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: '21vh'}}>
                <div className="w-[60%] mx-auto flex justify-between">
                    <div>
                        <h1 className="text-6xl text-white font-bold font-serif py-11">Contact</h1>
                        <div className="bg-gray-500 opacity-80 px-8 py-3 rounded-t-md mt-1 flex justify-center items-center gap-2 w-[50%]">
                            <p className="text-white font-bold font-serif text-md hover:text-yellow-600 cursor-pointer duration-500">Home</p>
                            <svg className="w-5 h-5 text-yellow-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4"/>
                            </svg>
                            <p className="text-white font-bold font-serif text-md">Contact Us</p>
                        </div>
                        <div className="py-24 w-[70%]">
                            <h1 className="text-gray-500 font-serif font-medium">Un clic, vos événements bine yedik
                                Découvrons les meilleurs Prestatires des événements</h1>

                            <div className="flex gap-4  py-7">
                                <div
                                    className="border border-gray-400 px-3 py-3 rounded-full hover:text-yellow-600 hover:border-yellow-600 duration-500">
                                    <svg className="w-6 h-6 text-black hover:text-yellow-600 duration-300"
                                         aria-hidden="true"
                                         xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                         viewBox="0 0 24 24">
                                        <path fill-rule="evenodd"
                                              d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
                                              clip-rule="evenodd"/>
                                    </svg>
                                </div>
                                <div
                                    className="border border-gray-400 px-3 py-3 rounded-full hover:text-yellow-600 hover:border-yellow-600 duration-500">
                                    <svg className="w-6 h-6 text-black hover:text-yellow-600 duration-300"
                                         aria-hidden="true"
                                         xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                         viewBox="0 0 24 24">
                                        <path fill-rule="evenodd"
                                              d="M22 5.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.343 8.343 0 0 1-2.605.981A4.13 4.13 0 0 0 15.85 4a4.068 4.068 0 0 0-4.1 4.038c0 .31.035.618.105.919A11.705 11.705 0 0 1 3.4 4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 6.1 13.635a4.192 4.192 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 2 18.184 11.732 11.732 0 0 0 8.291 20 11.502 11.502 0 0 0 19.964 8.5c0-.177 0-.349-.012-.523A8.143 8.143 0 0 0 22 5.892Z"
                                              clip-rule="evenodd"/>
                                    </svg>
                                </div>
                                <div
                                    className="border border-gray-400 px-3 py-3 rounded-full hover:text-yellow-600 hover:border-yellow-600 duration-500">
                                    <svg className="w-6 h-6 text-black hover:text-yellow-600 duration-300"
                                         aria-hidden="true"
                                         xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                         viewBox="0 0 24 24">
                                        <path fill="currentColor" fill-rule="evenodd"
                                              d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                                              clip-rule="evenodd"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg w-[60%] mt-20 shadow-2xl">
                        <div className="w-[85%] mx-auto py-10 ">
                            <h1 className="text-3xl font-serif font-medium text-center">Send a Message</h1>

                            <div className="relative flex  items-center text-black py-3">
                                <span className="absolute">
                                    <svg className="w-7 h-7 mx-3 text-gray-900 bg-gray-400 py-1 rounded-md"
                                         aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                         fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" stroke-width="2"
                                              d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                                    </svg>
                                </span>
                                <input type="text" placeholder="Name *"
                                       className="block w-full py-4 text-black font-serif text-lg placeholder-black bg-white border border-gray-200 rounded-md pl-11 pr-5 rtl:pr-11 rtl:pl-5  dark:border-gray-400 focus:border-gray-500 dark:focus:border-gray-500 focus:ring-gray-500 focus:outline-none focus:ring focus:ring-opacity-40"/>
                            </div>
                            <div className="flex justify-between">

                                <div className="relative flex  items-center text-black py-3 w-[48%]">
                                    <span className="absolute">
                                        <svg className="w-7 h-7 mx-3 text-gray-900 bg-gray-400 py-1 rounded-md"
                                             aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                                             height="24" fill="none" viewBox="0 0 24 24">
                                            <path stroke="currentColor" stroke-width="2"
                                                  d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                                        </svg>
                                    </span>
                                    <input type="text" placeholder="Name *"
                                           className="block w-full py-4 text-black font-serif text-lg placeholder-black bg-white border border-gray-200 rounded-md pl-11 pr-5 rtl:pr-11 rtl:pl-5  dark:border-gray-400 focus:border-gray-500 dark:focus:border-gray-500 focus:ring-gray-500 focus:outline-none focus:ring focus:ring-opacity-40"/>
                                </div>

                                <div className="relative flex  items-center text-black py-3 w-[48%]">
                                    <span className="absolute">
                                        <svg className="w-7 h-7 mx-3 text-gray-900 bg-gray-400 py-1 rounded-md"
                                             aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                                             height="24" fill="none" viewBox="0 0 24 24">
                                            <path stroke="currentColor" stroke-width="2"
                                                  d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                                        </svg>
                                    </span>
                                    <input type="text" placeholder="Name *"
                                           className="block w-full py-4 text-black font-serif text-lg placeholder-black bg-white border border-gray-200 rounded-md pl-11 pr-5 rtl:pr-11 rtl:pl-5  dark:border-gray-400 focus:border-gray-500 dark:focus:border-gray-500 focus:ring-gray-500 focus:outline-none focus:ring focus:ring-opacity-40"/>
                                </div>

                            </div>
                            <div className="py-3">
                                <textarea
                                    className="border-2 border-gray-400 placeholder:text-black placeholder:font-serif placeholder:text-lg placeholder:px-10 placeholder:py-10 "
                                    placeholder="Message *" name="" id="" cols="49" rows="7"></textarea>
                            </div>

                            <div className="bg-yellow-600 w-[40%] py-2 mx-auto text-center cursor-pointer rounded">
                                <button className="text-white font-serif font-bold  text-lg text-center">Se connecter</button>
                            </div>


                        </div>
                    </div>
                </div>
                <footer className="mt-28">
                    <Footer/>
                </footer>
            </div>
        </div>
    );
};

export default Contact;