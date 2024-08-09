// import React from "react";
// import { Link, NavLink } from "react-router-dom";
// import { useState } from "react";
// import logo from "../../assets/mhjlogo.svg";
// import PrimaryButton from "./PrimaryButton";
// import { FaBars } from "react-icons/fa";
// // import { menuItems } from "../../utils/MenuItems";
// import { FaCaretDown } from "react-icons/fa";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <header className="w-full fixed z-50 bg-white shadow-sm border-2 px-4">
//       <nav className={`flex justify-between items-center p-2`}>
//         <Link>
//           <img src={logo} alt="MHJ pharma" width={115} />
//         </Link>
//         <div className="lg:hidden cursor-pointer" onClick={toggleMenu}>
//           {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
//         </div>
//         <ul
//           className={`flex-col lg:flex-row gap-4 lg:flex ${
//             isOpen ? "flex" : "hidden"
//           }`}
//         >
//           <li>
//             <Link to={"/"}>Home</Link>
//           </li>
//           <li>
//             <Link to={"/about"}>About</Link>
//           </li>
//           <li className="products group">
//             <Link className="flex justify-center items-center">
//               Products{" "}
//               <FaCaretDown className=" transition-all group-hover:rotate-180" />
//             </Link>
//             <ul className="hidden subNav absolute bg-white">
//               <li className=" p-2 export ">
//                 <Link className="flex justify-center items-center">
//                   Export
//                   <FaCaretDown className=" transition-all " />
//                 </Link>
//                 <ul className="hidden absolute bg-white left-20 top-0 ">
//                   <li className=" p-2 px-4">
//                     <Link>Injections</Link>
//                   </li>
//                   <li className="p-2 px-4 text-nowrap oralSolids">
//                     <Link className="flex justify-center items-center">
//                       Oral Solids <FaCaretDown className=" transition-all " />
//                     </Link>
//                     <span className="hidden bg-white absolute left-[7.5rem] top-10  p-4">
//                       <li>
//                         <Link>Tablets</Link>
//                       </li>
//                       <li>
//                         <Link>Capsules</Link>
//                       </li>
//                     </span>
//                   </li>
//                   <li className=" p-2 px-4 text-nowrap">
//                     <Link>Oral Liquids</Link>
//                   </li>
//                   <li className=" p-2 px-4">
//                     <Link>Infusions</Link>
//                   </li>
//                   <li className=" p-2 px-4">
//                     <Link>OTC</Link>
//                   </li>
//                 </ul>
//               </li>
//               <li className=" p-2 domestic">
//                 <Link>Domestic</Link>
//                 <ul className="hidden  absolute bg-white left-20 top-10  p-2">
//                   <li className=" p-2">
//                     <Link>Pediatrics</Link>
//                   </li>
//                 </ul>
//               </li>
//             </ul>
//           </li>
//           <li className="relative technology group">
//             <Link className="flex justify-center items-center">
//               Technology{" "}
//               <FaCaretDown className="transition-all group-hover:rotate-180" />
//             </Link>
//             <ul className=" absolute left-[2rem] top-6 RD bg-white hidden p-2">
//               <li className="text-nowrap p-2">
//                 <Link>Research & Development</Link>
//               </li>
//               <li className="text-nowrap p-2">
//                 <Link>Quality Control</Link>
//               </li>
//             </ul>
//           </li>
//           <li>
//             <Link to={"/globalPresence"}>Global Presence</Link>
//           </li>
//         </ul>
//         <PrimaryButton
//           to={"/#contact "}
//           className={"ml-2 xl:ml-0 hidden xl:block"}
//         >
//           Contact Us
//         </PrimaryButton>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaTimes, FaBars, FaCaretDown } from "react-icons/fa";
import logo from "../../assets/mhjlogo.svg";
import PrimaryButton from "./PrimaryButton";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-40">
        <div className="flex justify-between items-center py-2">
          <div className="flex-shrink-0">
            <Link to="/">
              <img width={115} src={logo} alt="MHJ pharma" />
            </Link>
          </div>
          <div className="hidden md:block relative z-10 ">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLinks />
            </div>
          </div>
          <div className="hidden md:block">
            <PrimaryButton to="/#contact" className="ml-4">
              Contact Us
            </PrimaryButton>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && windowWidth < 768 && (
        <div className="md:hidden  pl-4 md:pl-0 absolute top-[4.5rem] z-10 w-full bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLinks mobile closeMenu={closeMenu} />
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="px-2">
              <PrimaryButton
                to="/#contact"
                className="w-full text-center"
                onClick={closeMenu}
              >
                Contact Us
              </PrimaryButton>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

function NavLinks({ mobile, closeMenu }) {
  return (
    <>
      <NavItem to="/" label="Home" mobile={mobile} closeMenu={closeMenu} />
      <NavItem
        to="/about"
        label="About"
        mobile={mobile}
        closeMenu={closeMenu}
      />
      <NavItem
        to="/oncology"
        label="Oncology"
        mobile={mobile}
        closeMenu={closeMenu}
      />
      <DropdownNavItem label="Products" mobile={mobile} closeMenu={closeMenu}>
        <NestedDropdown label="Exports" mobile={mobile}>
          <NavItem
            to="/products/exports/injections"
            label="Injections"
            mobile={mobile}
            closeMenu={closeMenu}
          />
          <NestedDropdown label="Oral Solids" mobile={mobile}>
            <NavItem
              to="/products/exports/oral-solids/tablets"
              label="Tablets"
              mobile={mobile}
              closeMenu={closeMenu}
            />
            <NavItem
              to="/products/exports/oral-solids/capsules"
              label="Capsules"
              mobile={mobile}
              closeMenu={closeMenu}
            />
          </NestedDropdown>
          <NavItem
            to="/products/exports/oral-liquids"
            label="Oral Liquids"
            mobile={mobile}
            closeMenu={closeMenu}
          />
          <NavItem
            to="/products/exports/infusions"
            label="Infusions"
            mobile={mobile}
            closeMenu={closeMenu}
          />
          <NavItem
            to="/products/exports/otc"
            label="OTC"
            mobile={mobile}
            closeMenu={closeMenu}
          />
        </NestedDropdown>
        <NestedDropdown label="Domestic" mobile={mobile}>
          <NavItem
            to="/products/domestic/pediatrics"
            label="Pediatrics"
            mobile={mobile}
            closeMenu={closeMenu}
          />
        </NestedDropdown>
      </DropdownNavItem>
      <DropdownNavItem label="Technology" mobile={mobile} closeMenu={closeMenu}>
        <NavItem
          to="/technology/research-development"
          label="Research & Development"
          mobile={mobile}
          closeMenu={closeMenu}
        />
        <NavItem
          to="/technology/quality-control"
          label="Quality Control"
          mobile={mobile}
          closeMenu={closeMenu}
        />
      </DropdownNavItem>
      <NavItem
        to="/globalPresence"
        label="Global Presence"
        mobile={mobile}
        closeMenu={closeMenu}
      />
    </>
  );
}

function NavItem({ to, label, mobile, closeMenu }) {
  const baseClasses =
    "text-gray-800 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex md:ml-[4px]";
  const mobileClasses = mobile ? "block" : "";

  return (
    <Link
      to={to}
      className={`${baseClasses} ${mobileClasses}`}
      onClick={closeMenu}
    >
      {label}
    </Link>
  );
}

function DropdownNavItem({ label, children, mobile, closeMenu }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="text-gray-800 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center"
      >
        {label}
        <FaCaretDown
          className={`ml-1 transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      {isOpen && (
        <div
          className={`${
            mobile ? "mt-2" : "absolute left-0 mt-2 w-48"
          } bg-white rounded-md shadow-lg py-1 `}
        >
          {children}
        </div>
      )}
    </div>
  );
}

function NestedDropdown({ label, children, mobile }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className={mobile ? "ml-4" : "relative group"}>
      <button
        onClick={toggleDropdown}
        className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center justify-between"
      >
        {label}
        <FaCaretDown
          className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      {isOpen && (
        <div
          className={`${
            mobile ? "ml-4" : "absolute left-full top-0 w-48"
          } bg-white rounded-md shadow-lg py-1`}
        >
          {children}
        </div>
      )}
    </div>
  );
}

export default Navbar;
