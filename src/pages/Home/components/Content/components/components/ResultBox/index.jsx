import "./ResultBox.css";
import { CopyButton } from "./components/CopyButton";
export const ResultBox = ({ processedMessage, watch }) => {
  return (
    <div className="form-element-container">
      <div className="content-label-result">
        <div className="form-element-label">Resultado</div>
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
