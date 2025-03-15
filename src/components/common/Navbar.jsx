import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaTimes, FaBars, FaCaretDown } from "react-icons/fa";
import logo from "../../assets/mhjlogo.png";
import PrimaryButton from "./PrimaryButton";
import { AnimatePresence, motion as m } from "framer-motion";
import GoogleTranslate from "./GoogleTranslate ";
import { Squash as Hamburger } from "hamburger-react";

function Navbar() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
    setTimeout(() => {
      const element = document.getElementById("contact");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setOpenDropdown(null);
  }, [location]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const closeMenu = () => {
    setIsOpen(false);
    setOpenDropdown(null);
  };

  const handleDropdownToggle = (label) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  return (
    <m.nav
      initial={{ y: -25 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed top-0 left-0 w-full bg-[#ffffff] shadow-md z-[999]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-40">
        <div className="flex justify-between items-center py-2">
          <div className="flex-shrink-0">
            <Link to="/">
              <img width={125} src={logo} alt="MHJ pharma" />
            </Link>
          </div>
          <div className="hidden md:block relative z-10">
            <m.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="ml-10 flex items-baseline space-x-4"
            >
              <NavLinks
                openDropdown={openDropdown}
                onDropdownToggle={handleDropdownToggle}
              />
            </m.div>
          </div>
          <div className="flex justify-center items-center">
            <div className="hidden md:block ">
              <PrimaryButton
                to="/contact"
                className="ml-4"
                onClick={handleClick}
              >
                Contact Us
              </PrimaryButton>
            </div>
            <GoogleTranslate />
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              {/* <span className="sr-only">Open main menu</span> */}
              <Hamburger toggled={isOpen} toggle={setIsOpen} />
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && windowWidth < 768 && (
          <m.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden pl-4 md:pl-0 absolute top-[4.5rem] z-10 w-full bg-white"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <NavLinks
                mobile
                onClick={closeMenu}
                // closeMenu={closeMenu}
                openDropdown={openDropdown}
                onDropdownToggle={handleDropdownToggle}
              />
              <div className="px-2 pt-4 pb-3 border-t border-gray-200">
                <PrimaryButton
                  to="/contact"
                  onClick={handleClick}
                  className="block w-full text-center"
                >
                  Contact Us
                </PrimaryButton>
              </div>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </m.nav>
  );
}

function NavLinks({ mobile, closeMenu, openDropdown, onDropdownToggle }) {
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
      {/* <NavItem to="/kids" label="Kids" mobile={mobile} closeMenu={closeMenu} /> */}

      <DropdownNavItem
        label="Products"
        mobile={mobile}
        closeMenu={closeMenu}
        isOpen={openDropdown === "Products"}
        onToggle={() => onDropdownToggle("Products")}
      >
        <NestedDropdown label="General" mobile={mobile}>
          <NavItem
            to="/products/general/injectables"
            label="Injectables"
            mobile={mobile}
            closeMenu={closeMenu}
          />
          <NestedDropdown label="Oral Solids" mobile={mobile}>
            <NavItem
              to="/products/general/oral-solids/tablets"
              label="Tablets"
              mobile={mobile}
              closeMenu={closeMenu}
            />
            <NavItem
              to="/products/general/oral-solids/capsules"
              label="Capsules"
              mobile={mobile}
              closeMenu={closeMenu}
            />
          </NestedDropdown>
          <NavItem
            to="/products/general/oral-liquids"
            label="Oral Liquids"
            mobile={mobile}
            closeMenu={closeMenu}
          />
          <NavItem
            to="/products/general/infusions"
            label="Infusions"
            mobile={mobile}
            closeMenu={closeMenu}
          />
          <NavItem
            to="/products/general/nutraceutical"
            label="Nutraceutical"
            mobile={mobile}
            closeMenu={closeMenu}
          />
        </NestedDropdown>
        <NestedDropdown label="Oncology" mobile={mobile}>
          <NavItem
            to="/products/oncology/injectables"
            label="Injectables"
            mobile={mobile}
            closeMenu={closeMenu}
          />
          <NestedDropdown label="Oral Solids" mobile={mobile}>
            <NavItem
              to="/oncology/oral-solid/tablets"
              label="Tablets"
              mobile={mobile}
              closeMenu={closeMenu}
            />
            <NavItem
              to="/oncology/oral-solid/capsules"
              label="Capsules"
              mobile={mobile}
              closeMenu={closeMenu}
            />
          </NestedDropdown>
        </NestedDropdown>
      </DropdownNavItem>
      <DropdownNavItem
        label="Technology"
        mobile={mobile}
        closeMenu={closeMenu}
        isOpen={openDropdown === "Technology"}
        onToggle={() => onDropdownToggle("Technology")}
      >
        <NavItem
          to="/technology/research-development"
          label="Research & Development"
          mobile={mobile}
          closeMenu={closeMenu}
        />
        <NavItem
          to="/technology/manufacture-unit"
          label="Manufacturing Unit"
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
      <DropdownNavItem
        label="Services"
        mobile={mobile}
        closeMenu={closeMenu}
        isOpen={openDropdown === "Services"}
        onToggle={() => onDropdownToggle("Services")}
      >
        <NavItem
          to="/regulatory-services"
          label="Regulatory Services"
          mobile={mobile}
          closeMenu={closeMenu}
        />
        <NavItem
          to="regulatory/pharmacovigilance-services"
          label="Pharmacovigilance"
          mobile={mobile}
          closeMenu={closeMenu}
        />
        <NavItem
          to="regulatory/artwork-services"
          label="Artwork Services"
          mobile={mobile}
          closeMenu={closeMenu}
        />
        <NavItem
          to="regulatory/clinical-services"
          label="Clinical Services"
          mobile={mobile}
          closeMenu={closeMenu}
        />
      </DropdownNavItem>
      <NavItem
        to="/globalfootprint"
        label="Global Footprint"
        mobile={mobile}
        closeMenu={closeMenu}
      />
    </>
  );
}

function NavItem({ to, label, mobile, closeMenu }) {
  const baseClasses =
    "text-gray-800 hover:text-red-900 px-3 py-2 rounded-md text-sm font-medium flex md:ml-[4px]";
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

function DropdownNavItem({
  label,
  children,
  mobile,
  closeMenu,
  isOpen,
  onToggle,
}) {
  return (
    <div className="relative">
      <button
        onClick={onToggle}
        className="text-gray-800 hover:text-red-900 px-3 py-2 rounded-md text-sm font-medium flex items-center"
      >
        {label}
        <FaCaretDown
          className={`ml-1 transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <m.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className={`${
              mobile ? "mt-2" : "absolute left-0 mt-2 w-48"
            } bg-white rounded-md shadow-lg py-1`}
          >
            {children}
          </m.div>
        )}
      </AnimatePresence>
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
        className="w-full text-left px-4 py-2 text-sm text-gray-700 font-semibold hover:text-red-900 flex items-center justify-between"
      >
        {label}
        <FaCaretDown
          className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <m.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className={`${
              mobile ? "ml-4" : "absolute left-full top-0 w-48"
            } bg-white rounded-md shadow-lg py-1`}
          >
            {children}
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Navbar;
