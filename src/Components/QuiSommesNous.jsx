import React from 'react';
import NavBar from "./NavBar.jsx";
import mosque from "../assets/mosque.jpg";
import backgroundQuiSommesNous from "../assets/QuiSommeNous1.jpg";
import QuiSommesNous2 from "../assets/QuiSommesNous2.jpg";
import QuiSommesNous3 from "../assets/QuiSommesNous3.jpg";
import QuiSommesNous4 from "../assets/QuiSommesNous4.jpg";
import register from "../assets/inscription.png";
import annonce from "../assets/annonces.png";
import cup from "../assets/cup.png";
import backgroundImage from "../assets/image3.jpg";
import Footer from "./Footer.jsx";
const QuiSommesNous = () => {
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
                    <h1 className="text-6xl text-white font-bold font-serif py-11">QUI SOMMES NOUS</h1>
                    <div
                        className="bg-gray-500 opacity-80 px-8 py-3 rounded-t-md mt-1 flex justify-center items-center gap-2 w-[25%]">
                        <p className="text-white font-bold font-serif text-md hover:text-yellow-600 cursor-pointer duration-500">Home</p>
                        <svg className="w-5 h-5 text-yellow-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                             width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M19 12H5m14 0-4 4m4-4-4-4"/>
                        </svg>
                        <p className="text-white font-bold font-serif text-md">Qui Sommes-nous ?</p>
                    </div>
                </div>
            </div>
            <div className="w-[59%] mx-auto py-14">

                <div className="flex justify-between gap-24 items-center">
                    <img className="w-[700px] h-[300px] rounded-md" src={mosque} alt=""/>
                    <div>
                        <h1 className="text-black text-4xl font-medium font-serif">HARMONASSABA</h1>
                        <div className="py-8">
                            <p className="text-lg font-serif font-medium text-gray-500">Une entreprise émergente à
                                l'avant-garde de l'innovation, a obtenu la certification émanant de l'Autorité pour le
                                Développement Digital (ADD), érigent ainsi son statut d'initiatrice de solutions web
                                révolutionnaires au sein de l'industrie événementielle.</p>
                            <p className="text-lg font-serif font-medium text-gray-500">Notre plateforme singulière se
                                distingue en simplifiant l'élaboration d'événements, facilitant la mise en relation
                                entre les clients et les prestataires de services. Cette ingéniosité libère nos clients
                                du fardeau chronophage lié à la comparaison laborieuse de devis et d'offres, leur
                                offrant ainsi la possibilité de façonner des expériences exceptionnelles.</p>
                        </div>
                        <div className="flex justify-between py-3 rounded-md items-center bg-yellow-600 px-4 w-[60%]">
                            <button className="text-white font-serif font-medium text-md">Explore les annonces</button>
                            <svg className="w-5 h-5 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                 width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                      stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4"/>
                            </svg>
                        </div>
                    </div>
                </div>


                <div className="flex justify-center  text-center gap-5 py-40">
                    <div className="flex flex-col text-center items-center w-[37%] h-[100%]">
                        <img className="h-24 w-24 bg-yellow-600 rounded-full px-2 py-2" src={register} alt=""/>
                        <h1 className="text-center text-2xl font-serif font-medium py-5">S'inscrire</h1>
                        <p className="text-gray-500 font-serif font-medium text-lg ">En vous inscrivant sur notre
                            plateforme, vous pouvez tout de suite profiter d'un tableau de bord rempli d'outils
                            pratiques pour mieux gérer vos clients. C'est vraiment utile pour vous simplifier la vie
                            !</p>
                    </div>
                    <div className="flex flex-col text-center items-center w-[36%] h-[100%]">
                        <img className="h-24 w-24 bg-yellow-600 rounded-full px-2 py-2" src={annonce} alt=""/>
                        <h1 className="text-center text-2xl font-serif font-medium py-5">Publier votre annonce</h1>
                        <p className="text-gray-500 font-serif font-medium text-lg ">Quand vous publiez votre
                            annonce avec des images sur notre site, vous avez de fortes chances de rencontrer de
                            nouveaux clients. C'est une belle opportunité pour élargir votre clientéle !</p>
                    </div>
                    <div className="flex flex-col text-center items-center w-[35%] h-[100%]">
                        <img className="h-24 w-24 bg-yellow-600 rounded-full px-2 py-2" src={cup} alt=""/>
                        <h1 className="text-center text-2xl font-serif font-medium py-5">Découvrir des nouveaux
                            clients</h1>
                        <p className="text-gray-500 font-serif font-medium text-lg ">Explorez et connectez vous avec
                            une clientéle désireuse d'organiser des événements exceptionnels !</p>
                    </div>
                </div>


                <div className="flex justify-between gap-24 items-center py-10">
                    <div className="py-8">
                        <p className="text-gray-500 font-serif font-medium text-lg ">Mounassabat.ma incarne la fusion
                            subtile entre technologie et créativité. Notre site web, non seulement amical, mais aussi
                            intuitif, s'avère accessible même pour les novices en matière de planification d'événements.
                            Par ailleurs, notre engagement envers l'excellence transparaît également dans le
                            développement d'un logiciel spécialisé dédié aux prestataires de services événementiels. Ce
                            dernier permet une gestion efficiente des stocks, offre une vision globale du calendrier, et
                            optimise les opérations de ces acteurs majeurs du secteur.</p>
                    </div>
                    <img className="w-[700px] h-[300px] rounded-md" src={QuiSommesNous2} alt=""/>
                </div>


                <div className="flex justify-between gap-24 items-center py-16">
                    <img className="w-[700px] h-[300px] rounded-md" src={QuiSommesNous3} alt=""/>
                    <div className="py-8">
                        <p className="text-gray-500 font-serif font-medium text-lg ">Quant à l'origine de notre projet,
                            celle-ci émane d'une constatation profonde lors du parcours doctoral de nombreux chercheurs.
                            Organisateurs de conférences, ils ont fréquemment éprouvé des difficultés à dénicher des
                            espaces de formation adaptés, des traiteurs à la hauteur, et des produits de qualité. C'est
                            dans le sillage de cette observation que germa l'idée novatrice de créer la première
                            plateforme marocaine qui numérise l'intégralité du processus événementiel.</p>
                    </div>
                </div>


                <div className="flex justify-between gap-24 items-center py-10">
                    <div className="py-8">
                        <p className="text-gray-500 font-serif font-medium text-lg ">Par ailleurs, HARMONASSABA va
                            au-delà de la simple planification d'événements. En collaborant avec nos clients actuels,
                            nous entreprenons une démarche pionnière dans la digitalisation de divers secteurs.
                            Actuellement, nous oeuvrons en partenariat avec des clients pour élaborer des stratégies
                            marketing en vue de numériser leurs projets et services sur les réseaux sociaux tels que
                            Google ADS, Instagram, Facebook, YouTube, touchant ainsi des domaines aussi variés que
                            l'agroalimentaire, l'éducation, et le secteur juridique.</p>
                    </div>
                    <img className="w-[700px] h-[300px] rounded-md" src={QuiSommesNous4} alt=""/>
                </div>
            </div>

            <div style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                height: '40vh'
            }}>
                <div className="flex flex-col justify-center items-center text-center w-[30%] mx-auto py-5 ">
                    <h1 className="text-black text-4xl font-serif font-medium py-10">S'inscrire pour recevoir les
                        derniéres mises à jour et nouvelles</h1>
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

export default QuiSommesNous;