import "./ActionsButtons.css"

export const ActionsButtons = ({setButtonActivated}) => {
  return (
    <div className="buttons-container">
    <button type="submit" onClick={()=>setButtonActivated("decrypt")} className="button-secondary">
      <i className="bi bi-unlock-fill"></i>
      Descifrar
    </button>
    <button type="submit" onClick={()=>setButtonActivated("encrypt")} className="button-primary">
      <i className="bi bi-lock-fill"></i>
      Cifrar
    </button>
  </div>
  )
}
