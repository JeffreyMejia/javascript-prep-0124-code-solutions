const age = 30;
function isAdult (age) {
 let lessthan18;
  if (age<18) {
  lessthan18 = "true";
  } else {
  lessthan18 = "false";
  }
  return lessthan18
}
const ageResult = isAdult(age);
console.log (ageResult);

const student1Score = 77;
function didStudentPass (score) {
  let greaterThan70;
  if (student1Score > 70){
    greaterThan70 = "True";
  } else {
    greaterthan70 = "false";
  }
  return greaterThan70
}
const scoreResult = didStudentPass(student1Score);
console.log(scoreResult);

const student2Score = 93;
function gradeCalculator (score) {
  let grade;
  if (student2Score <60){
    grade = "F";
  } else if (student2Score<70){
    grade = "D";
  } else if (student2Score<80){
    grade = "C";
  } else if (student2Score<90){
    grade = "B";
  }else if (student2Score<100){
    grade = "A";
  } else {
    grade = "A++"
  }
  return grade
}
const gradeResult = gradeCalculator(student2Score);
console.log (gradeResult)

const season = "autumn";
function seasonManager (season) {
  let seasonDisplay;
  if (season === "summer"){
    seasonDisplay = "it's a hot day.";
  } else if (season === "spring"){
    seasonDisplay = "the flowers are blooming.";
  } else if (season === "autumn"){
    seasonDisplay = "the leaves are changing.";
  } else if (season === "winter"){
    seasonDisplay = "it's a cold day.";
  } else{
    seasonDisplay = "please enter valid season."
  }
  return seasonDisplay
}
const seasonResult = seasonManager(season);
console.log (seasonResult);

const dayOfTheWeek = "saturday";
function dayDetector(dayOfTheWeek) {
  let whatDayIsIt;
  if (dayOfTheWeek === "saturday" || dayOfTheWeek === "sunday") {
    whatDayIsIt = "have a good weekend =)";
  } else {
    whatDayIsIt = "It's a weekday =("
  }
  return whatDayIsIt
}
const dayResult = dayDetector(dayOfTheWeek);
console.log (dayResult);
