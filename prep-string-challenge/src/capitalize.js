/* exported capitalize */
function capitalize(word) {
  const word1 = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  return word1;
}
