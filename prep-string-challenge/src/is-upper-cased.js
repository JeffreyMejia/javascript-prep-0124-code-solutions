/* exported isUpperCased */
function isUpperCased(word) {
  let word1;
  if (word === word.toUpperCase()) {
    word1 = true;
  } else {
    word1 = false;
  }
  return word1;
}
