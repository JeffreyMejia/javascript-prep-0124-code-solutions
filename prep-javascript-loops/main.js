function whileloop1() {
const numbers = [];
let n = 0;
while (n<10) {
numbers.push(n);
  n++;
}
  return numbers;
}
console.log ("whileloop1output:", whileloop1());

function whileloop2 () {
  const numbers = [];
  let n = 0;
  while (n<19) {
    numbers.push(n);
    n++, n++;
  }
  return numbers;
}
console.log ("whileloop2output:", whileloop2());

function forloop1 () {
  const numbers = [];;
for (let n = 0;n<10;n++) {
numbers.push(n);
}
  return numbers;
}
console.log ("forloop1output:", forloop1());

function forloop2 () {
  let text =""
  for (let n = 100;n>0;n--) {
  text += "time till explosion:" + n + "!";
  }
  return text
}
console.log (forloop2());

function forinloop1(object) {
  const person = [];
  for (let prop in object){
    person.push(prop);
  }
  return person
}
  const object = {
  name: "Jeffrey",
  age: "30",
  hobby: "climbing",
  favoritefood: "ramen",
};
console.log(forinloop1(object));

function forinloop2(object) {
  const person = [];
  for (let key in object){
    person.push(object[key]);
  }
  return person;
}
console.log(forinloop2(object));
