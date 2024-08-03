import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import logo from "../../assets/mhjlogo.svg";
import PrimaryButton from "./PrimaryButton";
import { FaBars } from "react-icons/fa";

const links = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About Us" },
  { path: "/oncology", label: "Oncology" },
  { path: "products/exports/injections", label: `Products` },
  { path: "/technology/research-and-development", label: `Technology` },
  { path: "/globalPresence", label: "Global Presence" },
];

const technology = [
  {
    label: "Research & Development ",
    path: "/technology/research-and-development",
  },
  { label: "Quality Control", path: "/technology/quality-control" },
];

const exports = [
  { label: "Injections" },
  { label: "Oral Solids", subcategories: ["Tablets", "Capsules"] },
  { label: "Oral Liquids" },
  { label: "Infusions" },
  { label: "OTC" },
];

const domestic = [{ label: "Pediatrics" }];

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [technologyDropdownOpen, setTechnologyDropdownOpen] = useState(false);

  return (
    <header className="w-full xl:px-20 px-4 p-1 xl:py-2 fixed z-[40] shadow-sm bg-white">
      <div className="w-full xl:container mx-auto px-4 py-2 flex justify-between items-center">
        <Link to="/" exact className="text-xl font-bold">
          <img src={logo} alt="MJH Pharmaconcepts logo" width={85} />
        </Link>
        <nav className="stroke hidden xl:block">
          <ul className="flex space-x-4 md:space-x-4  xl:space-x-8">
            {links.map((link) => (
              <li
                key={link.path}
                className="inline-block relative"
                onMouseEnter={() =>
                  (link.label === "Products" && setDropdownOpen(true)) ||
                  (link.label === "Technology" &&
                    setTechnologyDropdownOpen(true))
                }
                onMouseLeave={() =>
                  (link.label === "Products" && setDropdownOpen(false)) ||
                  (link.label === "Technology" &&
                    setTechnologyDropdownOpen(false))
                }
              >
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `md:text-base xl:text-xl block relative navLink hover:text-[#911515] text-nowrap ${
                      isActive && "text-[#911515]"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
                {link.label === "Products" && (
                  <div
                    className={`absolute left-0  w-48 bg-white rounded-md shadow-lg ${
                      dropdownOpen ? "block" : "hidden"
                    }`}
                  >
                    <ul>
                      <li className="relative group">
                        <NavLink
                          to="/products/exports"
                          className="block px-4 py-2 text-gray-800 hover:bg-red-100"
                        >
                          Exports
                        </NavLink>
                        <ul className="absolute left-full top-0 mt-2 w-48 bg-white rounded-md shadow-lg hidden group-hover:block">
                          {exports.map((product) => (
                            <li key={product.label} className="relative group">
                              <NavLink
                                to={`/products/exports/${product.label
                                  .toLowerCase()
                                  .replace(/ /g, "-")}`}
                                className="block px-4 py-2 text-gray-800 hover:bg-red-100"
                              >
                                {product.label}
                              </NavLink>
                              {product.subcategories && (
                                <ul className="absolute left-full top-0 mt-2 w-48 bg-white rounded-md shadow-lg hidden group-hover:block">
                                  {product.subcategories.map((subcategory) => (
                                    <li key={subcategory}>
                                      <NavLink
                                        to={`/products/exports/${product.label
                                          .toLowerCase()
                                          .replace(/ /g, "-")}/${subcategory
                                          .toLowerCase()
                                          .replace(/ /g, "-")}`}
                                        className="block px-4 py-2 text-gray-800 hover:bg-red-100"
                                      >
                                        {subcategory}
                                      </NavLink>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </li>
                          ))}
                        </ul>
                      </li>
                      <li className="relative group">
                        <NavLink
                          to="/products/domestic"
                          className="block px-4 py-2 text-gray-800 hover:bg-red-100"
                        >
                          Domestic
                        </NavLink>
                        <ul className="absolute left-full top-0 mt-2 w-48 bg-white rounded-md shadow-lg hidden group-hover:block">
                          {domestic.map((product) => (
                            <li key={product.label}>
                              <NavLink
                                to={`/products/domestic/${product.label
                                  .toLowerCase()
                                  .replace(/ /g, "-")}`}
                                className="block px-4 py-2 text-gray-800 hover:bg-red-100"
                              >
                                {product.label}
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      </li>
                    </ul>
                  </div>
                )}

                {link.label === "Technology" && (
                  <div
                    className={`absolute left-0 w-60 bg-white rounded-md shadow-lg ${
                      technologyDropdownOpen ? "block" : "hidden"
                    }`}
                  >
                    <ul>
                      {technology.map((tech) => (
                        <li key={tech.label}>
                          <NavLink
                            to={tech.path}
                            className="block px-4 py-2 text-gray-800 hover:bg-red-100"
                          >
                            {tech.label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <PrimaryButton
          to={"/#contact "}
          className={"ml-2 xl:ml-0 hidden xl:block"}
        >
          Contact Us
        </PrimaryButton>
        {/* Mobile */}
        <div></div>
        <FaBars className="text-xl cursor-pointer block xl:hidden" />
      </div>
    </header>
  );
};

export default Navbar;
