import { useTranslation } from "react-i18next";
import "./MessageBox.css";

export const MessageBox = ({
  getMessage,
  reset,
  register,
  resetProcessedMessage,
}) => {
  const { t } = useTranslation();
  const resetTextarea = () => {
    reset("message", "");
    resetProcessedMessage();
  };

  return (
    <div className="form-element-container">
      <div className="container-label">
        <div className="form-element-label">{t("form.message.label")}</div>
        <div className="encrypt-buttons">
          {getMessage("message") != "" && (
            <button
              type="button"
              className="reset-button"
              onClick={resetTextarea}
            >
              <i className="bi bi-arrow-counterclockwise"></i>
            </button>
          )}
        </div>
      </div>
      <div className="textarea-container">
        <textarea
          {...register("message")}
          placeholder={t("form.message.placeholder")}
        />
      </div>
    </div>
  );
};
