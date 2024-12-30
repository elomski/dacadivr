"use client"; // Indispensable pour utiliser des hooks ou gérer des états

import React from "react";

const SketchfabEmbed = () => {
  return (
    <div
      style={{
        width: "100%", // Ajuste à la largeur du parent
        height: "550px", // Hauteur fixe ou ajustable
        position: "relative", // Pour la gestion responsive
      }}
    >
      <iframe
        title="Archery Targets"
        src="https://sketchfab.com/models/36c7ba6b06234f7d91ffc9255e2b3890/embed"
        style={{
          width: "100%", // Prend toute la largeur
          height: "100%", // Prend toute la hauteur
          border: "none", // Supprime la bordure
        }}
        allow="autoplay; fullscreen; xr-spatial-tracking"
      ></iframe>
    </div>
  );
};

export default SketchfabEmbed;


