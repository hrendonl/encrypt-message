export const calculateKeyNumber = (keyword, CHARSET_NUMBERS) => {
    let numberKey = 0;
    Array.from(keyword).forEach((letter) => {
      numberKey += CHARSET_NUMBERS[letter];
    });
  return numberKey
}