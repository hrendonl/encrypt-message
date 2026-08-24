import { useTranslation } from "react-i18next";
import "./KeywordInput.css";

export const KeywordInput = ({ register }) => {
  const { t } = useTranslation();
  return (
    <div className="input-container">
      <div className="icon-input-container">
        <i className="bi bi-key"></i>
      </div>
      <input
        type="password"
        name="keyword"
        {...register("keyword")}
        placeholder={t("form.keyword.placeholder")}
      />
    </div>
  );
};
