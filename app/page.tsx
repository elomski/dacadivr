"use client"; // Assure l'exécution côté client

import { useRouter } from "next/navigation"; // Utilise `useRouter` pour la navigation
import { useEffect } from "react";
//import { routes } from "./routes"; // Importe les routes depuis le fichier séparé

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Redirection automatique après 3 secondes
    const timer = setTimeout(() => {
      router.push("pages/principale"); // Redirection vers la page principale
    }, 3000);

    // Nettoyer le timer si le composant est démonté
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex items-center justify-center h-screen bg-blue-500">
      <div className="text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Bienvenue sur SmartLand</h1>
        <p className="text-lg md:text-2xl">Chargement de la plateforme...</p>
      </div>
    </div>
  );
}
