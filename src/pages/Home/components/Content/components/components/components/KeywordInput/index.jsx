import { useState } from "react"
import "./KeywordInput.css"

export const KeywordInput = ({onKeywordChange, keyword}) => {

  const [isFocus, setIsFocus] = useState(false)
  return (
    <div className="container-element">
    <div className="label">Palabra clave:</div>
    <div className={`input-container ${isFocus && "input-focus"}`}>
      <div className="icon-input-container">
        <i className="bi bi-key"></i>
      </div>
      <input
        type="password"
        name="keyword"
        onFocus={()=>setIsFocus(true)}
        onBlur={()=>setIsFocus(false)}
        onChange={onKeywordChange}
        value={keyword}
        placeholder="Digita la palabra clave"
      />
    </div>
  </div>
  )
}
