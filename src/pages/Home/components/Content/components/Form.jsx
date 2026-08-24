import { useState } from "react";
import "./Form.css";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useHCEncrypt } from "../../../../../hooks/useHCEncrypt";
import { KeywordInput } from "./components/KeywordInput";
import { MessageBox } from "./components/MessageBox";
import { ResultBox } from "./components/ResultBox";
import { ActionsButtons } from "./components/ActionButtons";

export const Form = () => {
  const { t } = useTranslation();
  const {
    watch,
    register,
    handleSubmit,
    setValue
  } = useForm({
    defaultValues: {
      keyword: "",
      message: "",
    },
  });

  const [buttonActivated, setButtonActivated] = useState("");

  const {
    processedMessage,
    resetProcessedMessage,
    encryptMessage,
    decryptMessage,
  } = useHCEncrypt();

  const onSubmit = (data) => {
    if (buttonActivated === "encrypt") {
      encryptMessage(data.keyword, data.message);
    } else {
      decryptMessage(data.keyword, data.message);
    }
  };

  return (
    <div className="cipher-card">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-element-container">
          <label htmlFor="keyword" className="form-element-label">
            <i className="bi bi-key-fill label-icon"></i>
            {t("form.keyword.label")}
          </label>
          <KeywordInput register={register} setValue={setValue} watch={watch} />
        </div>

        <MessageBox
          getMessage={watch}
          reset={setValue}
          register={register}
          resetProcessedMessage={resetProcessedMessage}
        />

        <div className="form-element-container">
          <ActionsButtons setButtonActivated={setButtonActivated} />
        </div>

        <div className="form-element-container">
          <ResultBox
            processedMessage={processedMessage}
            watch={watch}
            setValue={setValue}
          />
        </div>
      </form>
    </div>
  );
};
