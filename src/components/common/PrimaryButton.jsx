import { Link } from "react-router-dom";

const PrimaryButton = ({ to, children, className, onClick }) => {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`inline-block text-white  uppercase  px-4 py-2 xl:py-3 xl:px-6 transition-all duration-500 rounded-[30px] focus:outline-none primaryButton bg-transparent hover:shadow-lg text-nowrap text-sm hover:scale-[1.02] active:scale-[0.9] ${className}`}
    >
      {children}
    </Link>
  );
};

export default PrimaryButton;
