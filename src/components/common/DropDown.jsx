// import React from "react";
// import { menuItems } from "../../utils/MenuItems";
// import MenuItems from "./MenuItems";

// const DropDown = ({ submenu, dropdown, depthLevel }) => {
//   depthLevel = depthLevel + 1;
//   const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";
//   return (
//     <ul className={`dropdown ${dropdownClass} ${dropdown ? "show" : ""}`}>
//       {submenu.map((submenu, index) => (
//         <MenuItems items={submenu} key={index} depthLevel={depthLevel} />
//       ))}
//     </ul>
//   );
// };

// export default DropDown;

// Navbar

import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import logo from "../../assets/mhjlogo.svg";
import PrimaryButton from "./PrimaryButton";
import { FaBars } from "react-icons/fa";

// const links = [
//   { path: "/", label: "Home" },
//   { path: "/about", label: "About Us" },
//   { path: "/oncology", label: "Oncology" },
//   { path: "products/exports/injections", label: `Products` },
//   { path: "/technology/research-and-development", label: `Technology` },
//   { path: "/globalPresence", label: "Global Presence" },
// ];

// const technology = [
//   {
//     label: "Research & Development ",
//     path: "/technology/research-and-development",
//   },
//   { label: "Quality Control", path: "/technology/quality-control" },
// ];

// const exports = [
//   { label: "Injections" },
//   { label: "Oral Solids", subcategories: ["Tablets", "Capsules"] },
//   { label: "Oral Liquids" },
//   { label: "Infusions" },
//   { label: "OTC" },
// ];

// const domestic = [{ label: "Pediatrics" }];

// const Navbar = () => {
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [technologyDropdownOpen, setTechnologyDropdownOpen] = useState(false);

//   return (
//     <header className="w-full xl:px-20 px-4 p-1 xl:py-2 fixed z-[40] shadow-sm bg-white">
//       <div className="w-full xl:container mx-auto px-4 py-2 flex justify-between items-center">
//         <Link to="/" exact className="text-xl font-bold">
//           <img src={logo} alt="MJH Pharmaconcepts logo" width={85} />
//         </Link>
//         <nav className="stroke hidden xl:block">
//           <ul className="flex space-x-4 md:space-x-4  xl:space-x-8">
//             {links.map((link) => (
//               <li
//                 key={link.path}
//                 className="inline-block relative"
//                 onMouseEnter={() =>
//                   (link.label === "Products" && setDropdownOpen(true)) ||
//                   (link.label === "Technology" &&
//                     setTechnologyDropdownOpen(true))
//                 }
//                 onMouseLeave={() =>
//                   (link.label === "Products" && setDropdownOpen(false)) ||
//                   (link.label === "Technology" &&
//                     setTechnologyDropdownOpen(false))
//                 }
//               >
//                 <NavLink
//                   to={link.path}
//                   className={({ isActive }) =>
//                     `md:text-base xl:text-xl block relative navLink hover:text-[#911515] text-nowrap ${
//                       isActive && "text-[#911515]"
//                     }`
//                   }
//                 >
//                   {link.label}
//                 </NavLink>
//                 {link.label === "Products" && (
//                   <div
//                     className={`absolute left-0  w-48 bg-white rounded-md shadow-lg ${
//                       dropdownOpen ? "block" : "hidden"
//                     }`}
//                   >
//                     <ul>
//                       <li className="relative group">
//                         <NavLink
//                           to="/products/exports"
//                           className="block px-4 py-2 text-gray-800 hover:bg-red-100"
//                         >
//                           Exports
//                         </NavLink>
//                         <ul className="absolute left-full top-0 mt-2 w-48 bg-white rounded-md shadow-lg hidden group-hover:block">
//                           {exports.map((product) => (
//                             <li key={product.label} className="relative group">
//                               <NavLink
//                                 to={`/products/exports/${product.label
//                                   .toLowerCase()
//                                   .replace(/ /g, "-")}`}
//                                 className="block px-4 py-2 text-gray-800 hover:bg-red-100"
//                               >
//                                 {product.label}
//                               </NavLink>
//                               {product.subcategories && (
//                                 <ul className="absolute left-full top-0 mt-2 w-48 bg-white rounded-md shadow-lg hidden group-hover:block">
//                                   {product.subcategories.map((subcategory) => (
//                                     <li key={subcategory}>
//                                       <NavLink
//                                         to={`/products/exports/${product.label
//                                           .toLowerCase()
//                                           .replace(/ /g, "-")}/${subcategory
//                                           .toLowerCase()
//                                           .replace(/ /g, "-")}`}
//                                         className="block px-4 py-2 text-gray-800 hover:bg-red-100"
//                                       >
//                                         {subcategory}
//                                       </NavLink>
//                                     </li>
//                                   ))}
//                                 </ul>
//                               )}
//                             </li>
//                           ))}
//                         </ul>
//                       </li>
//                       <li className="relative group">
//                         <NavLink
//                           to="/products/domestic"
//                           className="block px-4 py-2 text-gray-800 hover:bg-red-100"
//                         >
//                           Domestic
//                         </NavLink>
//                         <ul className="absolute left-full top-0 mt-2 w-48 bg-white rounded-md shadow-lg hidden group-hover:block">
//                           {domestic.map((product) => (
//                             <li key={product.label}>
//                               <NavLink
//                                 to={`/products/domestic/${product.label
//                                   .toLowerCase()
//                                   .replace(/ /g, "-")}`}
//                                 className="block px-4 py-2 text-gray-800 hover:bg-red-100"
//                               >
//                                 {product.label}
//                               </NavLink>
//                             </li>
//                           ))}
//                         </ul>
//                       </li>
//                     </ul>
//                   </div>
//                 )}

