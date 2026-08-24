import { useTranslation } from "react-i18next";
import "./ResultBox.css";
import { CopyButton } from "./components/CopyButton";
export const ResultBox = ({ processedMessage, watch }) => {
  const { t } = useTranslation();
  return (
    <div className="form-element-container">
      <div className="content-label-result">
        <div className="form-element-label">{t("form.result.label")}</div>
        {processedMessage != "" && (
          <CopyButton
            text={processedMessage}
            textContainerId="processedMessage"
          />
        )}
      </div>
      <div id="processedMessage" className="messageEncrypted">
        {watch("message") != "" ? processedMessage : ""}
      </div>
    </div>
  );
};
