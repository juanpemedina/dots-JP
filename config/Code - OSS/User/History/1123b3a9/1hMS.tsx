import React from "react";
import { Link } from "react-router-dom"; // Make sure to install and set up react-router-dom if you haven't already
import VEA_logo from "/VEA_logo.png";
import RC_logo from "/RC_logo.png";
import { SocialIcon } from "react-social-icons";
//FIX FOOTER MAKE IT RESPONSIVE

const FooterContact: React.FC = () => {
  return (
    <div className="bg-orange-500 text-white p-10 flex flex-col md:flex-row justify-between">
      <div className="">
        <div className="flex space-x-0 justify-items-center md:justify-start">
          <img src={VEA_logo} alt="Logo Vea" className=" h-28 w-28" />
          <img src={RC_logo} alt="Logo RC" className="mt-5 h-20 w-20" />
        </div>
        <div className="">
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
      </div>
      <div className="flex justify-end items-end flex-col">
        <div>
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
        <div className="">
          <h3 className="font-bold">Retiros</h3>
          <ul>
            <li>
              <Link to="/retiros/1">Retiro 1</Link>
            </li>
            <li>
              <Link to="/retiros/2">Retiro 2</Link>
            </li>
            <li>
              <Link to="/retiros/3">Retiro 3</Link>
            </li>
            <li>
              <Link to="/retiros/4">Retiro 4</Link>
            </li>
            <li>
              <Link to="/retiros/5">Retiro 5</Link>
            </li>
            <li>
              <Link to="/retiros/6">Retiro 6</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FooterContact;
