import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import logo from "../../assets/mhjlogo.svg";
import PrimaryButton from "./PrimaryButton";
import { FaBars } from "react-icons/fa";
// import { menuItems } from "../../utils/MenuItems";
import { FaCaretDown } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full fixed z-50 bg-white shadow-sm border-2 px-4">
      <nav className={`flex justify-between items-center p-2`}>
        <Link>
          <img src={logo} alt="MHJ pharma" width={115} />
        </Link>
        <div className="lg:hidden cursor-pointer" onClick={toggleMenu}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
        <ul
          className={`flex-col lg:flex-row gap-4 lg:flex ${
            isOpen ? "flex" : "hidden"
          }`}
        >
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li className="products group">
            <Link className="flex justify-center items-center">
              Products{" "}
              <FaCaretDown className=" transition-all group-hover:rotate-180" />
            </Link>
            <ul className="hidden subNav absolute bg-white">
              <li className=" p-2 export">
                <Link>Export</Link>
                <ul className="hidden absolute bg-white left-20 top-0 border">
                  <li className=" p-2 px-4">
                    <Link>Injections</Link>
                  </li>
                  <li className="p-2 px-4 text-nowrap oralSolids">
                    <Link>Oral Solids</Link>
                    <span className="hidden bg-white absolute left-[7.5rem] top-10 border p-4">
                      <li>
                        <Link>Tablets</Link>
                      </li>
                      <li>
                        <Link>Capsules</Link>
                      </li>
                    </span>
                  </li>
                  <li className=" p-2 px-4 text-nowrap">
                    <Link>Oral Liquids</Link>
                  </li>
                  <li className=" p-2 px-4">
                    <Link>Infusions</Link>
                  </li>
                  <li className=" p-2 px-4">
                    <Link>OTC</Link>
                  </li>
                </ul>
              </li>
              <li className=" p-2 domestic">
                <Link>Domestic</Link>
                <ul className="hidden  absolute bg-white left-20 top-10 border p-2">
                  <li className=" p-2">
                    <Link>Pediatrics</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="relative technology group">
            <Link className="flex justify-center items-center">
              Technology{" "}
              <FaCaretDown className=" transition-all group-hover:rotate-180" />
            </Link>
            <ul className=" absolute left-[4rem] top-6 RD bg-white hidden p-2">
              <li className="text-nowrap p-2">
                <Link>Research & Development</Link>
              </li>
              <li className="text-nowrap p-2">
                <Link>Quality Control</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to={"/globalPresence"}>Global Presence</Link>
          </li>
        </ul>
        <PrimaryButton
          to={"/#contact "}
          className={"ml-2 xl:ml-0 hidden xl:block"}
        >
          Contact Us
        </PrimaryButton>
      </nav>
    </header>
  );
};

export default Navbar;
