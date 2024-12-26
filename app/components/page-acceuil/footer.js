"use client"; // Forcer le rendu client

import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0a74f0] p-8 pb-10">
      {/* Contenu principal du footer */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-around gap-8 max-w-7xl mt-8 w-[90%] mx-auto">
        
        {/* Logo */}
        <div className="flex justify-center md:justify-start">
          <img
            alt="logo image"
            loading="lazy"
            width="60"
            height="60"
            decoding="async"
            className="bg-white rounded-lg"
            src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo4.67c438a9.png&amp;w=64&amp;q=75"
            style={{ color: "transparent" }}
          />
        </div>

        {/* Section SmartLand */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-bold text-gray-100">SmartLand</h3>
          <ul className="mt-4 text-white space-y-2">
            <li>Lomé, TOGO</li>
            <li>Contacts et Emails</li>
          </ul>
        </div>

        {/* Informations Générales */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-bold text-gray-100">Informations Générales</h3>
          <ul className="mt-4 text-white space-y-2">
            <li>À propos de nous</li>
            <li>Notre mission</li>
          </ul>
        </div>

        {/* Informations Légales */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-bold text-gray-100">Informations Légales</h3>
          <ul className="mt-4 text-white space-y-2">
            <li><Link href="/politique-de-confidentialite">Politique de confidentialité</Link></li>
            <li><Link href="/termes-et-conditions-de-vente">Termes et Conditions de vente</Link></li>
          </ul>
        </div>
      </div>

      {/* Ligne de séparation */}
      <hr className="border-white w-[90%] mx-auto my-4" />

      {/* Avertissement */}
      <div className="flex flex-col items-center justify-center w-[90%] mx-auto mt-10">
        <p className="text-white mb-4">
          <strong>Avertissement:</strong>
          
        </p>
      </div>

      {/* Ligne de séparation */}
      <hr className="border-white w-[90%] mx-auto my-4" />

      {/* Bas du footer */}
      <div className="flex items-center justify-center">
        <p className="text-gray-200">© 2024 SmartLand. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
