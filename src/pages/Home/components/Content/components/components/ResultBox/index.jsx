import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import "./ResultBox.css";
import { CopyButton } from "./components/CopyButton";

export const ResultBox = ({ processedMessage, watch, setValue }) => {
  const { t } = useTranslation();
  const inputMessage = watch ? watch("message") || "" : "";
  const hasOutput = inputMessage !== "" && processedMessage !== "";

  const handleUseAsInput = () => {
    if (setValue && processedMessage) {
      setValue("message", processedMessage, { shouldValidate: true, shouldDirty: true });
    }
  };

  return (
    <div className="form-element-container">
      <div className="content-label-result">
        <label className="form-element-label">
          <i className="bi bi-shield-check label-icon"></i>
          {t("form.result.label")}
        </label>
        
        {hasOutput && (
          <div className="result-actions">
            {setValue && (
              <button
                type="button"
                className="swap-input-btn"
                onClick={handleUseAsInput}
                title={t("action.useAsInput")}
              >
                <i className="bi bi-arrow-down-up"></i>
                <span>{t("action.useAsInput")}</span>
              </button>
            )}
            <CopyButton
              text={processedMessage}
              textContainerId="processedMessage"
            />
          </div>
        )}
      </div>

      <div className="result-content-wrapper">
        {hasOutput ? (
          <div id="processedMessage" className="messageEncrypted">
            {processedMessage}
          </div>
        ) : (
          <div className="result-empty-state">
            <div className="empty-icon-wrapper">
              <i className="bi bi-shield-lock"></i>
            </div>
            <div className="empty-title">{t("form.result.empty")}</div>
            <div className="empty-subtitle">{t("form.result.emptySub")}</div>
          </div>
        )}
      </div>
    </div>
  );
};

ResultBox.propTypes = {
  processedMessage: PropTypes.string,
  watch: PropTypes.func,
  setValue: PropTypes.func,
};
