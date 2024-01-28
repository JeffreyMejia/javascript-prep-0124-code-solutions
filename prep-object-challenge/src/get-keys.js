/* exported getKeys */
function getKeys(object) {
  const value = [];
  for (let prop in object) {
    value.push(prop);
  }
  return value;
}
