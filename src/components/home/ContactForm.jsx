import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import axios from "axios";
import { toast } from "react-toastify";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fName: "",
    lName: "",
    clientMail: "",
    number: "",
    text: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await axios.post(
        "https://contactapis.vercel.app/send-email",
        formData
      );
      if (response.status === 200) {
        toast.success("Inquiry send successfully!");
        e.target.reset();
        setFormData({
          fName: "",
          lName: "",
          clientMail: "",
          number: "",
          text: "",
        });
      }
    } catch (error) {
      toast.error("Failed to send Inquiry. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto mt-12 md:mt-0">
      <div className="max-w-xl mx-auto rounded-md">
        <form onSubmit={handleSubmit} className="flex-col gap-4">
          <div className="flex gap-4">
            <div className="w-full mb-6">
              <label
                htmlFor="fName"
                className="block mb-2 text-sm text-gray-900"
              >
                First Name
              </label>
              <input
                type="text"
                name="fName"
                id="fName"
                placeholder="First Name"
                value={formData.fName}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 placeholder-gray-300 border border-gray-400 rounded-md focus:outline-none focus:border-red-500"
              />
            </div>
            <div className="w-full mb-6">
              <label
                htmlFor="lName"
                className="block mb-2 text-sm text-gray-900"
              >
                Last Name
              </label>
              <input
                type="text"
                name="lName"
                id="lName"
                placeholder="Last Name"
                value={formData.lName}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 placeholder-gray-300 border border-gray-400 rounded-md focus:outline-none focus:border-red-500"
              />
            </div>
          </div>

          <div className="flex  justify-center gap-4">
            <div className="w-full mb-6">
              <label
                htmlFor="clientMail"
                className="block mb-2 text-sm text-gray-900"
              >
                Email Address
              </label>
              <input
                type="email"
                name="clientMail"
                id="clientMail"
                placeholder="you@company.com"
                value={formData.clientMail}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 placeholder-gray-300 border border-gray-400 rounded-md focus:outline-none focus:border-red-500"
              />
            </div>
            <div className="w-full mb-6">
              <label
                htmlFor="number"
                className="block mb-2 text-sm text-gray-900"
              >
                Phone Number
              </label>
              <input
                type="text"
                name="number"
                id="number"
                placeholder="+91 1234567890"
                value={formData.number}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 placeholder-gray-300 border border-gray-400 rounded-md focus:outline-none focus:border-red-500"
              />
            </div>
          </div>
          <div className="mb-6">
            <label htmlFor="text" className="block mb-2 text-sm text-gray-900">
              Your Message
            </label>
            <textarea
              rows="5"
              name="text"
              id="text"
              placeholder="Your Message"
              value={formData.text}
              onChange={handleChange}
              className="w-full px-3 py-2 placeholder-gray-300 border border-gray-400 rounded-md focus:outline-none focus:border-red-500"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-block text-white uppercase py-3 px-8 transition-all duration-500 rounded-[30px] focus:outline-none primaryButton bg-transparent hover:scale-[1.02] active:scale-[0.9] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span className="flex items-center gap-3 md:text-[1vw]">
              {isSubmitting ? "Submitting..." : "Submit"}
              {!isSubmitting && <FaArrowRight />}
            </span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
