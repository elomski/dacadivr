"use client"; // Forcer le rendu client

import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"; 

const Footer = () => {
  return (
    <footer className="bg-[#E1EFFF] text-black text-sm pt-4 pb-1">
      {/* Contenu principal du footer */}
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Colonne 1 : SmartLand */}
        <div>
          <h3 className="font-semibold mb-2">SmartLand</h3>
          <ul className="space-y-2">
            <li>Lomé, TOGO</li>
            <li>Contacts et Emails</li>
          </ul>
        </div>

        {/* Colonne 2 : Informations générales */}
        <div>
          <h3 className="font-semibold mb-2">Informations Générales</h3>
          <ul className="space-y-2">
            <li>À propos de nous</li>
            <li>Notre mission</li>
          </ul>
        </div>

        {/* Colonne 3 : Informations légales */}
        <div>
          <h3 className="font-semibold mb-2">Informations Légales</h3>
          <ul className="space-y-2">
            <li>Mention légales</li>
            <li>Conditions d&rsquo;utilisation</li>
            <li>Politique de confidentialité</li>
          </ul>
        </div>

        {/* Colonne 4 : Réseaux sociaux */}
        <div>
          <h3 className="font-semibold mb-2">Nous-Suivre :</h3>
          <div className="flex space-x-4">
            <Link href="https://www.facebook.com" target="_blank">
              <FaFacebook className="text-2xl text-blue-700 hover:text-blue-500 transition duration-300" />
            </Link>
            <Link href="https://www.instagram.com" target="_blank">
              <FaInstagram className="text-2xl text-pink-600 hover:text-pink-400 transition duration-300" />
            </Link>
            <Link href="https://www.linkedin.com" target="_blank">
              <FaLinkedin className="text-2xl text-blue-800 hover:text-blue-600 transition duration-300" />
            </Link>
            </div>
        </div>
      </div>

      {/* Ligne de séparation */}
      <div className="border-t border-gray-300 mt-6"></div>

      {/* Bas du footer */}
      <div className="bg-[#4E6681] text-white mt-4">
        <div className="container mx-auto px-4 py-3 flex flex-col md:flex-row items-center justify-between">
          {/* Texte de Copyright */}
          <p className="text-center mb-2 md:mb-0">
            &copy; 2024 SmartLand. Tous droits réservés.
          </p>

          {/* Liens supplémentaires */}
          <div className="flex space-x-4">
            <Link href="#" className="hover:text-blue-400 transition duration-300">
              Mentions Légales
            </Link>
            <Link href="#" className="hover:text-blue-400 transition duration-300">
              Politique de Confidentialité
            </Link>
            <Link href="#" className="hover:text-blue-400 transition duration-300">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
