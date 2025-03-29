import { Link, useNavigate } from "react-router-dom";

const SecondaryButton = ({ to, children, className }) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(to)}
      className={`secondaryButton relative leading-7 z-10 text-[#B81B15] hover:text-gray-50 overflow-hidden rounded-lg border border-[#B81B15]   bg-[#fff] after:bg-gradient-to-r from-[#B81B15] to-[#B81B15] hover:shadow-md h-auto  py-2 ${className} `}
    >
      <Link to={`${to}`} className="px-6 min-h-[1rem] w-full">
        {children}
      </Link>
    </button>
  );
};

export default SecondaryButton;
