import React, { useEffect, useRef } from "react";

const GoogleTranslate = () => {
  const isScriptAdded = useRef(false);

  useEffect(() => {
    if (!isScriptAdded.current) {
      const script = document.createElement("script");
      script.src =
        "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
      isScriptAdded.current = true;
    }

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,ru,es,fr",
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        "google_translate_element"
      );
    };
  }, []);


  return (
    <div className="ml-6 w-[50px] overflow-hidden relative">
      <span className="absolute top-[50%] translate-y-[-50%] left-0 bg-white z-10  pointer-events-none">
        English
      </span>
      <div id="google_translate_element" className="inline-block w-36 h-auto text-black googleDropdown"></div>
    </div>
  );
};

export default GoogleTranslate;


// import React, { useEffect, useRef } from "react";

// const GoogleTranslate = () => {
//   const isScriptAdded = useRef(false);

//   useEffect(() => {
//     if (!isScriptAdded.current) {
//       const script = document.createElement("script");
//       script.src =
//         "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
//       script.async = true;
//       document.body.appendChild(script);
//       isScriptAdded.current = true;
//     }

//     window.googleTranslateElementInit = () => {
//       new window.google.translate.TranslateElement(
//         {
//           pageLanguage: "en",
//           includedLanguages: "en,ru,es,fr",
//           layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
//         },
//         "google_translate_element"
//       );
//     };
//   }, []);

//   return (
//     <div className="ml-6 w-[50px] overflow-hidden relative">
//       <span className="absolute top-[50%] translate-y-[-50%] left-0 bg-white z-10 pointer-events-none">
//         English
//       </span>
//       <div id="google_translate_element" className="inline-block w-36 h-auto text-black googleDropdown"></div>
//       <style jsx>{`
//         .goog-te-combo {
//           background-color: #1e3a8a !important; /* Blue background */
//           color: #ffffff !important; /* White text */
//           border-radius: 0.375rem !important; /* Rounded border */
//           border: 1px solid #ffffff !important; /* Optional: White border */
//           padding: 0.5rem !important;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default GoogleTranslate;





// import React, { useState } from 'react';
// import Flag from 'react-world-flags'; // For flag icons, or use your own flag images

// const languages = [
//   { code: 'en', name: 'English', flag: 'US' },
//   { code: 'es', name: 'Spanish', flag: 'ES' },
//   { code: 'fr', name: 'French', flag: 'FR' },
//   { code: 'de', name: 'German', flag: 'DE' },
//   // Add more languages with their respective flag codes
// ];

// export default function GoogleTranslate() {
//   const [selectedLanguage, setSelectedLanguage] = useState(languages[0]); // Default to the first language
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   // Function to handle language selection
//   const handleLanguageSelect = (language) => {
//     setSelectedLanguage(language);
//     setDropdownOpen(false);

//     // Update Google Translate dropdown
//     const googleTranslateDropdown = document.querySelector('.goog-te-combo');
//     if (googleTranslateDropdown) {
//       googleTranslateDropdown.value = language.code;
//       googleTranslateDropdown.dispatchEvent(new Event('change'));
//     } else {
//       console.error('Google Translate dropdown not found');
//     }
//   };

//   return (
//     <div className="oogleTranslate">


//       <div className="dropdown" style={{ position: 'relative', width: '200px' }}>
//         <div
//           onClick={() => setDropdownOpen(!dropdownOpen)}
//           style={{
//             padding: '10px',
//             border: '1px solid #ccc',
//             cursor: 'pointer',
//             display: 'flex',
//             alignItems: 'center',
//           }}
//         >
//           <Flag code={selectedLanguage.flag} style={{ width: '20px', marginRight: '8px' }} />
//           {selectedLanguage.name}
//         </div>

//         {dropdownOpen && (
//           <ul
//             style={{
//               position: 'absolute',
//               top: '100%',
//               left: 0,
//               width: '100%',
//               border: '1px solid #ccc',
//               backgroundColor: 'white',
//               listStyle: 'none',
//               padding: '0',
//               margin: '0',
//               zIndex: 10,
//             }}
//           >
//             {languages.map((language) => (
//               <li
//                 key={language.code}
//                 onClick={() => handleLanguageSelect(language)}
//                 style={{
//                   padding: '10px',
//                   display: 'flex',
//                   alignItems: 'center',
//                   cursor: 'pointer',
//                   borderBottom: '1px solid #eee',
//                 }}
//               >
//                 <Flag code={language.flag} style={{ width: '20px', marginRight: '8px' }} />
//                 {language.name}
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>

//       {/* Hidden Google Translate widget, required for functionality */}
//       <div id="google_translate_element" style={{ display: 'none' }}></div>
//     </div>
//   );
// }
