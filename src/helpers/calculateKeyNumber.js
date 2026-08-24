export const calculateKeyNumber = (keyword, charsetNumbers) => {
  if (!keyword || !charsetNumbers) return 1;
  let numberKey = 0;
  for (const letter of keyword) {
    numberKey += charsetNumbers[letter] || 0;
  }
  return numberKey || 1; // Prevent division by zero
};