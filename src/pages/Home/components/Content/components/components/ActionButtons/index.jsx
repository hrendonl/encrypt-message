import { useTranslation } from "react-i18next";
import "./ActionsButtons.css"

export const ActionsButtons = ({setButtonActivated}) => {
  const { t } = useTranslation();
  return (
    <div className="buttons-container">
    <button type="submit" onClick={()=>setButtonActivated("decrypt")} className="button-secondary">
      <i className="bi bi-unlock-fill"></i>
      {t("action.decrypt")}
    </button>
    <button type="submit" onClick={()=>setButtonActivated("encrypt")} className="button-primary">
      <i className="bi bi-lock-fill"></i>
      {t("action.encrypt")}
    </button>
  </div>
  )
}
