"use client"; // Forcer le rendu côté client

import Header from "../../components/header";
import Footer from "../../components/footer";
import AcceuilMain from "../../components/acceuil_module";

export default function principale() {
  return (
    <>
      <Header />
      <main>
        <AcceuilMain />
      </main>
      <Footer />
    </>
  );
};

