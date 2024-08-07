// import pulmonology from "../../assets/pulmonology.png";
// import Gastro from "../../assets/Gastro.png";
// import Otc from "../../assets/Otc.png";
// import PainKiller from "../../assets/PainKiller.png";
// import Otalaryngology from "../../assets/Otalaryngology.png";
// import Pediatrics from "../../assets/Pediatrics.png";
// import AntiInfectives from "../../assets/AntiInfectives.png";

// const cardsData = [
//   {
//     id: 1,
//     bgColor: "#F92316",
//     icon: (
//       <svg
//         fill="#ffffff"
//         className="h-10 w-10"
//         version="1.1"
//         id="Capa_1"
//         xmlns="http://www.w3.org/2000/svg"
//         xmlnsXlink="http://www.w3.org/1999/xlink"
//         viewBox="0 0 60 60"
//         xmlSpace="preserve"
//         stroke="#ffffff"
//       >
//         <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
//         <g
//           id="SVGRepo_tracerCarrier"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         ></g>
//         <g id="SVGRepo_iconCarrier">
//           {" "}
//           <g>
//             {" "}
//             <circle cx="44" cy="40" r="1"></circle>{" "}
//             <circle cx="46" cy="57" r="1"></circle>{" "}
//             <circle cx="21" cy="49" r="1"></circle>{" "}
//             <circle cx="37" cy="43" r="1"></circle>{" "}
//             <circle cx="52" cy="48" r="1"></circle>{" "}
//             <circle cx="15" cy="57" r="1"></circle>{" "}
//             <path d="M17.071,12.899C13.171,9,6.828,9.001,2.929,12.899C1.04,14.788,0,17.299,0,19.97c0,2.671,1.04,5.183,2.929,7.071 l15.556,15.556l14.142-14.142L17.071,12.899z M4.343,25.627C2.832,24.116,2,22.107,2,19.97c0-2.137,0.832-4.146,2.343-5.657 c1.56-1.56,3.608-2.339,5.657-2.339s4.097,0.78,5.657,2.339l14.143,14.143L18.485,39.77L4.343,25.627z"></path>{" "}
//             <path d="M57.071,3.929C55.182,2.04,52.671,1,50,1s-5.182,1.04-7.071,2.929L27.373,19.485l14.142,14.142l15.556-15.557 C58.96,16.182,60,13.671,60,11S58.96,5.818,57.071,3.929z M55.657,16.657L41.515,30.799L30.201,19.485L44.343,5.343 C45.854,3.832,47.863,3,50,3s4.146,0.832,5.657,2.343S58,8.863,58,11S57.168,15.146,55.657,16.657z"></path>{" "}
//             <path d="M40,36c0-2.206-1.794-4-4-4s-4,1.794-4,4s1.794,4,4,4S40,38.206,40,36z M34,36c0-1.103,0.897-2,2-2s2,0.897,2,2 s-0.897,2-2,2S34,37.103,34,36z"></path>{" "}
//             <path d="M29,40c-2.206,0-4,1.794-4,4s1.794,4,4,4s4-1.794,4-4S31.206,40,29,40z M29,46c-1.103,0-2-0.897-2-2s0.897-2,2-2 s2,0.897,2,2S30.103,46,29,46z"></path>{" "}
//             <path d="M39,46c-2.206,0-4,1.794-4,4s1.794,4,4,4s4-1.794,4-4S41.206,46,39,46z M39,52c-1.103,0-2-0.897-2-2s0.897-2,2-2 s2,0.897,2,2S40.103,52,39,52z"></path>{" "}
//             <path d="M29,51c-2.206,0-4,1.794-4,4s1.794,4,4,4s4-1.794,4-4S31.206,51,29,51z M29,57c-1.103,0-2-0.897-2-2s0.897-2,2-2 s2,0.897,2,2S30.103,57,29,57z"></path>{" "}
//           </g>{" "}
//         </g>
//       </svg>
//     ),
//     title: "Antibiotics",
//   },
//   {
//     id: 2,
//     bgColor: "#F97D16",
//     icon: <img src={pulmonology} className="invert" />,
//     title: "Pulmonology",
//   },
//   {
//     id: 3,
//     bgColor: "#F0C401",
//     icon: <img src={Gastro} className="invert" />,
//     title: "Gastro-Intestinal",
//   },
//   {
//     id: 4,
//     bgColor: "#20CD2A ",
//     icon: <img src={Otc} className="invert" />,
//     title: "OTC- Antacids",
//   },
//   {
//     id: 5,
//     bgColor: "#2096CD",
//     icon: <img src={PainKiller} className="invert w-8" />,
//     title: "Pain Killers",
//   },
//   {
//     id: 6,
//     bgColor: "#4970CD",
//     icon: <img src={Otalaryngology} className="invert w-8" />,
//     title: "Otalaryngology",
//   },
//   {
//     id: 7,
//     bgColor: "#2320aD",
//     icon: <img src={Pediatrics} className="invert w-8" />,
//     title: "Pediatrics",
//   },
//   {
//     id: 8,
//     bgColor: "#7920CD",
//     icon: <img src={AntiInfectives} className="invert w-8" />,
//     title: "Anti-Infectives",
//   },
// ];

