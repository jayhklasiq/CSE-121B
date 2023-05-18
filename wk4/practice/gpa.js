function getGrades(inputSelector) {
  // get grades from the input box
  const gradesInput = document.getElementById("grades");
  const grades = gradesInput.value;
  // split them into an array (String.split(','))
  let gradeArray = grades.split(',');
  // clean up any extra spaces, and make the grades all uppercase. (Array.map())
  // return grades
  gradeArray = gradeArray.map(grade => grade.trim().toUpperCase())
    return gradeArray;  
}

function lookupGrade(grade) {
  // converts the letter grade to it's GPA point value and returns it
  if (grade === "A") {
    gpa = 4.0;
  } else if (grade === "B") {
    gpa = 3.0;
  } else if (grade === "C") {
    gpa = 2.0; 
  } else if (grade === "D") {
    gpa = 1.0;
  } else {
    gpa = 0;
  }
  return gpa;
  }
function calculateGpa(grades) {
  // gets a list of grades passed in
  // convert the letter grades to gpa points
  const gpaPoints = grades.map(grade => lookupGrade(grade));
  // calculates the GPA
  const totalPoints = gpaPoints.reduce((acc, val) => acc + val, 0);
  const gpa = totalPoints / gpaPoints.length
  // return the GPA
  return gpa;
}

function outputGpa(gpa, selector) {
  // takes a gpa value and displays it in the HTML in the element identified by the selector
  const gpaOutput = document.getElementById(selector);
  outputElement.textContent = gpa.toFixed(2)
}

function clickHandler() {
  // when the button in our html is clicked:
  // get the grades entered into the input
  const grades = getGrades("grades");
  // calculate the gpa from the grades entered
  const gpa = calculateGpa(grades);
  // display the gpa
  outputGpa(gpa, "output");
}

const button = document.getElementById("submitButton");
button.addEventListener("click", clickHandler)