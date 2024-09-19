// import React, { useState } from "react";
// import Flag from "react-world-flags"; // For flag icons, or use your own flag images

// const languages = [
//     { code: "en", name: "English", flag: "US" },
//     { code: "es", name: "Spanish", flag: "ES" },
//     { code: "fr", name: "French", flag: "FR" },
//     { code: "ru", name: "Russain", flag: "RU" },
//     // Add more languages with their respective flag codes
// ];

// const LanguageSwitcher = () => {
//     const [selectedLanguage, setSelectedLanguage] = useState(languages[0]); // Default to the first language
//     const [dropdownOpen, setDropdownOpen] = useState(false);

//     // Function to handle language selection
//     const handleLanguageSelect = (language) => {
//         setSelectedLanguage(language);
//         setDropdownOpen(false);

//         // Update Google Translate dropdown
//         const googleTranslateDropdown = document.querySelector(".goog-te-combo");
//         if (googleTranslateDropdown) {
//             googleTranslateDropdown.value = language.code;
//             googleTranslateDropdown.dispatchEvent(new Event("change"));
//         } else {
//             console.error("Google Translate dropdown not found");
//         }
//     };

//     return (
//         <div className="App">
//             <div
//                 className="dropdown"
//                 style={{ position: "relative", width: "120px" }}
//             >
//                 <div
//                     onClick={() => setDropdownOpen(!dropdownOpen)}
//                     style={{
//                         padding: "8px 4px",
//                         border: "0px solid #ccc",
//                         cursor: "pointer",
//                         display: "flex",
//                         alignItems: "center",
//                     }}
//                 >
//                     <Flag
//                         code={selectedLanguage.flag}
//                         style={{ width: "20px", marginRight: "8px" }}
//                     />
//                     {selectedLanguage.name}
//                 </div>

//                 {dropdownOpen && (
//                     <ul
//                         style={{
//                             position: "absolute",
//                             top: "100%",
//                             left: 0,
//                             width: "140px",
//                             border: "1px solid #ccc",
//                             backgroundColor: "white",
//                             listStyle: "none",
//                             padding: "0",
//                             margin: "0",
//                             zIndex: 10,
//                         }}
//                     >
//                         {languages.map((language) => (
//                             <li
//                                 key={language.code}
//                                 onClick={() => handleLanguageSelect(language)}
//                                 style={{
//                                     padding: "10px",
//                                     display: "flex",
//                                     alignItems: "center",
//                                     cursor: "pointer",
//                                     borderBottom: "1px solid #eee",
//                                 }}
//                             >
//                                 <Flag
//                                     code={language.flag}
//                                     style={{ width: "20px", marginRight: "8px" }}
//                                 />
//                                 {language.name}
//                             </li>
//                         ))}
//                     </ul>
//                 )}
//             </div>

//             {/* Hidden Google Translate widget, required for functionality */}
//             <div id="google_translate_element" style={{ display: "none" }}></div>
//         </div>
//     );
// };

// export default LanguageSwitcher;



import React, { useState, useEffect } from "react";
import Flag from "react-world-flags"; // For flag icons, or use your own flag images

const languages = [
    { code: "en", name: "English", flag: "US" },
    { code: "es", name: "Spanish", flag: "ES" },
    { code: "fr", name: "French", flag: "FR" },
    { code: "ru", name: "Russian", flag: "RU" },
    // Add more languages with their respective flag codes
];

const LanguageSwitcher = () => {
    const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [isGoogleTranslateLoaded, setIsGoogleTranslateLoaded] = useState(false);

    useEffect(() => {
        const checkTranslateDropdown = () => {
            const googleTranslateDropdown = document.querySelector(".goog-te-combo");
            if (googleTranslateDropdown) {
                setIsGoogleTranslateLoaded(true);
            } else {
                setTimeout(checkTranslateDropdown, 300); // Retry after 300ms
            }
        };

        checkTranslateDropdown();
    }, []);

    const handleLanguageSelect = (language) => {
        if (!isGoogleTranslateLoaded) {
            console.error("Google Translate dropdown not found yet");
            return;
        }

        setSelectedLanguage(language);
        setDropdownOpen(false);

        // Update Google Translate dropdown
        const googleTranslateDropdown = document.querySelector(".goog-te-combo");
        if (googleTranslateDropdown) {
            googleTranslateDropdown.value = language.code;
            googleTranslateDropdown.dispatchEvent(new Event("change"));
        } else {
            console.error("Google Translate dropdown not found");
        }
    };

    return (
        <div className="relative">
            {isGoogleTranslateLoaded ? (
                <>
                    <div
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        className="flex items-center cursor-pointer p-2 border rounded-md shadow-sm"
                    >
                        <Flag
                            code={selectedLanguage.flag}
                            className="w-6 h-4 mr-2"
                            alt={selectedLanguage.name}
                        />
                        <span>{selectedLanguage.name}</span>
                    </div>

                    {dropdownOpen && (
                        <ul className="absolute mt-2 bg-white border rounded-md shadow-lg z-10 w-full">
                            {languages.map((language) => (
                                <li
                                    key={language.code}
                                    onClick={() => handleLanguageSelect(language)}
                                    className="flex items-center p-2 hover:bg-gray-100 cursor-pointer"
                                >
                                    <Flag
                                        code={language.flag}
                                        className="w-6 h-4 mr-2"
                                        alt={language.name}
                                    />
                                    {language.name}
                                </li>
                            ))}
                        </ul>
                    )}
                </>
            ) : (
                <div className="p-2">Loading languages...</div>
            )}

            {/* Hidden Google Translate widget, required for functionality */}
            <div id="google_translate_element" style={{ display: "none" }}></div>
        </div>
    );
};

export default LanguageSwitcher;

