import { useState } from "react";

export const useCopyToClipboard = (textContainerId) => {
    const [isCopy, setIsCopy] = useState(false);

    const copy = (text) => {
      const div = document.getElementById(textContainerId);
  
      if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard
          .writeText(text)
          .then(() => {
            setIsCopy(true);
            setTimeout(() => {
              setIsCopy(false);
            }, 2000);
          })
          .catch((err) => {
            console.error("Error al copiar: ", err);
          });
      } else {
        const range = document.createRange();
        range.selectNodeContents(div);
        const selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
  
        try {
          const successful = document.execCommand("copy");
          if (successful) {
            setIsCopy(true);
            setTimeout(() => {
              setIsCopy(false);
              selection.removeAllRanges();
              document.activeElement.blur();
            }, 2000);
          } else {
            alert("Error al copiar al portapapeles");
          }
        } catch (err) {
          console.error("Error al copiar: ", err);
          alert("Error al copiar al portapapeles");
        }
      }
  }
  
  return {
    isCopy,
    copy
  }
}
