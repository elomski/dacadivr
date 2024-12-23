"use client";

import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Redirection automatique après 3 secondes
    const timer = setTimeout(() => {
      router.push("/main"); // Remplace "/main" par la route de ta page principale
    }, 3000);

    // Nettoyage du timer pour éviter des erreurs si le composant est démonté
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
