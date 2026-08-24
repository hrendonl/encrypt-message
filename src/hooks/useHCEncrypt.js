import { useState, useCallback } from "react";
import { calculateKeyNumber } from "../helpers/calculateKeyNumber";

const CHARSET = "abcdefghijklmnñopqrstuvwxyzáéíóúABCDEFGHIJKLMNÑOPQRSTUVWXYZÁÉÍÓÚ0123456789,.;:¡!¿?\"'\\/-_\n\r";

// Static mapping created once outside component renders
const CHARSET_NUMBERS = Object.fromEntries(
  Array.from(CHARSET).map((letter, index) => [letter, index + 1])
);

// O(1) reverse lookup map for decryption
const NUMBER_TO_CHAR = Object.fromEntries(
  Array.from(CHARSET).map((letter, index) => [index + 1, letter])
);

export const useHCEncrypt = () => {
  const [processedMessage, setProcessedMessage] = useState("");

  const encryptMessage = useCallback((keyword, message) => {
    if (!message || !keyword) {
      setProcessedMessage("");
      return;
    }

    const messageTrim = message.trim();
    const cleanKeyword = keyword.replaceAll(" ", "");
    const spacing = String.fromCharCode(65 + Math.floor(Math.random() * 26)); // Random uppercase delimiter A-Z
    const keyNum = calculateKeyNumber(cleanKeyword, CHARSET_NUMBERS);

    const messageWords = messageTrim.split(" ");
    const encodedWords = messageWords.map((word) => {
      return Array.from(word)
        .map((letter, indexLetter) => {
          const charCode = CHARSET_NUMBERS[letter] || 0;
          const letterCode = charCode * keyNum + (indexLetter + 1);
          return letterCode.toString();
        })
        .join(spacing);
    });

    const result = encodedWords.join(".");
    setProcessedMessage(result ? `${result}.${spacing}` : "");
  }, []);

  const decryptMessage = useCallback((keyword, message) => {
    if (!message || !keyword) {
      setProcessedMessage("");
      return;
    }

    const cleanKeyword = keyword.replaceAll(" ", "");
    const messageEncryptedSplit = message.split(".");
    const spacing = messageEncryptedSplit.at(-1);
    const keyNum = calculateKeyNumber(cleanKeyword, CHARSET_NUMBERS);

    // Remove the trailing spacing character
    const wordsEncrypted = messageEncryptedSplit.slice(0, -1);

    const decodedWords = wordsEncrypted.map((wordEncrypted) => {
      const wordEncryptedCodes = wordEncrypted.split(spacing);
      return wordEncryptedCodes
        .map((letterCode, indexLetter) => {
          const letterNumber = (Number(letterCode) - (indexLetter + 1)) / keyNum;
          // O(1) lookup
          return NUMBER_TO_CHAR[letterNumber] || "";
        })
        .join("");
    });

    setProcessedMessage(decodedWords.join(" "));
  }, []);

  const resetProcessedMessage = useCallback(() => {
    setProcessedMessage("");
  }, []);

  return {
    processedMessage,
    resetProcessedMessage,
    encryptMessage,
    decryptMessage,
  };
};
