"use client"; // Rendu côté client

import Image from "next/image";
import SectionService from "./section-service";
import SectionBien from "./section-bien";
import placeholderImage from "@/public/Images/A8009.jpg"; // Exemple d'image


//import image4 from "@/public/images/B1.jpg"; // Exemple d'image pour la card 3


const AccueilMain = () => {

  return (
    <div>
        {/* Section Accueil */}
        <section className="bg-white py-20 px-6 md:px-16 lg:px-10">
            <div className="max-w-1xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                {/* Colonne de gauche : Texte */}
                <div>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                        Qu&rsquo;est ce que <span className="text-gray-800">SmartLand?</span>
                    </h2>
                    <p className="text-gray-600 italic text-lg md:text-xl leading-relaxed mb-8">
                    Chez SmartLand, nous redéfinissons les standards du marché immobilier. Notre plateforme vous offre la puissance 
                    d&rsquo;anticiper, d&rsquo;investir et de vendre en toute confiance. Grâce à nos outils innovants, 
                    préparez l&rsquo;avenir de vos transactions immobilières 
                    dès aujourd&rsquo;hui.
                    </p>
                    <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-lg text-lg shadow-md transition duration-300">
                        COMMENCER PAR PRÉDIRE!
                    </button>
                </div>

                {/* Colonne de droite : Image */}
                <div className="flex justify-center">
                <Image
                    src={placeholderImage} // Remplace par ton image
                    alt="Présentation de SmartLand"
                    width={700} // Largeur de l'image
                    height={1000} // Hauteur de l'image
                    className="rounded-lg shadow-lg"
                />
                </div>
            </div>
        </section>

        {/* Section Service */}
        <SectionService/>
        {/* Section les biens */}
        <SectionBien/>
        
    </div>
  );
};

export default AccueilMain;
