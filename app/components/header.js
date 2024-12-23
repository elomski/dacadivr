"use client"; // Force le rendu client pour utiliser useState

import { useState } from "react";
import Link from "next/link";
import { FiUser } from "react-icons/fi";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#E1EFFF] shadow-md fixed w-full z-50">
      {/* Barre de navigation */}
      <nav className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">
          <Link href="/">SmartLand</Link>
        </div>

        {/* Menu Desktop */}
        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <li>
            <Link href="#accueil" className="hover:text-blue-600 active:text-blue-600">
              Accueil
            </Link>
          </li>
          <li>
            <Link href="#services" className="hover:text-blue-600">
              Services
            </Link>
          </li>
          <li>
            <Link href="#predictions" className="hover:text-blue-600">
              Prédictions
            </Link>
          </li>
          <li>
            <Link href="#contact" className="hover:text-blue-600">
              Contacter-nous
            </Link>
          </li>
        </ul>

        {/* Icône Connexion */}
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/login" className="text-gray-700 hover:text-blue-600 flex items-center">
            <FiUser className="text-2xl" />
            <span className="ml-2">Se connecter/S&apos;inscrire</span>
          </Link>
        </div>

        {/* Bouton Hamburger Mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-800 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            ></path>
          </svg>
        </button>
      </nav>

      {/* Menu Mobile */}
      {menuOpen && (
        <ul className="md:hidden bg-gray-50 text-gray-700 font-medium space-y-2 px-4 py-2">
          <li>
            <Link href="#accueil" className="block hover:text-blue-600">
              Accueil
            </Link>
          </li>
          <li>
            <Link href="#services" className="block hover:text-blue-600">
              Services
            </Link>
          </li>
          <li>
            <Link href="#predictions" className="block hover:text-blue-600">
              Prédictions
            </Link>
          <li>
          </li>
            <Link href="#contact" className="block hover:text-blue-600">
              Contacter-nous
            </Link>
          </li>
          <li>
            <Link href="/login" className="block hover:text-blue-600 flex items-center">
              <FiUser className="text-xl" />
              <span className="ml-2">Se connecter/S&apos;inscrire</span>
            </Link>
          </li>
        </ul>
      )}
    </header>
  );
};

export default Header;
