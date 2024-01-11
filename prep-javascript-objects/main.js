const person = {firstname: "Jeffrey", lastname: " Mejia Cortez", hobby: "gaming"};
console.log (person)

const fullname = (person.firstname + person.lastname);
console.log ("The person's name is:", fullname);

person.job = "Behavioral Therapist";
console.log ("This person's current job is:", person.job);

person['previousJob'] = "line cook";
console.log ("This person's previous job was:", person['previousJob']);

console.log (person);
