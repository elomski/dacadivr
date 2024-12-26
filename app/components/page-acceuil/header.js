"use client"; // Force the client-side rendering

import { useState } from "react";
import Link from "next/link";
import { FiUser } from "react-icons/fi";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar h-20 z-50 sticky top-0 bg-background/50 w-full items-center p-4 flex justify-around gap-4 backdrop-blur-sm">
      {/* Logo */}
      <div className="flex items-center gap-4">
        <img
          alt="logo"
          loading="lazy"
          width="60"
          height="60"
          decoding="async"
          src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo4.67c438a9.png&amp;w=64&amp;q=75"
          style={{ color: "transparent" }}
        />
        <div className="text-2xl font-bold text-gray-800 hidden md:block">
          <Link href="/">SmartLand</Link>
        </div>
      </div>

      {/* Menu Desktop */}
      <nav aria-label="Main" className="relative z-10 max-w-max flex-1 justify-center hidden md:flex items-center gap-2">
        <ul className="group flex flex-1 list-none items-center justify-center space-x-1">
          <li>
            <Link href="/pages/principale" className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50">
              Accueil
            </Link>
          </li>
          <li>
            <Link href="#services" className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:text-accent-foreground">
              Services
            </Link>
          </li>
          <li>
            <Link href="#predictions" className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:text-accent-foreground">
              Prédictions
            </Link>
          </li>
          <li>
            <Link href="#contact" className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:text-accent-foreground">
              Contacter-nous
            </Link>
          </li>
        </ul>
      </nav>

      {/* Menu Mobile */}
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

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden bg-gray-50 text-gray-700 font-medium space-y-2 px-4 py-2">
          <li>
            <Link href="/" className="block hover:text-blue-600">
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
          </li>
          <li>
            <Link href="#contact" className="block hover:text-blue-600">
              Contacter-nous
            </Link>
          </li>
        </ul>
      )}

      {/* Icône Connexion */}
      <div className="flex items-center gap-2">
        <Link href="#sign up">
          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 bg-background">
            S'inscrire
          </button>
        </Link>
        <Link href="#login">
          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground h-10 px-4 py-2 bg-[#50c878] hover:bg-[#50c878]">
            Se connecter
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
