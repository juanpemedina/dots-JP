import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import VEA_logo from "/VEA_logo.jpg";
import RC_logo from "/RC_logo.png";

// Main navigation bar component
const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the navigation bar
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white flex-wrap md:sticky top-0 z-20 mx-auto flex w-full items-center justify-between border-b border-gray-500 p-1 fixed-navbar">
      <div className="flex items-center">
        <img src={VEA_logo} alt="VEA Logo" className="h-20 w-20" />
        <img src={RC_logo} alt="RC Logo" className="h-16 w-16" />
      </div>
      <nav className="w-1/4 flex justify-end">
        <div className="hidden w-full md:flex justify-between pr-8">
          <NavLinks />
        </div>
        <div className="md:hidden pr-5">
          <button onClick={toggleNavbar}>{isOpen ? <X /> : <Menu />}</button>
        </div>
      </nav>
      <div
        className={`transform transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden w-full md:hidden`}
      >
        <div className="flex flex-col items-center">
          <NavLinks />
        </div>
      </div>
    </header>
  );
};

export default NavBar;
