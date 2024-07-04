import React, { useEffect, useState } from 'react';
import makeupimg5 from "../assets/makeupimg5.jpg";
import NavBar from "./NavBar.jsx";
import Footer from "/src/Components/Footer.jsx";
import { Link } from 'react-router-dom';

const AllAnnounces = () => {
    const handleFavoritsClick = async (annonceId) => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                console.error('JWT token not found in local storage');
                return;
            }
            
            const response = await fetch('http://127.0.0.1:8000/api/favoris', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify({ annonce_id: annonceId }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            console.log(data);

            const updatedAnnonces = annonces.map(annonce => {
                if (annonce.id === annonceId) {
                    return {
                        ...annonce,
                        isFavorited: !annonce.isFavorited 
                    };
                }
                return annonce;
            });

            setAnnonces(updatedAnnonces); 
        } catch (error) {
            console.error('Error:', error);
        }
    };


    const [annonces, setAnnonces] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        fetchAllAnnonces(currentPage);
    }, [currentPage]);

    const fetchAllAnnonces = async (page) => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                console.error('JWT token not found in local storage');
                return;
            }

            const response = await fetch(`http://127.0.0.1:8000/api/getAllAcceptedAnnonces?page=${page}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                }
            });

            if (response.ok) {
                const data = await response.json();
                setAnnonces(data.data);
                setTotalPages(data.last_page);
            } else {
                console.error('Failed to fetch annonces:', response.statusText);
            }
        } catch (error) {
            console.error('Error fetching annonces:', error);
        }
    }

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div>
            <nav>
                <NavBar/>
            </nav>     

            <div className="w-[70%] mx-auto py-20">
                    <Link to="/"  className="text-white bg-yellow-600 duration-300 hover:bg-yellow-500 px-8 py-3 rounded font-serif text-md">Retour</Link>

                    <div className="flex flex-wrap gap-10 py-10">
                    {annonces.map((annonce) => (
                    <div key={annonce.id}>
                        <div className="card relative py-2">
                            <div className="cursor-pointer  duration-700">
                                <img className="w-[330px] rounded-xl h-[240px]" src={makeupimg5} alt=""/>
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
                                                <path stroke="currentColor" stroke-linecap="round"
                                                      stroke-linejoin="round" stroke-width="2"
                                                      d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
                                                <path stroke="currentColor" stroke-linecap="round"
                                                      stroke-linejoin="round" stroke-width="2"
                                                      d="M17.8 13.938h-.011a7 7 0 1 0-11.464.144h-.016l.14.171c.1.12.2.251.3.371L12 21l5.13-6.248c.194-.209.374-.429.54-.659l.13-.155Z"/>
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
                                                    <path stroke="currentColor" stroke-width="2"
                                                          d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"/>
                                                    <path stroke="currentColor" stroke-width="2"
                                                          d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                                                </svg>
                                            </div>
                                            <div
                                                className="border-gray-400 border px-1 py-1 rounded-full hover:text-yellow-500 hover:border-yellow-500">
                                                <svg
                                                    className="w-5 h-5 text-gray-900 hover:text-yellow-500 duration-300"
                                                    aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                                                    height="24" fill="none" viewBox="0 0 24 24">
                                                    <path stroke="currentColor" stroke-linecap="round"
                                                          stroke-linejoin="round" stroke-width="2"
                                                          d="m16 10 3-3m0 0-3-3m3 3H5v3m3 4-3 3m0 0 3 3m-3-3h14v-3"/>
                                                </svg>
                                            </div>
                                            <div id="favorits"  onClick={() => handleFavoritsClick(annonce.id)} className="border-gray-400 border px-1 py-1 rounded-full hover:text-yellow-500 hover:border-yellow-500">
                                                <svg
                                                    className="w-5 h-5 text-gray-900 hover:text-yellow-500 duration-300"
                                                    aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                                                    height="24" fill="none" viewBox="0 0 24 24">
                                                    <path stroke="currentColor" stroke-linecap="round"
                                                          stroke-linejoin="round" stroke-width="2"
                                                          d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"/>
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

                    <div className="flex  gap-96 justify-between  mt-10">
                                    <button
                                        onClick={handlePrevPage}
                                        disabled={currentPage === 1}
                                        className={`px-8 py-3 mx-2 text-sm font-medium text-white bg-yellow-600 ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-yellow-700'}`}>
                                        Previous
                                    </button>
                                    <button
                                        onClick={handleNextPage}
                                        disabled={currentPage === totalPages}
                                        className={`px-8 py-3 mx-2 text-sm font-medium text-white bg-yellow-600 ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-yellow-700'}`}>
                                        Next
                                    </button>
                                </div>
            </div>  


            <footer>
                <Footer/>
            </footer>  
        </div>
    );
};

export default AllAnnounces;