const number1 = 3;
const number2 = 7;
const product = number1 * number2;
console.log ("product", product);
console.log ("product", typeof product)

const charge = 11;
const payment = 7;
const amountRemaining = charge - payment;
console.log ("amountRemaining", amountRemaining);
console.log ("amountRemaining", typeof amountRemaining);

const tests = 9;
const assignments = 16;
const final = 23;
const grade = (tests + assignments + final) / 3;
console.log ("grade", grade);
console.log ("grade", typeof grade);

const firstname = "Jeffrey";
const lastname = " Mejia Cortez";
const fullname = firstname + lastname;
console.log ("fullname", fullname);
console.log ("fullname", typeof fullname);

const pH = 13;
const isAcidic = (pH < 7);
console.log ("isAcidic", isAcidic);
console.log ("isAcidic", typeof isAcidic);

const numberOfSoldiers = 89;
const isSparta = (numberOfSoldiers === 300);
console.log ("isSparta", isSparta);
console.log ("isSparta", typeof isSparta);

let nickname = fullname;
console.log ("nickname", (nickname += " is the GOAT"));
console.log ("nikcname", typeof nickname);
