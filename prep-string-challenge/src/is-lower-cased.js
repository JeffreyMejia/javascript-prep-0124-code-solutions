/* exported isLowerCased */
function isLowerCased(word) {
  let word1;
  if (word === word.toLowerCase()) {
    word1 = true;
  } else {
    word1 = false;
  }
  return word1;
}
