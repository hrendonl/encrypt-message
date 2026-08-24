import { useState } from "react";
import { useTranslation } from "react-i18next";
import "./Header.css";
import hclogo from "../../../../assets/hcencript.png";

export const Header = () => {
  const { i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLanguageSelect = (language) => {
    i18n.changeLanguage(language);
    setIsMenuOpen(false);
  };

  const getLanguageName = (langCode) => {
    switch (langCode) {
      case "es":
        return "Español";
      case "en":
        return "English";
      default:
        return "Español";
    }
  };

  return (
    <header>
      <div className="header-content">
        <div className="container-logo">
          <img className="logo" src={hclogo} alt="logo" />
        </div>
        <div className="language-container">
          <button className="button-language" onClick={toggleMenu}>
            <i className="bi bi-globe"></i>
            {getLanguageName(i18n.language)}
            <i className={`bi bi-chevron-${isMenuOpen ? "up" : "down"}`}></i>
          </button>
          {isMenuOpen && (
            <ul className="language-menu">
              <li
                className="language-item"
                onClick={() => handleLanguageSelect("es")}
              >
                Español
              </li>
              <li
                className="language-item"
                onClick={() => handleLanguageSelect("en")}
              >
                English
              </li>
            </ul>
          )}
        </div>
      </div>
    </header>
  );
};
