import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      "header.badge": "End-to-End Local Cipher",
      "header.language.es": "Spanish",
      "header.language.en": "English",
      "form.keyword.label": "Secret Key",
      "form.keyword.placeholder": "Enter or generate a secret key",
      "form.keyword.generate": "Generate random key",
      "form.keyword.show": "Show secret key",
      "form.keyword.hide": "Hide secret key",
      "form.keyword.strength": "Key Security Level",
      "form.message.label": "Input Text",
      "form.message.placeholder": "Type or paste your text to encrypt or decrypt...",
      "form.message.clear": "Clear text",
      "form.message.paste": "Paste from clipboard",
      "form.result.label": "Cipher Result",
      "form.result.empty": "No Output Generated Yet",
      "form.result.emptySub": "Enter a key and input text, then select Encrypt or Decrypt.",
      "action.encrypt": "Encrypt Message",
      "action.decrypt": "Decrypt Message",
      "action.copy": "Copy Output",
      "action.copied": "Copied to Clipboard!",
      "action.useAsInput": "Use as Input",
    },
  },
  es: {
    translation: {
      "header.badge": "Cifrado Local End-to-End",
      "header.language.es": "Español",
      "header.language.en": "Inglés",
      "form.keyword.label": "Clave Secreta",
      "form.keyword.placeholder": "Ingresa o genera una clave secreta",
      "form.keyword.generate": "Generar clave aleatoria",
      "form.keyword.show": "Mostrar clave secreta",
      "form.keyword.hide": "Ocultar clave secreta",
      "form.keyword.strength": "Nivel de Seguridad de Clave",
      "form.message.label": "Texto de Entrada",
      "form.message.placeholder": "Escribe o pega el texto que deseas cifrar o descifrar...",
      "form.message.clear": "Limpiar texto",
      "form.message.paste": "Pegar portapapeles",
      "form.result.label": "Resultado del Cifrado",
      "form.result.empty": "Sin Resultado Generado",
      "form.result.emptySub": "Ingresa una clave y un texto, luego selecciona Cifrar o Descifrar.",
      "action.encrypt": "Cifrar Mensaje",
      "action.decrypt": "Descifrar Mensaje",
      "action.copy": "Copiar Resultado",
      "action.copied": "¡Copiado al Portapapeles!",
      "action.useAsInput": "Usar como Entrada",
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
