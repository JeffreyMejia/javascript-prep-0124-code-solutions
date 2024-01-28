/* exported getValues */
function getValues(object) {
  const val = [];
  for (let key in object) {
    val.push(object[key]);
  }
  return val;
}
