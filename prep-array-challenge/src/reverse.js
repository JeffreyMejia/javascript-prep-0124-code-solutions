/* exported reverse */
function reverse(array) {
  reverse1 = [];
  for (let z = array.length - 1; z >= 0; z--) {
    reverse1.push(array[z]);
  }
  return reverse1;
}
