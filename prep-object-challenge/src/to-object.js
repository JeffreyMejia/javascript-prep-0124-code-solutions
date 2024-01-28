/* exported toObject */
function toObject(keyValuePair) {
  const prop = keyValuePair[0];
  const val = keyValuePair[1];
  const object = {};
  object[prop] = val;
  return object;
}
