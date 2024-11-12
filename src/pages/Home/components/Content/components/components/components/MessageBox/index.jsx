import { useEffect } from "react";
import "./MessageBox.css";

export const MessageBox = ({
  tabActivated,
  resetMessage,
  message,
  onMessageChange,
  resetProcessedMessage,
}) => {
  const nameTextarea = "message";

  const onTextareaChange = (e) => {
    onMessageChange(e);
    resetProcessedMessage();
  };

  const resetTextarea = () => {
    resetMessage(nameTextarea);
    resetProcessedMessage();
  };

  useEffect(() => {
    resetProcessedMessage();
  }, [tabActivated]);

  return (
    <div className="container-element">
      <div className="container-label">
        <div className="label">Mensaje</div>
        <div className="encrypt-buttons">
          {message != "" && (
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
      <textarea
        name={nameTextarea}
        onChange={onTextareaChange}
        placeholder={
          tabActivated == "encrypt"
            ? "Escribe el mensaje que deseas cifrar"
            : "Escribe el mensaje cifrado"
        }
        value={message}
      />
      <div className="buttons-actions">
        <button type="submit" className="button-secondary">
          <i className="bi bi-unlock-fill"></i>
          Decifrar
        </button>
        <button type="submit" className="button-primary">
          <i className="bi bi-lock-fill"></i>
          Cifrar
        </button>
      </div>
    </div>
  );
};
