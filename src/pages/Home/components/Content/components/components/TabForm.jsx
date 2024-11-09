import "./TabForm.css";
import { useForm } from "../../../../../../hooks/useForm";
import { useHCEncrypt } from "../../../../../../hooks/useHCEncrypt";
import { ResultBox } from "./components/ResultBox";
import { MessageBox } from "./components/MessageBox";
import { KeywordInput } from "./components/KeywordInput";

export const TabForm = ({ tabActivated }) => {
  const { formState, onElementChange, resetElement } = useForm({
    tabActivated,
    initialData: {
      message: "",
      keyword: "",
    },
  });

  const { keyword, message } = formState;

  const {
    processedMessage,
    resetProcessedMessage,
    encryptMessage,
    decryptMessage,
  } = useHCEncrypt();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (tabActivated == "encrypt") {
      encryptMessage(keyword, message);
    } else {
      decryptMessage(keyword, message);
    }
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <KeywordInput onKeywordChange={onElementChange} keyword={keyword} />
      <MessageBox
        tabActivated={tabActivated}
        message={message}
        resetMessage={resetElement}
        onMessageChange={onElementChange}
        resetProcessedMessage={resetProcessedMessage}
      />
      <ResultBox processedMessage={processedMessage} />
    </form>
  );
};
