import ContactForm from "./ContactForm";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaFacebook, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div
      className="flex flex-col xl:flex-row justify-center items-center  xl:h-screen"
      id="#contact"
    >
      <div className="bg-[#941616] p-4 h-full xl:w-1/2 flex justify-center items-center">
        <div className="xl:w-[80%] mx-auto">
          <h2 className="text-4xl font-semibold mb-4 text-white">Contact Us</h2>
          <p className="text-gray-100 mt-4 font-light">
            Please fill out the form below to get in touch with us. Whether you
            have a question about our products, services, pricing, or anything
            else, our team is ready to answer all your queries.
          </p>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d875.202179102035!2d77.15817927804135!3d28.665445602364084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d038897063403%3A0xb2521ab27b90e4cc!2sMHJ%20PHARMACONCEPTS%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1722246084453!5m2!1sen!2sin"
            // width="450"
            // height="200"
            className="rounded-md w-full my-6"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="MHJ PHARMACONCEPTS Location"
          ></iframe>
          <ul className="text-gray-100 flex gap-2 flex-col ">
            <li className="flex  items-center gap-2">
              <FaLocationDot className="text-xl " />
              New Delhi, India
            </li>
            <li className="flex  items-center gap-2">
              <FaPhoneVolume className="text-xl cursor-pointer" />
              +91 12345 67890
            </li>
            <li className="flex  items-center gap-2">
              <IoIosMail className="text-xl cursor-pointer" />
              info@mhjpharma.com
            </li>
          </ul>
          <div className="flex justify-end mt-4">
            <ul className="flex text-white gap-2 text-2xl">
              <li>
                <Link to={"/"}>
                  <FaFacebook />
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <FaInstagramSquare />
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <FaLinkedin />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <ContactForm />
    </div>
  );
};

export default Contact;
