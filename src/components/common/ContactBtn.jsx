import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const ContactBtn = ({ children, className }) => {
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

  return (
    <button
      onClick={handleClick}
      className={`inline-block text-white uppercase px-4 py-2 xl:py-3 xl:px-6 transition-all duration-500 rounded-[30px] focus:outline-none primaryButton bg-transparent hover:shadow-lg text-nowrap text-sm hover:scale-[1.02] active:scale-[0.9] ${className}`}
    >
      {children}
    </button>
  );
};

export default ContactBtn;
