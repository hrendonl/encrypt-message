import { useMemo, useState } from "react";
import { calculateKeyNumber } from "../helpers/calculateKeyNumber";

export const useHCEncrypt = () => {
  const CHARSET = "abcdefghijklmnñopqrstuvwxyzáéíóúABCDEFGHIJKLMNÑOPQRSTUVWXYZÁÉÍÓÚ0123456789,.;:¡!¿?\"'\\/-_\n\r";
  const CHARSET_NUMBERS = useMemo(() => {
    return Object.fromEntries(
      Array.from(CHARSET).map((letter, index) => [
        `${letter}`,
        index + 1,
      ])
    );
  }, [CHARSET]);

  const [processedMessage, setProcessedMessage] = useState("");

  const encryptMessage = (keyword, message) => {
    const messageTrim = message.trim();
    keyword = keyword.replaceAll(" ", "");
    const spacing = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    const messageSplit = messageTrim.split(" ");
    messageSplit.map((word, index) => {
      const wordEncode = Array.from(word).map((letter, indexLetter) => {
        const letterCode =
          CHARSET_NUMBERS[letter] * calculateKeyNumber(keyword, CHARSET_NUMBERS) +
          (indexLetter + 1);
        return letterCode.toString();
      });
      messageSplit[index] = wordEncode.join(spacing);
    });
    if (messageSplit.join(".") != "") {
      setProcessedMessage(`${messageSplit.join(".")}.${spacing}`);
    } else {
      setProcessedMessage("");
    }
  };

  const decryptMessage = (keyword, message) => {
    const messageEncrypted = message;
    keyword = keyword.replaceAll(" ", "");
    const messageEncryptedSplit = messageEncrypted.split(".");
    const spacing = messageEncryptedSplit.at(-1);
    messageEncryptedSplit.pop();
    messageEncryptedSplit.map((wordEncrypted, index) => {
      const wordEncryptedSplit = wordEncrypted.split(spacing);
      const wordDecode = wordEncryptedSplit.map((letterCode, indexLetter) => {
        const letterNumber =
          (Number(letterCode) - (indexLetter + 1)) /
          calculateKeyNumber(keyword, CHARSET_NUMBERS);
        const letter = Object.keys(CHARSET_NUMBERS).find(
          (key) => CHARSET_NUMBERS[key] == letterNumber
        );
        return letter;
      });
      messageEncryptedSplit[index] = wordDecode.join("");
    });
    setProcessedMessage(messageEncryptedSplit.join(" "));
  };

  const resetProcessedMessage = () => {
    setProcessedMessage("")
  }

  return {
    processedMessage,
    resetProcessedMessage,
    encryptMessage,
    decryptMessage,
  };
};
