// let new_array = arr.map(function callback( currentValue[, index[, array]]) {
//     // return element for new_array
//     const lists = ['one', 'two', 'three']
//     const listHtml = lists.map(function(list){
//         return '<li>${list}</li>';
//     });
//     document.getElementById("myList").innerHTML = listHtml.join()
// }[, thisArg])

const steps = ["one", "two", "three"];
// callback declaration
function makeList(item) {
const listElement = document.getElementById("myList");
listElement.innerHTML += `<li>${item}</li>`;
}
steps.forEach(makeList);


//ACTIVITY 2
//Declare an array with letter grades in it: ['A', 'B', 'A']
const letterGrades = ['A', 'B', 'A'];
//Write a function that will take one letter grade, and return the appropriate 
//gpa points for that grade. IE if we send in 'A' it should return 4.
function gradeGpa(letterGrades){
    let point = 0;
    if (letterGrades === "A"){
        point = 4;
    }
    else if (letterGrades === "B"){
        point = 3
    }
    return point
}
//Use map and our conversion function to convert the array in step 1 to gpa points.
const gpaPoints = letterGrades.map(gradeGpa);

//ACTIVITY 3
//Using the function from the previous activity, convert an array of grades into an array of gpaPoints.
//Using reduce calculate the GPA from the array of gpaPoints.
//There are many ways to use the reduce function

const pointsTotal = gpaPoints.reduce(function (total, item) {
  return total + item;
});
const gpa = pointsTotal / gpaPoints.length;

// example 2
// this is the same thing as above, but with an arrow function
//const pointsTotal = gpaPoints.reduce((total, item) => total + item);
//const gpa = pointsTotal / gpaPoints.length;

// this could be further simplified as
//const gpa = gpaPoints.reduce((total, item) => total + item) / gpaPoints.length;

//ACTIVITY 4
//Declare an array with the following value: ['watermelon', 'peach', 'apple', 'tomato', 'grape']
//Using filter keep only the fruits that are longer than 6 characters.

const words = ["watermelon", "peach", "apple", "tomato", "grape"];
const shortWords = words.filter(function (word) {
  return word.length < 6;
});

//same thing with an arrow function
//const shortWords = words.filter((word) => word.length < 6);

//ACTIVITY 5
//Declare an array with the following value: [12, 34, 21, 54]
const myArray = [12, 34, 21, 54];
//Declare a luckNumber variable with the value 21;
const luckyNumber = 21;
//Use indexOf to see if the luckyNumber is in the Array.
let luckyIndex = myArray.indexOf(luckyNumber);