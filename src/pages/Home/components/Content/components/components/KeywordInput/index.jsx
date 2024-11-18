import "./KeywordInput.css";

export const KeywordInput = ({ register }) => {
  return (
    <div className="input-container">
      <div className="icon-input-container">
        <i className="bi bi-key"></i>
      </div>
      <input
        type="password"
        name="keyword"
        {...register("keyword")}
        placeholder="Digita la palabra clave"
      />
    </div>
  );
};
