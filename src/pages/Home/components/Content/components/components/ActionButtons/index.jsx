import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import "./ActionsButtons.css";

export const ActionsButtons = ({ setButtonActivated }) => {
  const { t } = useTranslation();
  
  return (
    <div className="buttons-container">
      <button
        type="submit"
        onClick={() => setButtonActivated("decrypt")}
        className="button-secondary action-btn-decrypt"
      >
        <i className="bi bi-unlock-fill"></i>
        <span>{t("action.decrypt")}</span>
      </button>
      
      <button
        type="submit"
        onClick={() => setButtonActivated("encrypt")}
        className="button-primary action-btn-encrypt"
      >
        <i className="bi bi-lock-fill"></i>
        <span>{t("action.encrypt")}</span>
      </button>
    </div>
  );
};

ActionsButtons.propTypes = {
  setButtonActivated: PropTypes.func.isRequired,
};
