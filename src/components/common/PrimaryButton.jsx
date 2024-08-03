import { Link } from "react-router-dom";

const PrimaryButton = ({ to, children, className }) => {
  return (
    <Link
      to={to}
      className={`inline-block text-white  uppercase py-2 px-6 xl:py-3 xl:px-8 transition-all duration-500 rounded-[30px] focus:outline-none primaryButton bg-transparent hover:shadow-lg text-nowrap text-base xl:text-xl ${className}`}
    >
      {children}
    </Link>
  );
};

export default PrimaryButton;
