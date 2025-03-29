import logo from "../../assets/mhjlogo.png";
import oncologo from "../../assets/oncoMHJ.png";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaPhone, FaLinkedin } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { motion as m } from "framer-motion";

const Footer = () => {
  const company = [
    // { title: "Home", link: "/" },
    { title: "About", link: "/about" },
    { title: "Oncology", link: "/oncology" },
    { title: "R & D", link: "/technology/research-development" },
    { title: "Quality Control", link: "/technology/quality-control" },
    { title: "Manufacturing Unit", link: "/technology/manufacture-unit" },
    { title: "Regulatory Services", link: "/regulatory-services" },
    { title: "Global Footprint", link: "/globalfootprint" },
  ];

  const quickLinks = [
    { title: "Injectables", link: "/products/general/injectables" },
    {
      title: "Oral Solid/ Tablets",
      link: "/products/general/oral-solids/tablets",
    },
    {
      title: "Oral Solid/ Capsules",
      link: "/products/general/oral-solids/capsules",
    },
    { title: "Oral Liquids", link: "/products/general/oral-liquids" },
    { title: "Infusions", link: "/products/general/infusions" },
    { title: "Nutraceutical", link: "/products/general/nutraceutical" },
    { title: "More Products", link: "/products" },
  ];

  const socialLinks = [
    // { icon: <FaFacebookF />, link: "#" },
    {
      icon: <FaSquareInstagram />,
      link: "https://www.instagram.com/mhjpharmaconcepts/",
    },
    {
      icon: <FaLinkedin />,
      link: "https://in.linkedin.com/company/mhj-pharmaconcepts",
    },
  ];

  const location = useLocation();
  const isOncology = location.pathname.includes("/oncology");

  return (
    <>
      <m.footer
        className={`relative z-10 bg-white  w-full  mx-auto bg-no-repeat bg-bottom md:border-2  md:rounded-full overflow-hidden md:shadow-[0_3px_10px_rgb(0,0,0,0.2)] ${
          isOncology ? "border-[#F38DA9]" : "border-[#800000]"
        }`}
        initial={{ y: 0, opacity: 0 }}
        whileInView={{ y: [10, 0], opacity: 1 }}
        transition={{ duration: 1, ease: [0.45, 0, 0.55, 1] }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <div className="">
          <div className="-mx-4 md:flex flex-wrap justify-around">
            <div className="md:flex md:w-1/2  md:justify-center pt-4 mx-8 sm:mx-0">
              <div className="md:w-1/2 ">
                <div className="mb-10 w-full ">
                  <Link to="/" className="mb-6 inline-block max-w-[160px]">
                    <img
                      src={`${isOncology ? oncologo : logo}`}
                      alt="MHJ LOGO"
                      loading="lazy"
                      className=" max-w-full"
                    />
                  </Link>
                  <p className="mb-7 text-sm text-body-color ">
                    MHJ Pharmaconcepts, today symbolizes a name Maintaining
                    Health Judiciously.
                  </p>
                  <p className="flex items-center text-sm font-medium">
                    <span className="mr-3 text-primary">
                      <FaPhone
                        className={`${
                          isOncology ? "text-[#F38DA9]" : "text-[#800000]"
                        }`}
                      />
                    </span>
                    <span>+011-430-16300</span>
                  </p>
                </div>
              </div>
              <div className="mx-4 flex mb-4 md:mb-0">
                <div className="w-full ">
                  <h4
                    className={`text-base font-semibold ${
                      isOncology ? "text-[#F38DA9]" : "text-red-700 "
                    }`}
                  >
                    Company
                  </h4>
                  <ul>
                    {company.map((item, index) => (
                      <li key={index}>
                        <Link
                          to={item.link}
                          className={`inline-block text-sm leading-loose text-body-color  hover:ml-2 transition-all ${
                            isOncology
                              ? "hover:text-[#F38DA9]"
                              : "hover:text-red-700"
                          }`}
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="md:w-1/2 px-4 block md:hidden">
                  <div className="mb-10 w-full">
                    <h4
                      className={`text-base font-semibold ${
                        isOncology ? "text-[#F38DA9]" : "text-red-700 "
                      }`}
                    >
                      Products
                    </h4>
                    <ul>
                      {quickLinks.map((item, index) => (
                        <li key={index}>
                          <Link
                            to={item.link}
                            className="inline-block text-gray-800 text-sm leading-loose text-body-color  hover:ml-2 hover:text-white transition-all"
                          >
                            {item.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`flex justify-center md:w-1/2 pt-4 ${
                isOncology ? "bg-[#F38DA9]" : "bg-[#800000]"
              }`}
            >
              <div className="md:w-1/2 px-4 hidden md:block">
                <div className="mb-10 w-full">
                  <h4 className=" text-base font-medium text-gray-50">
                    Products
                  </h4>
                  <ul>
                    {quickLinks.map((item, index) => (
                      <li key={index}>
                        <Link
                          to={item.link}
                          className="inline-block text-gray-100 text-sm leading-loose text-body-color  hover:ml-2 hover:text-white transition-all"
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="w-1/2 md:mr-4">
                <div className="mb-10 w-full">
                  <h4 className=" text-base font-medium text-gray-50">
                    Opening Hours
                  </h4>
                  <p className="mb-6 text-sm text-gray-100">
                    10:00 AM to 07:00 PM
                  </p>
                  <h4 className=" text-base font-medium text-gray-50">
                    Follow Us On
                  </h4>
                  <div className="mb-6 flex items-center">
                    {socialLinks.map((item, index) => (
                      <Link
                        key={index}
                        to={item.link}
                        aria-label={"Social media icons"}
                        target="blank"
                        className="mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-stroke hover:border-white-50 hover:bg-primary mt-4 hover:mt-2 transition-all text-gray-100 sm:mr-4 lg:mr-3 xl:mr-4 dark:border-dark-3 dark:hover:border-primary"
                      >
                        {item.icon}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </m.footer>

      <div className="w-full sm:h-8 flex relative">
        <span className="text-gray-800 w-full h-full flex items-center justify-center relative z-10 text-center">
          &copy; {new Date().getFullYear()} MHJ PHARMACONCEPTS PVT. LTD | All
          Rights Reserved | &nbsp;
          <Link to={"/terms&conditions"} className="hover:underline">
            Terms & Conditions
          </Link>
        </span>
      </div>
    </>
  );
};

export default Footer;
