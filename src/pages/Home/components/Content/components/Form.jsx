import { useState } from "react";
import "./Form.css";
import { useForm } from "react-hook-form";
import { useHCEncrypt } from "../../../../../hooks/useHCEncrypt";
import { KeywordInput } from "./components/KeywordInput";
import { MessageBox } from "./components/MessageBox";
import { ResultBox } from "./components/ResultBox";
import { ActionsButtons } from "./components/ActionButtons";

export const Form = () => {
  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
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
    if (buttonActivated == "encrypt") {
      encryptMessage(data.keyword, data.message);
    } else {
      decryptMessage(data.keyword, data.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-element-container">
        <div className="form-element-label">Palabra clave:</div>
        <KeywordInput register={register} />
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
        <ResultBox processedMessage={processedMessage} watch={watch}/>
      </div>
    </form>
  );
};
