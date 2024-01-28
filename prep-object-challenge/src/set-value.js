/* exported setValue */
function setValue(object, key, value) {
  Val = object[key] = value;
  return value;
}
