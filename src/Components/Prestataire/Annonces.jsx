import { useEffect, useState } from 'react';
import Footer from "../Footer.jsx";
import { Link } from "react-router-dom";

import logo from '/src/assets//logo.png'
const Annonces = () => {
    localStorage.removeItem('title');
    localStorage.removeItem('description');
    localStorage.removeItem('location');
    localStorage.removeItem('sub_category_id');
    localStorage.removeItem('sous_category_id');
    localStorage.removeItem('price');
    localStorage.removeItem('image');
    localStorage.removeItem('category');

    const [annonces, setAnnonces] = useState([]);

    useEffect(() => {
        fetchAllAnnonces();
    }, []);

    const fetchAllAnnonces = async () => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                console.error('JWT token not found in local storage');
                return;
            }

            const response = await fetch(`http://127.0.0.1:8000/api/getMyAnnonces`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                }
            });

            if (response.ok) {
                const data = await response.json();

                // Check if data.annonces is an array before setting state
                if (Array.isArray(data.annonces)) {
                    setAnnonces(data.annonces);
                } else {
                    console.error('Expected an array from API response:', data);
                }
            } else {
                console.error('Failed to fetch annonces:', response.statusText);
            }
        } catch (error) {
            console.error('Error fetching annonces:', error);
        }
    };

    return (
        <div>
            <div>
                <header className="gi-header bg-[#fff] z-[14] max-[991px]:z-[16] relative">
                    <div className="gi-header-bottom p-[0] border-b-[1px] border-solid boredr-[#eee] max-[991px]:py-[15px] min-[992px]:block max-[575px]:pt-[15px] max-[575px]:border-[0] max-[575px]:pb-[0] shadow-md">
                        <div className="flex flex-wrap justify-between items-center mx-auto min-[1600px]:max-w-[1600px] min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px] relative">
                            <div className="w-full flex flex-wrap px-[12px] max-[575px]:p-[0]">
                                <div className="gi-flex flex flex-row justify-between w-full max-[575px]:p-[0] max-[575px]:flex-col">
                                    <div className="gi-header-logo flex items-center self-center max-[575px]:mb-[15px]">
                                        <a href="#" className="gi-header-btn gi-site-menu-icon mr-[20px] flex items-center min-[992px]:hidden max-[575px]:hidden">
                                            <i className="fi-rr-menu-burger text-[24px] leading-[17px] text-black"></i>
                                        </a>
                                        <Link to="/" className="header-logo text-left">
                                            <img src={logo} className="max-w-[144px] max-[1199px]:max-w-[120px] max-[991px]:max-w-[120px] max-[767px]:max-w-[100px] w-[110px] h-[85px]" />
                                        </Link>
                                    </div>
                                    {annonces.length >= 5 ? (
                                        <button className='py-3.5 px-8' disabled>Publier Annonce</button>
                                    ) : (
                                        <Link to="/AnnounceForm"
                                            className="gi-header-action self-center max-[575px]:w-full max-[575px]:py-[10px] max-[575px]:bg-[#4b5966] w-[400px]">
                                            <div
                                                className="text-white bg-yellow-600 py-3.5 px-8 rounded-md font-serif font-medium ">
                                                <div className="flex justify-center items-center gap-10">
                                                    <button className="">Publier votre annonce</button>
                                                    <svg className="w-5 h-5 dark:text-white" aria-hidden="true"
                                                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                                        viewBox="0 0 24 24">
                                                        <path stroke="currentColor" strokeLinecap="round" strokeWidth="2"
                                                            d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
                                                    </svg>

                                                </div>
                                            </div>
                                        </Link>
                                    )}

                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
            <div className="w-[60%] mx-auto">
                <ul className="flex gap-10 items-center text-center font-serif font-medium text-gray-500 text-md py-8">
                    <Link to="" className="hover:text-black duration-300">Ajouter un nouveau</Link>
                    <div>
                        <li className="text-black ">Mes annonces</li>
                        <div className="w-28 bg-yellow-600 h-[2px]"></div>
                    </div>
                    <Link to="/Favorites" className="hover:text-black duration-300">Favorites</Link>
                    <Link to="/Messages" className="hover:text-black duration-300">Messages</Link>
                    <Link to="" className="hover:text-black duration-300">Paramétres</Link>
                </ul>
            </div>
            <div className='mx-[13rem] max-w-[95%]'>
                {annonces.length > 0 ? (
                    <div className="flex flex-wrap gap-10 py-10">
                        {annonces.map((annonce) => (
                            <div key={annonce.id}>
                                <div className="card relative py-2">
                                    <div className="cursor-pointer  duration-700">
                                        <img className="w-[330px] rounded-xl h-[240px]" src="" alt="" />
                                    </div>
                                    <div className="bg-white rounded-xl shadow-lg w-[93%] mx-auto mt-[-20px] relative">
                                        <div className="px-8 py-4">
                                            <div className="flex gap-2">
                                                <h1 className="text-xl font-serif font-medium">{annonce.title}</h1>
                                            </div>
                                            <div className="py-2 flex gap-3">
                                                <div className="flex items-center gap-2">
                                                    <svg
                                                        className="w-5 h-5 bg-yellow-600 px-1 py-1 dark:text-white rounded-full"
                                                        aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                                                        height="24" fill="none" viewBox="0 0 24 24">
                                                        <path stroke="currentColor" strokeLinecap="round"
                                                            strokeLinejoin="round" strokeWidth="2"
                                                            d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                                                        <path stroke="currentColor" strokeLinecap="round"
                                                            strokeLinejoin="round" strokeWidth="2"
                                                            d="M17.8 13.938h-.011a7 7 0 1 0-11.464.144h-.016l.14.171c.1.12.2.251.3.371L12 21l5.13-6.248c.194-.209.374-.429.54-.659l.13-.155Z" />
                                                    </svg>
                                                    <p className="text-md font-serif font-medium text-gray-500 ">{annonce.location}</p>
                                                </div>
                                            </div>
                                            <div className="w-full h-[1px] bg-gray-500"></div>
                                            <div className="flex justify-between items-center">
                                                <div className=" py-4 flex justify-center items-center gap-2">
                                                    <div
                                                        className="border-gray-400 border px-1 py-1 rounded-full  hover:border-yellow-500 duration-500">
                                                        <svg
                                                            className="w-5 h-5 text-gray-900 hover:text-yellow-500 duration-300"
                                                            aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                                                            height="24" fill="none" viewBox="0 0 24 24">
                                                            <path stroke="currentColor" strokeWidth="2"
                                                                d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z" />
                                                            <path stroke="currentColor" strokeWidth="2"
                                                                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                                        </svg>
                                                    </div>
                                                    <div
                                                        className="border-gray-400 border px-1 py-1 rounded-full hover:text-yellow-500 hover:border-yellow-500">
                                                        <svg
                                                            className="w-5 h-5 text-gray-900 hover:text-yellow-500 duration-300"
                                                            aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                                                            height="24" fill="none" viewBox="0 0 24 24">
                                                            <path stroke="currentColor" strokeLinecap="round"
                                                                strokeLinejoin="round" strokeWidth="2"
                                                                d="m16 10 3-3m0 0-3-3m3 3H5v3m3 4-3 3m0 0 3 3m-3-3h14v-3" />
                                                        </svg>
                                                    </div>
                                                </div>
                                                <p className="text-gray-500 font-serif font-medium">{annonce.sub_category_id}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="py-16">
                        <div className="border-2 border-gray-400 rounded-lg ">
                            <div className="p-10 flex flex-col gap-8 justify-center items-center text-center">
                                <h1 className="text-black text-3xl font-serif font-medium">You do not have any ads yet.</h1>

                                <svg className="w-36 h-36 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 13h3.439a.991.991 0 0 1 .908.6 3.978 3.978 0 0 0 7.306 0 .99.99 0 0 1 .908-.6H20M4 13v6a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-6M4 13l2-9h12l2 9" />
                                </svg>

                                <div className="flex justify-center items-center gap-8 bg-black px-5 rounded-md cursor-pointer">
                                    <button className="text-white text-lg font-serif font-medium py-3 px-5">Publier votre annonce</button>
                                    <svg className="w-5 h-5 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

            </div>

            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default Annonces;