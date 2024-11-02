import { useEffect } from "react";
import "./MessageBox.css";

export const MessageBox = ({
  tabActivated,
  resetMessage,
  message,
  onMessageChange,
  resetProcessedMessage,
}) => {

  const nameTextarea = "message"

  const onTextareaChange = (e) => {
    onMessageChange(e);
    resetProcessedMessage();
  }

  const resetTextarea = () => {
    resetMessage(nameTextarea)
    resetProcessedMessage();
  }

  useEffect(() => {
    resetProcessedMessage();
  }, [tabActivated])
  

  return (
    <div className="container-element">
      <div className="container-label">
        <div className="label">
          {tabActivated == "encrypt" ? "Mensaje a cifrar:" : "Mensaje cifrado:"}
        </div>
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

          <button type="submit" className="button-action">
            {tabActivated == "encrypt" ? (
              <i className="bi bi-lock-fill"></i>
            ) : (
              <i className="bi bi-unlock-fill"></i>
            )}
            {tabActivated == "encrypt" ? "Cifrar" : "Decifrar"}
          </button>
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
    </div>
  );
};
