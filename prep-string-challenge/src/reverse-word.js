/* exported reverseWord */
function reverseWord(word) {
  reverse1 = '';
  for (let x = word.length - 1; x >= 0; x--) {
    reverse1 += word[x];
  }
  return reverse1;
}