//                 {link.label === "Technology" && (
//                   <div
//                     className={`absolute left-0 w-60 bg-white rounded-md shadow-lg ${
//                       technologyDropdownOpen ? "block" : "hidden"
//                     }`}
//                   >
//                     <ul>
//                       {technology.map((tech) => (
//                         <li key={tech.label}>
//                           <NavLink
//                             to={tech.path}
//                             className="block px-4 py-2 text-gray-800 hover:bg-red-100"
//                           >
//                             {tech.label}
//                           </NavLink>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 )}
//               </li>
//             ))}
//           </ul>
//         </nav>
//         <PrimaryButton
//           to={"/#contact "}
//           className={"ml-2 xl:ml-0 hidden xl:block"}
//         >
//           Contact Us
//         </PrimaryButton>
//         {/* Mobile */}
//         <div></div>
//         <FaBars className="text-xl cursor-pointer block xl:hidden" />
//       </div>
//     </header>
//   );
// };

// export default Navbar;

// import React from "react";
// import { menuItems } from "../../utils/MenuItems";
// import MenuItems from "./MenuItems";

// const Navbar = () => {
//   return (
//     <header className="w-full xl:px-20 px-4 p-1 xl:py-2 fixed z-[40] shadow-sm bg-white border-2">
//       <nav className="w-full xl:container mx-auto px-4 py-2 flex justify-between items-center border border-green-400">
//         <div>
//           <Link to="/" exact className="text-xl font-bold">
//             <img src={logo} alt="MJH Pharmaconcepts logo" width={115} />{" "}
//           </Link>
//         </div>
//         <ul className="">
//           {menuItems.map((menu, i) => {
//             const depthLevel = 0;
//             return <MenuItems items={menu} key={i} depthLevel={depthLevel} />;
//           })}
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;

// import React, { useState } from "react";

import { menuItems } from "../../utils/MenuItems";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [openSubMenu, setOpenSubMenu] = useState(null);

  const handleMenuClick = (index) => {
    setOpenMenu(openMenu === index ? null : index);
  };

  const handleSubMenuClick = (index) => {
    setOpenSubMenu(openSubMenu === index ? null : index);
  };

  return (
    <nav className="bg-gray-50  p-4 fixed z-20 w-full ">
      <div className="container mx-auto flex justify-between items-center border-2">
        <div className="text-lg font-bold">
          <Link to="/" exact className="text-xl font-bold">
            <img src={logo} alt="MJH Pharmaconcepts logo" width={85} />{" "}
          </Link>
        </div>
        <div className="hidden md:flex space-x-4">
          {menuItems.map((menuItem, index) => (
            <div key={index} className="relative">
              <button
                onClick={() => handleMenuClick(index)}
                className="hover:text-gray-400"
              >
                {menuItem.title}
              </button>
              {menuItem.submenu && openMenu === index && (
                <div className="absolute bg-gray-100 mt-2 w-48 rounded-lg shadow-lg">
                  {menuItem.submenu.map((subItem, subIndex) => (
                    <div key={subIndex} className="relative">
                      <button
                        onClick={() => handleSubMenuClick(subIndex)}
                        className="block px-4 py-2 hover:bg-gray-200 w-full text-left"
                      >
                        {subItem.title}
                      </button>
                      {subItem.submenu && openSubMenu === subIndex && (
                        <div className="absolute left-full top-0 mt-2 w-48 bg-gray-100 rounded-lg shadow-lg">
                          {subItem.submenu.map((subSubItem, subSubIndex) => (
                            <button
                              key={subSubIndex}
                              className="block px-4 py-2 hover:bg-gray-200 w-full text-left"
                            >
                              {subSubItem.title}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <PrimaryButton
          to={"/#contact "}
          className={"ml-2 xl:ml-0 hidden xl:block"}
        >
          Contact Us
        </PrimaryButton>
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setOpenMenu(openMenu === "mobile" ? null : "mobile")}
            className="text-black focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {openMenu === "mobile" && (
        <div className="md:hidden">
          {menuItems.map((menuItem, index) => (
            <div key={index} className="relative">
              <button
                onClick={() => handleMenuClick(index)}
                className="block px-4 py-2 hover:bg-gray-200 w-full text-left"
              >
                {menuItem.title}
              </button>
              {menuItem.submenu && openMenu === index && (
                <div className="bg-gray-100 border-2 border-red-500">
                  {menuItem.submenu.map((subItem, subIndex) => (
                    <div
                      key={subIndex}
                      className="relative border-2 border-red-500"
                    >
                      <button
                        onClick={() => handleSubMenuClick(subIndex)}
                        className="block px-4 py-2 hover:bg-gray-200 w-full text-left border-2 border-red-500"
                      >
                        {subItem.title}
                      </button>
                      {subItem.submenu && openSubMenu === subIndex && (
                        <div className="bg-gray-100 pl-4 ">
                          {subItem.submenu.map((subSubItem, subSubIndex) => (
                            <button
                              key={subSubIndex}
                              className="block px-4 py-2 hover:bg-gray-200 w-full text-left"
                            >
                              {subSubItem.title}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
