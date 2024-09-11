import React from "react";

const CircularText = () => {
  return (
    <svg
      width="200"
      height="200"
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <path
          id="circlePath"
          d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
        />
      </defs>
      <text fontSize="18" fill="#333" textLength="460">
        <textPath href="#circlePath"></textPath>
      </text>
    </svg>
  );
};

export default CircularText;
