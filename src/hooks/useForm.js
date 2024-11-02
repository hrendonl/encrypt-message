import { useEffect, useState } from "react";

export const useForm = ({ tabActivated, initialData }) => {
  const [formState, setFormState] = useState(initialData);

  const onElementChange = ({ target }) => {
    const { name, value } = target;
    setFormState({ ...formState, [name]: value });
  };

  const resetElement = (nameElement) => {
    setFormState({ ...formState, [nameElement]: initialData[nameElement] });
  };

  useEffect(() => {
    setFormState(initialData);
  }, [tabActivated]);

  return {
    formState,
    onElementChange,
    resetElement
  };
};