// const cardComponents = cardsData.map((card) => {
//   const styles = {
//     backgroundColor: `${card.bgColor}`,
//     boxShadow: `0 5px 15px ${card.bgColor} `,
//   };

//   return (
//     <div
//       key={card.id}
//       className={`p-10 flex flex-col items-center text-center group md:lg:xl:border-r md:lg:xl:border-b hover:bg-gray-200  cursor-pointer transition-all`}
//     >
//       <span
//         className={`p-5  rounded-full  text-white shadow-lg transition-all shadow-[${card.bgColor}] `}
//         style={styles}
//       >
//         {card.icon}
//       </span>
//       <p className="text-xl font-medium text-gray-800 mt-3">{card.title}</p>
//     </div>
//   );
// });

// const Therapeutic = () => {
//   return (
//     <div className="py-[2vw]">
//       <h3 className="uppercase text-4xl mb-2 font-semibold text-center text-gray-900">
//         The Therapeutic Segments Covers
//       </h3>

//       <div className="px-3 md:lg:xl:px-40 py-20 bg-opacity-10">
//         <div className="grid grid-cols-1 lg:md:grid-cols-4 group md:bg-white shadow-xl shadow-neutral-100 md:border ">
//           {cardComponents}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Therapeutic;

// New

import icon1 from "../../assets/Customized.png";
import Tilt from "react-parallax-tilt";

const cardsData = [
  {
    id: 1,
    bgColor: "#F92316",
    icon: "https://img.freepik.com/free-photo/close-up-variety-colorful-painkillers-table_23-2148430057.jpg?t=st=1723034225~exp=1723037825~hmac=3b49f66e3dccb57925862dcfbf7ecd2a210004648ca3f8c06c4da5557313c93f&w=740",
    title: "Antibiotics",
  },
  {
    id: 2,
    bgColor: "#F97D16",
    icon: "https://img.freepik.com/premium-photo/respisratory-system_1258886-664.jpg?w=740",
    title: "Pulmonology",
  },
  {
    id: 3,
    bgColor: "#F0C401",
    icon: "https://img.freepik.com/premium-photo/human-intestine-acid-reflux-examination-gastrointestinal-tract-anatomy-acid-burn_981061-4786.jpg?w=740",
    title: "Gastro-Intestinal",
  },
  {
    id: 4,
    bgColor: "#20CD2A ",
    icon: "https://img.freepik.com/free-photo/high-angle-shot-person-holding-capsules-with-keyboard_181624-12026.jpg?t=st=1723035010~exp=1723038610~hmac=b11fd06caa3b53383820251ccf0e0255015181eeb58fb459b0ac1f268fc9d83f&w=740",
    title: "OTC- Antacids",
  },
  {
    id: 5,
    bgColor: "#2096CD",
    icon: "https://img.freepik.com/free-photo/medication-dark-environment_23-2151438525.jpg?t=st=1723035211~exp=1723038811~hmac=64d84a47ce3c6791ca6c70b909f044a276d5bd7b2a3936e2c9224abbda0f34a4&w=740",
    title: "Pain Killers",
  },
  {
    id: 6,
    bgColor: "#4970CD",
    icon: "https://img.freepik.com/premium-photo/human-ear-anatomy-image_669954-48199.jpg?w=740",
    title: "Otalaryngology",
  },
  {
    id: 7,
    bgColor: "#2320aD",
    icon: "https://img.freepik.com/premium-photo/3d-render-medical-with-virus-cells-bacteria-multiple-realistic-coronavirus-particles-floating_1252149-61831.jpg?w=826",
    title: "Pediatrics",
  },
  {
    id: 8,
    bgColor: "#7920CD",
    icon: "https://img.freepik.com/free-photo/doctor-from-future-concept_23-2151111160.jpg?t=st=1723036045~exp=1723039645~hmac=f6e415c5d8e3bb9535eafb2c16150bd7b7e87799556a609bfce36eab44e71a79&w=360",
    title: "Anti-Infectives",
  },
];

const cardComponents = cardsData.map((card) => {
  // const styles = {
  //   width: "100%",
  //   height: "400px",
  //   backgroundImage: "url(" + { icon1 } + ")",
  //   boxShadow: `0 5px 15px ${card.bgColor} `,
  // };
  return (
    <Tilt
      key={card.id}
      className={` flex flex-col items-center text-center group hover:bg-gray-200 cursor-pointer transition-all relative rounded-md overflow-hidden`}
      // style={styles}
    >
      <img
        src={card.icon}
        alt={card.icon}
        className="object-cover w-full h-full"
      />
      <p className="text-xl font-medium text-gray-100 mt-3 absolute bottom-0  py-2 w-full bg-gradient-to-b from-gray-500/0 via-black/50 via-40% to-gray-950">
        {card.title}
      </p>
    </Tilt>
  );
});

import React from "react";

const Therapeutic = () => {
  return (
    <div className="py-[2vw]">
      <h3 className="uppercase text-4xl mb-2 font-semibold text-center text-gray-900">
        The Therapeutic Segments Covers
      </h3>

      <div className="px-3 md:lg:xl:px-40 py-20 bg-opacity-10">
        <div className="grid grid-cols-1 lg:md:grid-cols-4 gap-4 group md:bg-white shadow-xl shadow-neutral-100 ">
          {cardComponents}
        </div>
      </div>
    </div>
  );
};

export default Therapeutic;
