import "./KeywordInput.css"

export const KeywordInput = ({onKeywordChange, keyword}) => {
  return (
    <div className="container-element">
    <div className="label">Palabra clave:</div>
    <div className="input-container">
      <div className="icon-input-container">
        <i className="bi bi-key"></i>
      </div>
      <input
        type="password"
        name="keyword"
        onChange={onKeywordChange}
        value={keyword}
        placeholder="Digita la palabra clave"
      />
    </div>
  </div>
  )
}
