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
    <button type="button" className="copy-button" onClick={handleClick}>
      {isCopy ? (
        <i className="bi bi-check-lg"></i>
      ) : (
        <i className="bi bi-copy"></i>
      )}
      {isCopy ? t("action.copied") : t("action.copy")}
    </button>
  );
};
