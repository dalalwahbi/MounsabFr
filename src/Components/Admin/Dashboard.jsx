import React from 'react';
import logo from '/src/assets//logo.png'
import { Link } from 'react-router-dom';


const Dashboard = () => {
    return (
        <div className="flex">
                <aside className="flex flex-col w-[320px] h-screen overflow-x-hidden overflow-y-auto bg-yellow-700 -r rtl:-r-0 rtl:-l  dark:-gray-700">
                    <a href="#" className="mx-auto">
                        <img className="w-36 h-28" src={logo} alt="" />
                    </a>
                    <div className="w-full h-[1px]"></div>

                    <div className="flex flex-col items-center mt-6 -mx-2">
                        <img className="object-cover w-16 h-16 mx-2 rounded-full"  alt="avatar" />
                        <h4 className="mx-2 mt-2 font-bold text-black ">RAJI OTHMANE</h4>
                    </div>

                    <div className="w-full h-[1px] mt-5"></div>

                    <div className="flex flex-col justify-between flex-1 mt-6">
                        <nav>
                            <Link to="/Dashboard" id="dashboard" className="flex items-center px-4 py-2 text-yellow-600 rounded-lg cursor-pointer">
                                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4.5V19a1 1 0 0 0 1 1h15M7 14l4-4 4 4 5-5m0 0h-3.207M20 9v3.207" />
                                </svg>


                                <span className="mx-4 font-medium">Dashboard</span>
                            </Link>

                            <Link to="/Prestataires" className="flex items-center px-4 py-2 mt-5 text-gray-300 transition-colors duration-300 transform rounded-lg hover:text-yellow-600" href="Prestataires">
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>

                                <span className="mx-4 font-medium">Prestataires</span>
                            </Link>

                            <Link to="/Clients" className="flex items-center px-4 py-2 mt-5 text-gray-300 hover:text-yellow-600 transition-colors duration-300 transform rounded-lg " href="Annonces">
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>

                                <span className="mx-4 font-medium">Clients</span>
                            </Link>

                            <Link className="flex items-center px-4 py-2 mt-5 text-gray-300 hover:text-yellow-600 transition-colors duration-300 transform rounded-lg " href="Reclamations">
                                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 4H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1Zm0 0-4 4m5 0H4m1 0 4-4m1 4 4-4m-4 7v6l4-3-4-3Z" />
                                </svg>


                                <span className="mx-4 font-medium">Reclamations</span>
                            </Link>

                            <Link className="flex items-center px-4 py-2 mt-5 text-gray-300 hover:text-yellow-600 transition-colors duration-300 transform rounded-lg " href="Clients">
                                <svg className="w-5 h-5 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v5m-3 0h6M4 11h16M5 15h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1Z" />
                                </svg>


                                <span className="mx-4 font-medium">Annonces</span>
                            </Link>

                            

                            <a className="flex items-center px-4 py-2 mt-5 text-gray-300 hover:text-yellow-600 transition-colors duration-300 transform rounded-lg " href="login">
                                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12H4m12 0-4 4m4-4-4-4m3-4h2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-2" />
                                </svg>


                                <span className="mx-4 font-medium">Log out</span>
                            </a>
                        </nav>
                    </div>
                </aside>

                <section className="bg-gray-500 w-full px-5 py-2.5 overflow-y-hidden">
                    <div className="text-center flex gap-3 items-center">
                        <svg className="w-9 h-9 text-yellow-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4.5V19a1 1 0 0 0 1 1h15M7 14l4-4 4 4 5-5m0 0h-3.207M20 9v3.207" />
                        </svg>
                        <h1 className="text-3xl text-white font-bold font-mono mt-1">Dashboard</h1>
                    </div>
                    <div className="w-full h-[1px] mt-5"></div>
                    <div className="flex flex-wrap items-center mt-6 gap-5">
                        <div className="bg-gradient-to-t from-zinc-900  rounded-lg w-[24%]">
                            <div className="p-4">
                                <h1 className="text-white text-2xl font-medium">Prestataires</h1>
                                <div className="flex justify-between mt-2 px-2">
                                    <h1 id="user-count" className="text-white font-medium text-2xl"></h1>
                                    <svg className="w-8 h-8 text-yellow-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M16 19h4a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-2m-2.236-4a3 3 0 1 0 0-4M3 18v-1a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Zm8-10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gradient-to-t from-zinc-900 rounded-lg w-[24%]">
                            <div className="p-4">
                                <h1 className="text-white text-2xl font-medium">Clients</h1>
                                <div className="flex justify-between mt-2 px-2">
                                    <h1 id="cinema-count" className="text-white font-medium text-2xl"></h1>
                                    <svg className="w-8 h-8 text-yellow-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v5m-3 0h6M4 11h16M5 15h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1Z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gradient-to-t from-zinc-900  rounded-lg w-[24%]">
                            <div className="p-4">
                                <h1 className="text-white text-2xl font-medium">Annonces</h1>
                                <div className="flex justify-between mt-2 px-2">
                                    <h1 id="category-count" className="text-white font-medium text-2xl">0</h1>
                                    <svg className="w-8 h-8 text-yellow-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gradient-to-t from-zinc-900 rounded-lg w-[24%]">
                            <div className="p-4">
                                <h1 className="text-white text-2xl font-medium">Reclamations</h1>
                                <div className="flex justify-between mt-2 px-2">
                                    <h1 id="movie-count" className="text-white font-medium text-2xl">0</h1>
                                    <svg className="w-8 h-8 text-yellow-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 4H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1Zm0 0-4 4m5 0H4m1 0 4-4m1 4 4-4m-4 7v6l4-3-4-3Z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-5 py-6">

                        <div className="bg-gradient-to-t from-zinc-900  rounded-lg w-[49.3%]">
                            <div className="flex justify-between items-center p-5">
                                <div className="flex gap-3 items-center">
                                    <svg className="w-6 h-6 text-yellow-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M16 19h4a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-2m-2.236-4a3 3 0 1 0 0-4M3 18v-1a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Zm8-10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    </svg>
                                    <h1 className="text-xl text-white font-bold font-serif">Prestataires</h1>
                                </div>
                                
                            </div>
                            <div className="w-full h-[1px] "></div>

                            <div className="p-2">
                                <table className="w-full text-center">
                                    <thead className="text-gray-200 text-sm -b -gray-700">
                                        <th>ID</th>
                                        <th>FULL NAME</th>
                                        <th>EMAIL</th>
                                        <th className="py-3">ROLE</th>
                                    </thead>

                                    <tbody id="latest-Prestataires" className="text-md text-white">
                                        <tr>
                                            <td>$</td>
                                            <td>$</td>
                                            <td>$</td>
                                            <td className="py-3">$</td>
                                        </tr>
                                    </tbody>

                                </table>
                            </div>
                        </div>


                        <div className="bg-gradient-to-t from-zinc-900 rounded-lg w-[49.3%]">
                            <div className="flex justify-between items-center p-5">
                                <div className="flex gap-3 items-center">
                                    <svg className="w-5 h-6 text-yellow-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 4H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1Zm0 0-4 4m5 0H4m1 0 4-4m1 4 4-4m-4 7v6l4-3-4-3Z" />
                                    </svg>
                                    <h1 className="text-xl text-white font-bold font-serif">Reclamations</h1>
                                </div>
                                
                            </div>
                            <div className="w-full h-[1px] "></div>

                            <div className="p-2">
                                <table className="w-full text-center">
                                    <thead className="text-gray-200 text-sm -b -gray-700">
                                        <th>ID</th>
                                        <th>FULL NAME</th>
                                        <th>EMAIL</th>
                                        <th className="py-3">ROLE</th>
                                    </thead>

                                    <tbody id="latest-Reclamations" className="text-md text-white">
                                        <tr>
                                            <td>$</td>
                                            <td>$</td>
                                            <td>$</td>
                                            <td className="py-3">$</td>
                                        </tr>
                                    </tbody>


                                </table>
                            </div>
                        </div>




                        <div className="bg-gradient-to-t from-zinc-900  rounded-lg w-[49.3%]">
                            <div className="flex justify-between items-center p-5">
                                <div className="flex gap-3 items-center">
                                    <svg className="w-6 h-6 text-yellow-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v5m-3 0h6M4 11h16M5 15h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1Z" />
                                    </svg>
                                    <h1 className="text-xl text-white font-bold font-serif">Clients</h1>
                                </div>
                                
                            </div>
                            <div className="w-full h-[1px] "></div>

                            <div className="p-2">
                                <table className="w-full text-center">
                                    <thead className="text-gray-200 text-sm -b -gray-700">
                                        <th>ID</th>
                                        <th>NAME</th>
                                        <th>ADDRESS</th>
                                        <th className="py-3">CREATED</th>
                                    </thead>

                                    <tbody id="latest-Clients" className="text-md text-white">
                                        <tr>
                                            <td>$
                                            </td>
                                            <td>$</td>
                                            <td>$</td>
                                            <td className="py-3">$</td>
                                        </tr>
                                    </tbody>

                                </table>
                            </div>
                        </div>




                        <div className="bg-gradient-to-t from-zinc-900  rounded-lg w-[49.3%]">
                            <div className="flex justify-between items-center p-5">
                                <div className="flex gap-3 items-center">
                                    <svg className="w-6 h-6 text-yellow-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <h1 className="text-xl text-white font-bold font-serif">Annonces</h1>
                                </div>
                                
                            </div>
                            <div className="w-full h-[1px] "></div>

                            <div className="p-2">
                                <table className="w-full text-center">
                                    <thead className="text-gray-200 text-sm -b -gray-700">
                                        <th>ID</th>
                                        <th>NAME</th>
                                        <th className="py-3">CREATED</th>
                                    </thead>

                                    <tbody id="latest-A nnonces" className="text-md text-white">
                                        <tr>
                                            <td>$
                                            </td>
                                            <td>$</td>
                                            <td>$</td>
                                            <td className="py-3">$</td>
                                        </tr>
                                    </tbody>

                                </table>
                            </div>
                        </div>




                    </div>
                </section>
            </div>
        
    );
};

export default Dashboard;