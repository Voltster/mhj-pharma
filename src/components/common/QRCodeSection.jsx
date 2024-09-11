import React, { useState } from "react";
import qr from "../../assets/qr.png";
import iconProduct from "../../assets/iconProduct.png";

const QRCodeSection = () => {
  const [showQRCode, setShowQRCode] = useState(false);

  return (
    <div className="w-full fixed left-0 bottom-10 z-20">
      {/* <button
        className="text-white px-6 py-2 rounded-full  flex flex-col items-center justify-center  "
        onClick={() => setShowQRCode(!showQRCode)}
      >
        <svg
          width="100"
          height="100"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <path
              id="circlePath"
              d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
            />
          </defs>
          <text fontSize="18" fill="#333" textLength="180">
            <textPath href="#circlePath">
              {showQRCode ? "Hide QR Code" : "Show QR Code"}
            </textPath>
          </text>
        </svg>

        <img
          src={iconProduct}
          alt=""
          className="w-16 h-16 bg-gray-100  rounded-full p-2 relative z-20"
        />
        <p className="bg-gray-100 text-center p-2 -mt-2 text-gray-700 rounded-3xl text-sm">
          {showQRCode ? "Hide QR Code" : "Download Products"}
        </p>
      </button> */}

      {/* {showQRCode && (
        <div className="mt-10 absolute bottom-16 left-4 z-10  p-4 bg-gray-100 rounded-lg">
          <img
            src={qr}
            alt="QR Code"
            className="md:w-64 md:h-64 rounded-md mx-auto"
          />
        </div>
      )} */}
      <div className="mt-10 absolute bottom-16 right-4 z-10  bg-gray-100 rounded-lg">
        <img
          src={qr}
          alt="QR Code"
          className="md:w-20 md:h-20 rounded-md mx-auto"
        />
      </div>
    </div>
  );
};

export default QRCodeSection;
