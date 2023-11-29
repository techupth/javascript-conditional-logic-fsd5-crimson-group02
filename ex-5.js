function calculateStudentGrade(score) {
  if (score >= 80) {
    return "A";
  } else if (score >= 60 && score <= 79) {
    return "B";
  } else if (score >= 50 && score <= 59) {
    return "C";
  } else if (score <= 49) {
    return "D";
  }
}

// Example case
let johnGrade = calculateStudentGrade(30);
let lisaGrade = calculateStudentGrade(73);
let janeGrade = calculateStudentGrade(80);
let jjGrade = calculateStudentGrade(60);
let alexGrade = calculateStudentGrade(90);

console.log(`John grade is ${johnGrade}`);
console.log(`Lisa grade is ${lisaGrade}`);
console.log(`Jane grade is ${janeGrade}`);
console.log(`JJ grade is ${jjGrade}`);
console.log(`Alex grade is ${alexGrade}`);
