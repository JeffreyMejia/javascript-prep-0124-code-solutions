/* exported isVowel */
function isVowel(character) {
  let character1;
  if (character === 'a' || character === 'A') {
    character1 = true;
  } else if (character === 'e' || character === 'E') {
    character1 = true;
  } else if (character === 'i' || character === 'I') {
    character1 = true;
  } else if (character === 'o' || character === 'O') {
    character1 = true;
  } else if (character === 'u' || character === 'U') {
    character1 = true;
  } else {
    character1 = false;
  }
  return character1;
}
