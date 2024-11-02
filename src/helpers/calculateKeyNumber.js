export const calculateKeyNumber = (keyword, ALPHABET_NUMBERS) => {
    let numberKey = 0;
    Array.from(keyword).forEach((letter) => {
      numberKey = numberKey + ALPHABET_NUMBERS[letter];
    });
  return numberKey
}