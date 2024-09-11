import { Link } from "react-router-dom";

const SecondaryButton = ({ to, children, className }) => {
  return (
    <button
      className={`secondaryButton text-[#B81B15] relative leading-7 z-10 hover:text-gray-50 overflow-hidden rounded-lg border border-[#B81B15]  bg-transparent after:bg-gradient-to-r from-[#B81B15] to-[#B81B15] hover:shadow-md h-auto  py-2 ${className} `}
    >
      <Link to={`${to}`} className="px-6 min-h-[1rem] w-full">{children}</Link>
    </button>
  );
};

export default SecondaryButton;
