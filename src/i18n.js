import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      "header.language.es": "Spanish",
      "header.language.en": "English",
      "form.keyword.label": "Keyword:",
      "form.keyword.placeholder": "Enter the keyword",
      "form.message.label": "Message",
      "form.message.placeholder": "Type the message you want to encrypt or decrypt",
      "form.result.label": "Result",
      "action.encrypt": "Encrypt",
      "action.decrypt": "Decrypt",
      "action.copy": "Copy message",
      "action.copied": "Copied!",
    },
  },
  es: {
    translation: {
      "header.language.es": "Español",
      "header.language.en": "Inglés",
      "form.keyword.label": "Palabra clave:",
      "form.keyword.placeholder": "Digita la palabra clave",
      "form.message.label": "Mensaje",
      "form.message.placeholder": "Escribe el mensaje que deseas cifrar o descifrar",
      "form.result.label": "Resultado",
      "action.encrypt": "Cifrar",
      "action.decrypt": "Descifrar",
      "action.copy": "Copiar mensaje",
      "action.copied": "¡Copiado!",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "es", // default language
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
