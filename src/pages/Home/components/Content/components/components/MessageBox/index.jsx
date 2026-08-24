import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import "./MessageBox.css";

export const MessageBox = ({
  getMessage,
  reset,
  register,
  resetProcessedMessage,
}) => {
  const { t } = useTranslation();
  const messageText = getMessage ? getMessage("message") || "" : "";

  const resetTextarea = () => {
    reset("message", "");
    if (resetProcessedMessage) {
      resetProcessedMessage();
    }
  };

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      if (text) {
        reset("message", text, { shouldValidate: true, shouldDirty: true });
      }
    } catch (err) {
      console.error("Failed to read clipboard", err);
    }
  };

  return (
    <div className="form-element-container">
      <div className="container-label">
        <label htmlFor="message-textarea" className="form-element-label">
          <i className="bi bi-chat-left-text-fill label-icon"></i>
          {t("form.message.label")}
        </label>
        
        <div className="message-toolbar-actions">
          <button
            type="button"
            className="toolbar-btn"
            onClick={handlePaste}
            title={t("form.message.paste")}
          >
            <i className="bi bi-clipboard-plus"></i>
            <span className="btn-text">{t("form.message.paste")}</span>
          </button>
          
          {messageText !== "" && (
            <button
              type="button"
              className="toolbar-btn reset-button"
              onClick={resetTextarea}
              title={t("form.message.clear")}
            >
              <i className="bi bi-arrow-counterclockwise"></i>
              <span className="btn-text">{t("form.message.clear")}</span>
            </button>
          )}
        </div>
      </div>

      <div className="textarea-container">
        <textarea
          id="message-textarea"
          {...register("message")}
          placeholder={t("form.message.placeholder")}
          maxLength={5000}
        />
        <div className="textarea-footer">
          <span className="char-counter">
            {messageText.length} / 5000
          </span>
        </div>
      </div>
    </div>
  );
};

MessageBox.propTypes = {
  getMessage: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  resetProcessedMessage: PropTypes.func.isRequired,
};
