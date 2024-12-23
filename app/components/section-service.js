"use client"; // Assure que le rendu se fait côté client

import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
      ease: "easeInOut",
    },
  }),
};

const ServicesSection = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.2, // Déclenchement à 20% de la visibilité
    triggerOnce: false, // Animation déclenchée à chaque entrée dans la vue
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden"); // Réinitialise l'animation lorsque la section sort de la vue
    }
  }, [controls, inView]);

  return (
    <section ref={ref} className="bg-white py-40 px-6 md:px-16 lg:px-10">
      <motion.div
        initial="hidden"
        animate={controls}
        className="max-w-1xl mx-auto"
      >
        {/* Titre */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-10">
          Quels sont nos <span className="text-gray-800">services</span>?
        </h2>

        {/* Cartes des services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Card 1 */}
          <motion.div
            className="relative group h-64"
            variants={cardVariants}
            custom={0}
          >
            {/* Image */}
            <div className="relative rounded-lg overflow-hidden shadow-lg transform group-hover:scale-105 group-hover:-translate-y-2 transition duration-500 ease-in-out h-full">
              <Image
                src="/images/111F.jpg"
                alt="Prédictions des ventes de terrains"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                <p className="text-white text-lg font-semibold px-4 text-center">
                  Accédez à la plateforme pour effectuer des prédictions sur les
                  prix de vos terrains dans les années qui suivent.
                </p>
              </div>
            </div>
            {/* Titre de la carte */}
            <h3 className="text-center mt-4 text-lg font-bold text-gray-800">
              Prédictions des ventes de terrains
            </h3>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="relative group h-64"
            variants={cardVariants}
            custom={1}
          >
            {/* Image */}
            <div className="relative rounded-lg overflow-hidden shadow-lg transform group-hover:scale-105 group-hover:-translate-y-2 transition duration-500 ease-in-out h-full">
              <Image
                src="/images/AJ555.jpeg"
                alt="Location de chambres et maisons"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                <p className="text-white text-lg font-semibold px-4 text-center">
                  Accédez à la plateforme pour louer des chambres et des maisons
                  en toute sécurité avec des professionnels et des particuliers.
                </p>
              </div>
            </div>
            {/* Titre de la carte */}
            <h3 className="text-center mt-4 text-lg font-bold text-gray-800">
              Location de chambres et maisons
            </h3>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            className="relative group h-64"
            variants={cardVariants}
            custom={2}
          >
            {/* Image */}
            <div className="relative rounded-lg overflow-hidden shadow-lg transform group-hover:scale-105 group-hover:-translate-y-2 transition duration-500 ease-in-out h-full">
              <Image
                src="/images/images.jpg"
                alt="Ventes de terrains et maisons"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                <p className="text-white text-lg font-semibold px-4 text-center">
                  Rendez-vous sur la plateforme pour vos achats immobiliers
                  concernant les terrains et les maisons sans risques.
                </p>
              </div>
            </div>
            {/* Titre de la carte */}
            <h3 className="text-center mt-4 text-lg font-bold text-gray-800">
              Ventes de terrains et maisons
            </h3>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ServicesSection;
