import React from "react";
import { Link } from "react-router-dom";
import VEA_logo from "/VEA_logo.png";
import RC_logo from "/RC_logo.png";
import { SocialIcon } from "react-social-icons";

const FooterContact: React.FC = () => {
  return (
    <div className="bg-orange-500 text-white p-10 flex flex-col md:flex-row justify-between">
      <div className="flex flex-col items-center md:items-start md:flex-1 mb-10 md:mb-0">
        <div className="flex justify-center md:justify-start items-center">
          {" "}
          <img src={VEA_logo} alt="Logo Vea" className=" h-28 w-28" />
          <img src={RC_logo} alt="Logo RC" className="mt-2 h-20 w-20" />
        </div>
        <h3 className="font-bold">Contáctanos</h3>
        <p>Llama: +52 2212 513 1991</p>
        <p>Email: mail@noreply.com</p>
        <div className="sm:justify-left flex mt-2 md:justify-center">
          <SocialIcon
            network="instagram"
            href="https://www.geeksforgeeks.org/how-to-center-an-image-using-tailwind-css/"
            bgColor="white"
            fgColor="rgb(249, 115, 22)"
            className="mr-3"
            style={{ height: 32, width: 32 }}
          />
          <SocialIcon
            network="facebook"
            href="https://www.geeksforgeeks.org/how-to-center-an-image-using-tailwind-css/"
            bgColor="white"
            fgColor="rgb(249, 115, 22)"
            style={{ height: 32, width: 32 }}
          />
        </div>
      </div>
      {/**
      <div className="mt-5 md:mt-8 sm:hidden unhidden">
        <h3 className="font-bold">Menú</h3>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/retiros">Retiros</Link>
          </li>
          <li>
            <Link to="/contacto">Contacto</Link>
          </li>
        </ul>
      </div>
       **/}
    </div>
  );
};

export default FooterContact;
