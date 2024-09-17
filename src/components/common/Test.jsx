import React, { useEffect } from 'react';

const Test = () => {
    useEffect(() => {
        // Load Google Translate API script
        const script = document.createElement('script');
        script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
        script.async = true;
        document.body.appendChild(script);

        window.googleTranslateElementInit = () => {
            new window.google.translate.TranslateElement({
                pageLanguage: 'en',
                layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
                autoDisplay: false
            }, 'google_translate_element');
        };

        // Initialize select picker after mounting
        document.querySelector('.selectpicker').addEventListener('change', function () {
            translateLanguage(this.value);
        });
    }, []);

    const translateLanguage = (lang) => {
        const frame = document.querySelector('.goog-te-menu-frame:first-of-type');
        if (!frame) {
            alert('Error: Could not find Google translate frame.');
            return;
        }
        const span = frame.contentDocument.querySelector(`.goog-te-menu2-item span.text:contains(${lang})`);
        span.click();
    };

    return (
        <div className="p-8">
            <div id="google_translate_element" className="hidden"></div>
            <select className="selectpicker border rounded-md p-2" data-width="fit">
                <option value="Afrikaans">Afrikaans</option>
                <option value="Albanian">Albanian</option>
                <option value="Arabic">Arabic</option>
                <option value="Armenian">Armenian</option>
                <option value="Azerbaijani">Azerbaijani</option>
                <option value="Basque">Basque</option>
                <option value="Belarusian">Belarusian</option>
                <option value="Bengali">Bengali</option>
                <option value="Bosnian">Bosnian</option>
                <option value="Bulgarian">Bulgarian</option>
                <option value="Chinese (Simplified)">Chinese (Simplified)</option>
                <option value="Chinese (Traditional)">Chinese (Traditional)</option>
                <option value="Croatian">Croatian</option>
                <option value="Czech">Czech</option>
                <option value="Danish">Danish</option>
                <option value="Dutch">Dutch</option>
                <option value="English">English</option>
                <option value="Estonian">Estonian</option>
                <option value="Finnish">Finnish</option>
                <option value="French">French</option>
                <option value="German">German</option>
                <option value="Greek">Greek</option>
                <option value="Gujarati">Gujarati</option>
                <option value="Hebrew">Hebrew</option>
                <option value="Hindi">Hindi</option>
                <option value="Hungarian">Hungarian</option>
                <option value="Icelandic">Icelandic</option>
                <option value="Indonesian">Indonesian</option>
                <option value="Irish">Irish</option>
                <option value="Italian">Italian</option>
                <option value="Japanese">Japanese</option>
            </select>
           
        </div>
    );
};

export default Test;
