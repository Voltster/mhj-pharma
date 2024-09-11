import { useLanguage } from "./LanguageContext";

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <select
      value={language}
      onChange={(e) => setLanguage(e.target.value)}
      className="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
    >
      <option value="en">English</option>
      <option value="es">Español</option>
      <option value="fr">Français</option>
      <option value="ru">Русский</option>
    </select>
  );
};

export default LanguageSelector;
