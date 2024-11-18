import "./MessageBox.css";

export const MessageBox = ({
  getMessage,
  reset,
  register,
  resetProcessedMessage,
}) => {
  const resetTextarea = () => {
    reset("message", "");
    resetProcessedMessage();
  };

  return (
    <div className="form-element-container">
      <div className="container-label">
        <div className="form-element-label">Mensaje</div>
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
          placeholder="Escribe el mensaje que deseas cifrar o descifrar"
        />
      </div>
    </div>
  );
};
