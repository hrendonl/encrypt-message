import { useState } from "react";
import { calculateKeyNumber } from "../helpers/calculateKeyNumber";

export const useHCEncrypt = () => {
  const ALPHABET = "abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
  const ALPHABET_NUMBERS = Object.fromEntries(
    Array.from(ALPHABET).map((letter, index) => [
      `${letter}`,
      Number(`${index + 1}`),
    ])
  );

  const [processedMessage, setProcessedMessage] = useState("");

  const encryptMessage = (keyword, message) => {
    const messageTrim = message.trim();
    const spacing = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    const messageSplit = messageTrim.split(" ");
    messageSplit.map((word, index) => {
      const wordEncode = Array.from(word).map((letter, indexLetter) => {
        const letterCode =
          ALPHABET_NUMBERS[letter] * calculateKeyNumber(keyword, ALPHABET_NUMBERS) +
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
    const messageEncryptedSplit = messageEncrypted.split(".");
    const spacing = messageEncryptedSplit.at(-1);
    messageEncryptedSplit.pop();
    messageEncryptedSplit.map((wordEncrypted, index) => {
      const wordEncryptedSplit = wordEncrypted.split(spacing);
      const wordDecode = wordEncryptedSplit.map((letterCode, indexLetter) => {
        const letterNumber =
          (Number(letterCode) - (indexLetter + 1)) /
          calculateKeyNumber(keyword, ALPHABET_NUMBERS);
        const letter = Object.keys(ALPHABET_NUMBERS).find(
          (key) => ALPHABET_NUMBERS[key] == letterNumber
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
