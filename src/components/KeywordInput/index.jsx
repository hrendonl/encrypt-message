import { useState } from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import "./KeywordInput.css";

export const KeywordInput = ({ register, setValue, watch }) => {
  const { t } = useTranslation();
  const [showKey, setShowKey] = useState(false);
  
  const keywordValue = watch ? watch("keyword") || "" : "";

  const toggleKeyVisibility = () => {
    setShowKey((prev) => !prev);
  };

  const handleGenerateKey = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
    let randomKey = "";
    for (let i = 0; i < 16; i++) {
      randomKey += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    if (setValue) {
      setValue("keyword", randomKey, { shouldValidate: true, shouldDirty: true });
    }
  };

  const getStrengthLevel = (val) => {
    if (!val) return 0;
    if (val.length < 4) return 1;
    if (val.length < 8) return 2;
    if (val.length < 12) return 3;
    return 4;
  };

  const strength = getStrengthLevel(keywordValue);

  return (
    <div className="keyword-wrapper">
      <div className="input-container">
        <div className="icon-input-container">
          <i className="bi bi-shield-lock-fill"></i>
        </div>
        <input
          type={showKey ? "text" : "password"}
          id="keyword"
          {...register("keyword")}
          placeholder={t("form.keyword.placeholder")}
          autoComplete="off"
        />
        <div className="input-actions">
          <button
            type="button"
            className="input-action-btn"
            onClick={toggleKeyVisibility}
            title={showKey ? t("form.keyword.hide") : t("form.keyword.show")}
          >
            <i className={`bi ${showKey ? "bi-eye-slash-fill" : "bi-eye-fill"}`}></i>
          </button>
          <button
            type="button"
            className="input-action-btn generate-btn"
            onClick={handleGenerateKey}
            title={t("form.keyword.generate")}
          >
            <i className="bi bi-dice-5-fill"></i>
          </button>
        </div>
      </div>
      
      <div className="strength-meter-container">
        <div className="strength-label">
          <span>{t("form.keyword.strength")}</span>
          <span className={`strength-text level-${strength}`}>
            {strength === 0 && "-"}
            {strength === 1 && "Weak"}
            {strength === 2 && "Fair"}
            {strength === 3 && "Good"}
            {strength === 4 && "Strong"}
          </span>
        </div>
        <div className="strength-bars">
          {[1, 2, 3, 4].map((step) => (
            <div
              key={step}
              className={`strength-bar-segment ${step <= strength ? `active level-${strength}` : ""}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

KeywordInput.propTypes = {
  register: PropTypes.func.isRequired,
  setValue: PropTypes.func,
  watch: PropTypes.func,
};
