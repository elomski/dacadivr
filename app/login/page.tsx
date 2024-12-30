"use client";
import { useState } from "react";
import "./Login.css";
import dynamic from "next/dynamic";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const SketchfabEmbed = dynamic(
  () => import("@/app/components/frame/SketchfabEmbed"),
  {
    ssr: false,
  }
);

export default function Page() {
  const [selectedTab, setSelectedTab] = useState("phone"); // Onglet par défaut : téléphone

  return (
    <div className=" flex   w-full  bg-gray-50">
      
      <div className="w-[40%]  items-center justify-center flex-col">
      <div className="flex  mr-auto ml-auto w-[100] mb-4 border rounded-sm justify-center items-">
        <Link href="/pages/principale" className="flex items-center gap-2">
          <FontAwesomeIcon icon={faArrowLeft} className="text-black text-2xl" />
          <span>Retour</span>
        </Link>
      </div>
        <div
          style={{ margin: "auto", padding: "20px" }}
          className="w-3/5 items-center bg-white "
        >
          <br />
          <br />
          <br />
          <h1 className="text-center text-2xl font-bold">Connexion</h1>
          <br />
          <p className="text-center">Veuillez renseigner vos informations</p>
          <br />
          <br />

          {/* Tabs */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "20px",
              padding: " 5px 0px",
              borderRadius: "10px",
              background: "#f1f1f1",
              width: "210px ",
              margin: "0px auto",
            }}
          >
            <button
              onClick={() => setSelectedTab("email")}
              style={{
                padding: "10px 20px",
                marginRight: "5px",
                backgroundColor:
                  selectedTab === "email" ? "#ffffff" : "#f1f1f1",
                // border: "1px solid #ccc",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Email
            </button>
            <button
              onClick={() => setSelectedTab("phone")}
              style={{
                padding: "10px 20px",
                backgroundColor:
                  selectedTab === "phone" ? "#ffffff" : "#f1f1f1",
                borderRadius: "5px",
                // border: "1px solid #ccc",
                cursor: "pointer",
              }}
            >
              Téléphone
            </button>
          </div>

          <br />

          {/* Form */}
          <form className="mx-3">
            <br />
            {selectedTab === "email" && (
              <div>
                <label htmlFor="email">Email :</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Entrez votre email"
                  style={{
                    display: "block",
                    marginBottom: "10px",
                    width: "100%",
                    padding: "10px",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                  }}
                />
              </div>
            )}

            {selectedTab === "phone" && (
              <div>
                <label htmlFor="phone">Numéro de téléphone :</label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="Entrez votre numéro de téléphone"
                  style={{
                    display: "block",
                    marginBottom: "10px",
                    width: "100%",
                    padding: "10px",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                  }}
                />
              </div>
            )}

            <br />

            <label htmlFor="password">Mot de passe :</label>
            <input
              type="password"
              id="password"
              defaultValue=""
              placeholder="Entrez votre mot de passe"
              style={{
                display: "block",
                marginBottom: "20px",
                width: "100%",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
            />
            <br />
            <button
              type="submit"
              className="bg-slate-600 w-full"
              style={{
                color: "#fff",
                padding: "10px 20px",
                border: "none",
                cursor: "pointer",
                borderRadius: "5px",
              }}
            >
              Se connecter
            </button>
          </form>
        </div>
      </div>

      <div className="w-1/2 h-full ">
        <SketchfabEmbed />
      </div>
    </div>
  );
}

// Désactiver le SSR pour ce composant
