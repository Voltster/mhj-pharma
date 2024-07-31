import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import logo from "../../assets/mhjlogo.svg";
import PrimaryButton from "./PrimaryButton";

const links = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About Us" },
  { path: "/oncology", label: "Oncology" },
  { path: "/products", label: `Products` },
  { path: "/technology", label: `Technology` },
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
  { label: "Injections",},
  { label: "Oral Solids", subcategories: ["Tablets", "Capsules"] },
  { label: "Oral Liquids" },
  { label: "Infusions" },
  { label: "Foot and OTC" },
  { label: "Pediatric" },
];

const domestic = [{ label: "Pediatrics" }, { label: "General" }];

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [technologyDropdownOpen, setTechnologyDropdownOpen] = useState(false);

  return (
    <header className="w-full px-20 py-2 fixed z-[40] shadow-sm bg-white">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <Link to="/" exact className="text-xl font-bold">
          <img src={logo} alt="MJH Pharma logo" width={85} />
        </Link>
        <nav className="stroke">
          <ul className="flex space-x-4 md:space-x-8">
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
                    `text-xl block relative navLink hover:text-[#911515] ${
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
                          className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
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
                                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
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
                                        className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
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
                          className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
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
                                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
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
                            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
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
        <PrimaryButton to={"/#contact"}>Contact Us</PrimaryButton>
      </div>
    </header>
  );
};

export default Navbar;
