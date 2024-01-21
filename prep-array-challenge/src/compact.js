/* exported compact */
function compact(array) {
  const compact1 = [];
  for (let f = 0; f < array.length; f++) {
    if (array[f]) {
      compact1.push(array[f]);
    }
  }
  return compact1;
}
