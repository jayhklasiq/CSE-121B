/* Lesson 5 */

/* IF/ELSE IF */

// Step 1: Declare and initialize a new variable to hold the current date
const currentDateToday = new Date();

// Step 2: Declare another variable to hold the day of the week
let dayOfWeek;

// Step 3: Using the variable declared in Step 1, assign the value of the variable declared in Step 2 to the day of the week ( hint: getDay() )
dayOfWeek = currentDateToday.getDay();

// Step 4: Declare a variable to hold a message that will be displayed
let message = "";

// Step 5: Using an if statement, if the day of the week is a weekday (i.e. Monday - Friday), set the message variable to the string 'Hang in there!'
if (dayOfWeek >= 1 && dayOfWeek <= 5) {
  message = 'Hang in there!';
}

// Step 6: Using an else statement, set the message variable to 'Woohoo! It is the weekend!'
else {
  message = 'Woohoo! It is the weekend!';
}

/* SWITCH, CASE, BREAK */

// Step 1: Declare a new variable to hold another message
let day;

// Step 2: Use switch, case, and break to set the message variable to the day of the week as a string (e.g. Sunday, Monday, etc.) using the day of the week variable declared in Step 2 above
switch (dayOfWeek) {
  case 0:
    day = 'Sunday';
    break;
  case 1:
    day = 'Monday';
    break;
  case 2:
    day = 'Tuesday';
    break;
  case 3:
    day = 'Wednesday';
    break;
  case 4:
    day = 'Thursday';
    break;
  case 5:
    day = 'Friday';
    break;
  case 6:
    day = 'Saturday';
    break;
}

/* OUTPUT */

// Step 1: Assign the value of the first message variable to the HTML element with an ID of message1
const message1Element = document.querySelector('#message1');
message1Element.textContent = message;

// Step 2: Assign the value of the second message variable to the HTML element with an ID of message2
const message2Element = document.querySelector('#message2');
message2Element.textContent = day;

/* FETCH */
// Step 1: Declare a global empty array variable to store a list of temples
let templeList = [];

// Step 2: Declare a function named output that accepts a list of temples as an array argument and does the following for each temple:
function output(temples) {
  const templesElement = document.querySelector('#temples');
  templesElement.innerHTML = '';

  temples.forEach((temple) => {
    // - Creates an HTML <article> element
    const article = document.createElement('article');

    // - Creates an HTML <h3> element and add the temple's templeName property to it
    const h3 = document.createElement('h3');
    h3.textContent = temple.templeName;
    article.appendChild(h3);

    // - Creates an HTML <h4> element and add the temple's location property to it
    const h4Location = document.createElement('h4');
    h4Location.textContent = temple.location;
    article.appendChild(h4Location);

    // - Creates an HTML <h4> element and add the temple's dedicated property to it
    const h4Dedicated = document.createElement('h4');
    h4Dedicated.textContent = temple.dedicated;
    article.appendChild(h4Dedicated);

    // - Creates an HTML <img> element and add the temple's imageUrl property to the src attribute and the temple's templeName property to the alt attribute
    const img = document.createElement('img');
    img.src = temple.imageUrl;
    img.alt = temple.templeName;
    article.appendChild(img);

    // - Appends the <h3> element, the two <h4> elements, and the <img> element to the <article> element as children
    // - Appends the <article> element to the HTML element with an ID of temples
    templesElement.appendChild(article);
  });
}

// Step 3: Create another function called getTemples. Make it an async function.
async function getTemples() {
  // Step 4: In the function, using the built-in fetch method, call this absolute URL: 'https://byui-cse.github.io/cse121b-course/week05/temples.json'. Create a variable to hold the response from your fetch. You should have the program wait on this line until it finishes.
  const response = await fetch('https://byui-cse.github.io/cse121b-course/week05/temples.json');

  // Step 5: Convert your fetch response into a Javascript object ( hint: .json() ). Store this in the templeList variable you declared earlier (Step 1). Make sure the execution of the code waits here as well until it finishes.
  templeList = await response.json();

  // Step 6: Finally, call the output function and pass it the list of temples. Execute your getTemples function to make sure it works correctly.
  output(templeList);
}

// Execute the getTemples function to fetch and display the temples
getTemples();

// Step 7: Declare a function named reset that clears all of the <article> elements from the HTML element with an ID of temples
function reset() {
  const templesElement = document.querySelector('#temples');
  templesElement.innerHTML = '';
}

// Step 8: Declare a function named sortBy that does the following:
function sortBy() {
  // - Calls the reset function
  reset();

  // - Sorts the global temple list by the currently selected value of the HTML element with an ID of sortBy
  const sortByElement = document.querySelector('#sortBy');
  const selectedOption = sortByElement.value;

  let sortedTemples = [];

  if (selectedOption === 'templeNameAscending') {
    sortedTemples = templeList.slice().sort((a, b) => a.templeName.localeCompare(b.templeName));
  } else if (selectedOption === 'templeNameDescending') {
    sortedTemples = templeList.slice().sort((a, b) => b.templeName.localeCompare(a.templeName));
  }

  // - Calls the output function passing in the sorted list of temples
  output(sortedTemples);
}

// Step 9: Add a change event listener to the HTML element with an ID of sortBy that calls the sortBy function
const sortByElement = document.querySelector('#sortBy');
sortByElement.addEventListener('change', sortBy);


// -----------------------------------------------------------------------------------

// Step 10: Declare a function named filterBy that does the following:
function filterBy() {
    // - Calls the reset function
    reset();
  
    // - Gets the value entered by the user in the HTML input element with an ID of filterBy
    const filterInputElement = document.querySelector('#filterBy');
    const filterValue = filterInputElement.value.toLowerCase();
  
    // - Filters the global temple list based on the entered value
    const filteredTemples = templeList.filter((temple) =>
      temple.templeName.toLowerCase().includes(filterValue)
    );
  
    // - Calls the output function passing in the filtered list of temples
    output(filteredTemples);
  }
  
  // Step 11: Add an input event listener to the HTML input element with an ID of filterBy that calls the filterBy function
  const filterInputElement = document.querySelector('#filterBy');
  filterInputElement.addEventListener('input', filterBy);