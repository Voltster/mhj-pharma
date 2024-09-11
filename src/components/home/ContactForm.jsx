// import React, { useState } from "react";
// import { FaArrowRight } from "react-icons/fa";
// import { toast } from "react-toastify";
// const ContactForm = () => {
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     const formData = new FormData(e.target);
//     const formObject = Object.fromEntries(formData);
//     formObject.access_key = "510164a6-e6ec-4ff5-adfc-3616211fe426";
//     try {
//       const response = await fetch("https://api.web3forms.com/submit", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Accept: "application/json",
//         },
//         body: JSON.stringify(formObject),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         toast.success("Message sent successfully!");
//         e.target.reset();
//       } else {
//         throw new Error(data.message || "Something went wrong");
//       }
//     } catch (error) {
//       console.error("Error submitting form:", error);
//       toast.error(error.message || "Failed to send message. Please try again.");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="container mx-auto mt-12 md:mt-0">
//       <div className="max-w-xl mx-auto rounded-md">
//         <form onSubmit={handleSubmit} className="flex-col gap-4">
//           <input
//             type="hidden"
//             name="access_key"
//             value="510164a6-e6ec-4ff5-adfc-3616211fe426"
//           />
//           <input type="hidden" name="from_name" value="New Inquiry Received" />
//           <input type="hidden" name="subject" value="New Submission from MHJ" />
//           <input type="checkbox" name="botcheck" style={{ display: "none" }} />

//           <div className="w-full mb-6">
//             <label
//               htmlFor="first_name"
//               className="block mb-2 text-sm text-gray-900"
//             >
//               Full Name
//             </label>
//             <input
//               type="text"
//               name="first_name"
//               id="first_name"
//               placeholder="John Walker"
//               required
//               className="w-full px-3 py-2 placeholder-gray-300 border border-gray-400 rounded-md focus:outline-none focus:border-red-500"
//             />
//           </div>

//           <div className="w-full mb-6">
//             <label htmlFor="email" className="block mb-2 text-sm text-gray-900">
//               Email Address
//             </label>
//             <input
//               type="email"
//               name="email"
//               id="email"
//               placeholder="you@company.com"
//               required
//               className="w-full px-3 py-2 placeholder-gray-300 border border-gray-400 rounded-md focus:outline-none focus:border-red-500"
//             />
//           </div>

//           <div className="w-full mb-6">
//             <label htmlFor="phone" className="block mb-2 text-sm text-gray-900">
//               Phone Number
//             </label>
//             <input
//               type="text"
//               name="phone"
//               id="phone"
//               placeholder="+91 1234567890"
//               required
//               className="w-full px-3 py-2 placeholder-gray-300 border border-gray-400 rounded-md focus:outline-none focus:border-red-500"
//             />
//           </div>
//           <div className="mb-6">
//             <label
//               htmlFor="message"
//               className="block mb-2 text-sm text-gray-900"
//             >
//               Your Message
//             </label>
//             <textarea
//               rows="5"
//               name="message"
//               id="message"
//               placeholder="Your Message"
//               className="w-full px-3 py-2 placeholder-gray-300 border border-gray-400 rounded-md focus:outline-none focus:border-red-500"
//               required
//             ></textarea>
//           </div>

//           <button
//             type="submit"
//             disabled={isSubmitting}
//             className="inline-block text-white uppercase py-3 px-8 transition-all duration-500 rounded-[30px] focus:outline-none primaryButton bg-transparent hover:scale-[1.02] active:scale-[0.9] disabled:opacity-50 disabled:cursor-not-allowed"
//           >
//             <span className="flex items-center gap-3 md:text-[1vw]">
//               {isSubmitting ? "Submitting..." : "Submit"}
//               {!isSubmitting && <FaArrowRight />}
//             </span>
//           </button>
//           {/* <a
//             href="https://wa.me/919540243331?text=Thank you for submitting your contact details at MHJ Pharmaconcepts. We have received your inquiry and will get back to you soon."
//             target="_blank"
//             className="text-red-600"
//           >
//             Send Acknowledgment on WhatsApp
//           </a> */}
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ContactForm;

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
        "https://contact-api-delta.vercel.app/send-email",
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
                placeholder="John"
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
                placeholder="Walker"
                value={formData.lName}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 placeholder-gray-300 border border-gray-400 rounded-md focus:outline-none focus:border-red-500"
              />
            </div>
          </div>

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
