import "./CopyButton.css";
import { useCopyToClipboard } from "../../../../../../../../hooks/useCopyToClipboard"; 

export const CopyButton = ({ text, textContainerId }) => {
  const { isCopy, copy } = useCopyToClipboard(textContainerId);

  const handleClick = () => {
    copy(text);
  };

  return (
    <button type="button" className="copy-button" onClick={handleClick}>
      {isCopy ? (
        <i className="bi bi-check-lg"></i>
      ) : (
        <i className="bi bi-copy"></i>
      )}
      {isCopy ? "¡Copiado!" : "Copiar mensaje"}
    </button>
  );
};
