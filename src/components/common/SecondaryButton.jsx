import { Link } from "react-router-dom";

const SecondaryButton = ({ to, children, className }) => {
  return (
    <button className={`secondaryButton text-gray-50 relative leading-7 z-10 hover:text-gray-50 overflow-hidden rounded-lg border border-gray-50 py-2 px-6  bg-transparent after:bg-gradient-to-r from-[#000000] to-[#000000] hover:shadow-md ${className}`}>
      <Link to={`${to}`}>
        {children}
      </Link>
    </button>
  );
};

export default SecondaryButton;
