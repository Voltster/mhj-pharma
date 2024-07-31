// import { Link } from "react-router-dom";

// const PrimaryButton = ({ to, children, className }) => {
//   return (
//     <Link
//       to={to}
//       className={`inline-block text-white  uppercase py-3 px-8 transition-all duration-500 rounded-[30px] focus:outline-none primaryButton bg-transparent  ${className}`}

//     >
//       {children}
//     </Link>
//   );
// };

// export default PrimaryButton;

import { Link } from "react-router-dom";

const PrimaryButton = ({ to, children, className }) => {
  return (
    <Link
      to={to}
      className={`inline-block text-white  uppercase py-3 px-8 transition-all duration-500 rounded-[30px] focus:outline-none primaryButton bg-transparent ${className}`}
    >
      {children}
    </Link>
  );
};

export default PrimaryButton;
