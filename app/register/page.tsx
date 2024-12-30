"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const Page = () => {
  const [firstname, setFirstname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleFirstnameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstname(e.target.value); // Met à jour l'état avec la nouvelle valeur de l'input
  };

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value); // Met à jour l'état avec la nouvelle valeur de l'input
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value); // Met à jour l'état avec la nouvelle valeur de l'input
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value); // Met à jour l'état avec la nouvelle valeur de l'input
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value); // Met à jour l'état avec la nouvelle valeur de l'input
  };
  const handleConfirmPasswordChange = ( e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value); // Met à jour l'état avec la nouvelle valeur de l'input
  };

  return (
    <div className="flex  w-screen  bg-gray-50">
      <div className='w-1/2 flex items-center justify-center mt-3 mb-3 '>

      <div className="flex flex-col  ">
        <Link href="/" className="flex items-center gap-2">
          <FontAwesomeIcon icon={faArrowLeft} className="text-black text-2xl" />
          <span>Retour</span>
        </Link>
      </div><br /><br />
      
        <div className="w-3/5 bg-white p-5 flex flex-col rounded-lg ">
        <br /><br />
          <h1 className='
          font-extrabold text-lg text-center w-full
          flex justify-center items-center 
            '>Créez un compte</h1><br /><br />
          <p className='flex justify-center text-center '>Renseignez les différents champs pour votre enregistrement</p>
          <form>
            <div className="flex flex-col">
              <label htmlFor="firstname">Prénom</label>
              <input
                type="text"
                placeholder="Saisissez votre prénom"
                id="firstname"
                name="firstname"
                value={firstname}
                onChange={handleFirstnameChange}
                className='border py-2 rounded'
              />
            </div>

            
            <br />

            <div className="flex flex-col">
              <label htmlFor="username">Nom</label>
              <input
                type="text"
                placeholder="Saisissez votre nom"
                id="username"
                name="username"
                value={username}
                onChange={handleUsernameChange}
                className='border py-2 rounded'
              />
            </div>

            
            <br />

            <div className="flex flex-col">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="example@gmail.com"
                id="email"
                name="email"
                value={email}
                onChange={handleEmailChange}
                className='border py-2 rounded'
              />
            </div>
            
            <br />

            <div className="flex flex-col">
              <label htmlFor="phone">Telephone</label>
              <input
                type="tel"
                placeholder="90000000"
                id="phone"
                name="phone"
                value={phone}
                onChange={handlePhoneChange}
                className='border py-2 rounded'
              />
            </div>

            
            <br />

            <div className="flex flex-col">
              <label htmlFor="password">Mot de passe</label>
              <input
                type="password"
                placeholder=""
                id="password"
                name="password"
                value={password}
                onChange={handlePasswordChange}
                className='border py-2 rounded'
              />
            </div>
            
            <br />

            <div className="flex flex-col">
              <label htmlFor="password">Confirmation de mot de passe</label>
              <input
                type="password"
                placeholder=""
                id="confirmPassword"
                name="confirmPassword"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                className='border py-2 rounded'
              />
            </div>

            <br /><br />
                
                <button type="submit" className='border bg-slate-800 text-white w-full py-2 mb-4'>Soumettre</button>
          </form>
        </div>
      </div>

      <div className="w-1/2">
      <Image
      className=""
      src="/Images/pexels-expect-best-79873-323780.jpg"
      width={500}
      height={500}
      alt="Picture of the author"
    />
      </div>
    </div>
  );
};

export default Page;