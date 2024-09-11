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
      <div id="google_translate_element" className="outline-none "></div>
    </div>
  );
};

export default GoogleTranslate;
