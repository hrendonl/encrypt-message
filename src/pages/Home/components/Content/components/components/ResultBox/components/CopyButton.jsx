import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import "./CopyButton.css";
import { useCopyToClipboard } from "../../../../../../../../hooks/useCopyToClipboard"; 

export const CopyButton = ({ text, textContainerId }) => {
  const { t } = useTranslation();
  const { isCopy, copy } = useCopyToClipboard(textContainerId);

  const handleClick = () => {
    copy(text);
  };

  return (
    <button
      type="button"
      className={`copy-button ${isCopy ? "copied" : ""}`}
      onClick={handleClick}
      title={isCopy ? t("action.copied") : t("action.copy")}
    >
      <i className={`bi ${isCopy ? "bi-check-lg" : "bi-copy"}`}></i>
      <span>{isCopy ? t("action.copied") : t("action.copy")}</span>
    </button>
  );
};

CopyButton.propTypes = {
  text: PropTypes.string.isRequired,
  textContainerId: PropTypes.string.isRequired,
};
