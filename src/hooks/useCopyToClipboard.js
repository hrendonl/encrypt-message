import { useState, useCallback } from "react";

export const useCopyToClipboard = (timeout = 2000) => {
  const [isCopy, setIsCopy] = useState(false);

  const copy = useCallback(
    async (text) => {
      if (!text) return false;

      try {
        if (navigator?.clipboard?.writeText) {
          await navigator.clipboard.writeText(text);
        } else {
          // Fallback for older browsers
          const textarea = document.createElement("textarea");
          textarea.value = text;
          textarea.style.position = "fixed";
          textarea.style.opacity = "0";
          document.body.appendChild(textarea);
          textarea.focus();
          textarea.select();
          document.execCommand("copy");
          document.body.removeChild(textarea);
        }

        setIsCopy(true);
        setTimeout(() => setIsCopy(false), timeout);
        return true;
      } catch (err) {
        console.error("Failed to copy to clipboard:", err);
        setIsCopy(false);
        return false;
      }
    },
    [timeout]
  );

  return { isCopy, copy };
};
