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


const letterGrades = ['A', 'B', 'A'];
