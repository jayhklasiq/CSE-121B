/* Lesson 4 */

/* DATA */

// Step 1: Declare a new variable to hold information about yourself
let mySelf = {};

// Step 2: Inside of the object, add a property named name with a value of your name as a string
mySelf.name = 'Joshua O. Olaoye';

// Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string
mySelf.myImage = "images/me.jpg";

// Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )
mySelf.favoriteFoods = ["Rice", "Beans", "Eggs", "Noodle", "Burgers"];

// Step 5: Add another property named hobbies with a value of an array of your hobbies as strings
mySelf.myHobbies = ["Singing", "Dancing", "Watching Movies", "Listen to Music"];

// Step 6: Add another property named placesLived with a value of an empty array
mySelf.placesLived = [];
// Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string
mySelf.placesLived.push({place: "", length: ""});
// Step 8: For each property, add appropriate values as strings
mySelf.placesLived[0].place = "Edo State";
mySelf.placesLived[0].length = "2 years";
// Step 9: Add additional objects with the same properties for each place you've lived
// mySelf.placesLived[1].place = "Lagos State";
// mySelf.placesLived[1].length = "15 years";
// or you could use .push

mySelf.placesLived.push({place: "Lagos State", length: "4 years"});
mySelf.placesLived.push({place: "Abuja", length: "1 year"});

/* OUTPUT */

// Step 1: Assign the value of the name property (of the object declared above) to the HTML <span> element with an ID of name
let nameElement = document.querySelector("#name");
nameElement.textContent = mySelf.name;
// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo
document.querySelector("img").setAttribute("src", mySelf.myImage);
// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo
nameElement = document.querySelector("#name");
nameElement.setAttribute("alt", mySelf.name);
// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
const favoriteFoodsList = document.querySelector('#favorite-foods');
for (let food of mySelf.favoriteFoods) {
    const li = document.createElement('li');
    li.textContent = food;
// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
favoriteFoodsList.appendChild(li);}
// Step 6: Repeat Step 4 for each hobby in the hobbies property
const hobbiesList = document.querySelector("#hobbies");
for (let hobby of mySelf.myHobbies) {
   const li = document.createElement('li');
   li.textContent = hobby;
// Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies
hobbiesList.appendChild(li);}
// Step 8: For each object in the <em>placesLived</em> property:
let placeLivedList = document.querySelector("#places-lived");
for (let place of mySelf.placesLived) {
// - Create an HTML <dt> element and put its place property in the <dt> element
let dt = document.createElement('dt');
dt.textContent = place.place;
// - Create an HTML <dd> element and put its length property in the <dd> element
let dd = document.createElement('dd')
dd.textContent = place.length;
// Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived
document.querySelector("#places-lived").appendChild(dt);
document.querySelector("#places-lived").appendChild(dd);
}
