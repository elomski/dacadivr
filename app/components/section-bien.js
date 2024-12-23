"use client"; // Rendu côté client
import "../styles/section-bien.css"; 
import Image from "next/image";
import { FaBed, FaShower, FaExpandAlt } from "react-icons/fa";

const SectionBien = () => {
  const biens = [
    { id: 0, image: "/images/B1.jpg", address: "Avenue 331, Adakpame", details: ["4 Rooms", "3 Douches", "30x100m²"] },
    { id: 1, image: "/images/B2.jpg", address: "8 Avenue 340, Adakpame", details: ["10 Rooms", "8 Douches", "80x100m²"] },
    { id: 2, image: "/images/B2.jpg", address: "Avenue 151, Lomogan", details: ["6 Rooms", "4 Douches", "60x100m²"] },
    { id: 3, image: "/images/B1.jpg", address: "Avenue 150, Agoe", details: ["4 Rooms", "4 Douches", "40x100m²"] },
    { id: 4, image: "/images/B2.jpg", address: "Avenue 45, Adetikope", details: ["12 Rooms", "10 Douches", "55x200m²"] },
    { id: 5, image: "/images/B2.jpg", address: "Avenue 50, Lome 2", details: ["10 Rooms", "8 Douches", "90x100m²"] },
    { id: 6, image: "/images/B1.jpg", address: "Avenue 400, Golfe 2", details: ["8 Rooms", "2 Douches", "80x100m²"] },
    { id: 7, image: "/images/B1.jpg", address: "Avenue 340, Adakpame", details: ["5 Rooms", "3 Douches", "90x10m²"] },
  ];

  return (
    <section className="bg-white py-36 px-6 md:px-16 lg:px-10">
      <div className="max-w-1xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8">
          Découvrez nos <span className="text-gray-800">Offres!</span>
        </h2>

        {/* Animation de défilement */}
        <div className="relative overflow-hidden group">
          <div className="flex gap-6 animate-marquee group-hover:animate-pause">
            {biens.map((bien) => (
              <div
                key={bien.id}
                className="min-w-[300px] bg-white rounded-lg shadow-lg overflow-hidden group transition transform hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="relative h-48">
                  <Image
                    src={bien.image}
                    alt={bien.address}
                    layout="fill"
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <p className="text-gray-700 mb-4">{bien.address}</p>
                  <div className="flex flex-wrap gap-2 items-center">
                    <span className="px-3 py-1 text-sm bg-gray-200 rounded-lg flex items-center space-x-2 text-gray-700">
                      <FaBed className="text-purple-500" />
                      <span>{bien.details[0]}</span>
                    </span>
                    <span className="px-3 py-1 text-sm bg-gray-200 rounded-lg flex items-center space-x-2 text-gray-700">
                      <FaShower className="text-purple-500" />
                      <span>{bien.details[1]}</span>
                    </span>
                    <span className="px-3 py-1 text-sm bg-gray-200 rounded-lg flex items-center space-x-2 text-gray-700">
                      <FaExpandAlt className="text-purple-500" />
                      <span>{bien.details[2]}</span>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Effets de bordure pour le dégradé */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/12 bg-gradient-to-r from-white"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/12 bg-gradient-to-l from-white"></div>
        </div>
        <div className="flex justify-center mt-12">
          <button className="bg-blue-500 hover:bg-purple-400 text-white font-semibold py-3 px-6 rounded-lg text-lg shadow-md transition duration-300">
            Voir plus
          </button>
        </div>
      </div>
    </section>
  );
};

export default SectionBien;
