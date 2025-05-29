import React from "react";
import { Link } from "react-router-dom";
import { FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import ContactSection from "../components/home/Contact";
import contactBg from "../assets/contactBg.webp";

const Contact = () => {
  return (
    <div className="min-h-screen relative w-full mx-auto">
      <div
        className="bg-gradient-to-r from-gray-800 via-[#941616] to-gray-800 w-full h-[40vh] mt-20  bg-no-repeat bg-cover bg-top flex flex-col justify-center items-center"
        style={{
          backgroundImage: `url("${contactBg}")`,
        }}
      >
        <h3 className="text-6xl text-[#941616]  font-medium">Contact</h3>
      </div>
      <div className="w-11/12 mx-auto py-10">
        <h3 className="text-center text-4xl">Get in Touch with us</h3>
        <p className="md:w-1/2 mx-auto text-center mt-4">
          Have questions or need assistance? We're here to help! Feel free to
          reach out to us for any inquiries, support, or feedback.
        </p>
        <div className="md:w-11/12  mx-auto mt-8 flex flex-col md:flex-row gap-8 justify-center">
          <div className="md:w-1/3 border border-gray-200 p-6 bg-[#F3F3F5]  text-gray-50  flex flex-col justify-center items-center gap-2 rounded-lg overflow-hidden relative shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
            <FaPhone className="text-3xl text-[#941616]" />
            <p className="text-2xl text-gray-900">Phone</p>
            <Link className="text-gray-700 text-sm">+011-430-18600</Link>
          </div>
          <div className="md:w-1/3 border p-6 bg-[#F3F3F5] text-gray-50  flex flex-col justify-center items-center gap-2 rounded-lg overflow-hidden relative shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
            <IoIosMail className="text-3xl text-[#941616]" />
            <p className="text-2xl text-gray-900">Mail</p>
            <Link className="text-gray-700 text-sm">info@mhjpharma.com</Link>
          </div>
          <div className="md:w-1/3 border p-6 bg-[#F3F3F5] text-gray-50  flex flex-col justify-center items-center gap-2 rounded-lg overflow-hidden relative shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
            <FaLocationDot className="text-3xl text-[#941616]" />
            <p className="text-2xl text-gray-900">Head Office</p>
            <p className="text-gray-700 text-sm">
              DSM-030/031, DLF Corporate Towers,
            </p>
          </div>
        </div>
      </div>
      <ContactSection />
    </div>
  );
};

export default Contact;
