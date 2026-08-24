import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./Header.css";
import hclogo from "../../assets/hcencript.png";

export const Header = () => {
  const { i18n, t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleLanguageSelect = (language) => {
    i18n.changeLanguage(language);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const currentLang = i18n.language || "es";

  return (
    <header className="main-header">
      <div className="header-content">
        <div className="header-brand">
          <div className="logo-wrapper">
            <img className="logo" src={hclogo} alt="HC-Encrypt Logo" />
          </div>
          <div className="security-badge" title="No network calls - 100% Client side cipher">
            <span className="pulse-dot"></span>
            <span className="badge-text">{t("header.badge")}</span>
          </div>
        </div>

        <div className="language-container" ref={menuRef}>
          <button
            className={`button-language ${isMenuOpen ? "active" : ""}`}
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-label="Select Language"
          >
            <i className="bi bi-globe2 icon-globe"></i>
            <span className="lang-name">
              {currentLang === "es" ? "Español" : "English"}
            </span>
            <i className={`bi bi-chevron-down arrow-icon ${isMenuOpen ? "rotated" : ""}`}></i>
          </button>

          {isMenuOpen && (
            <ul className="language-menu">
              <li
                className={`language-item ${currentLang === "es" ? "selected" : ""}`}
                onClick={() => handleLanguageSelect("es")}
              >
                <span>Español</span>
                {currentLang === "es" && <i className="bi bi-check2"></i>}
              </li>
              <li
                className={`language-item ${currentLang === "en" ? "selected" : ""}`}
                onClick={() => handleLanguageSelect("en")}
              >
                <span>English</span>
                {currentLang === "en" && <i className="bi bi-check2"></i>}
              </li>
            </ul>
          )}
        </div>
      </div>
    </header>
  );
};
