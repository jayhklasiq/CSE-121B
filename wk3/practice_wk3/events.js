// events.js
let tasks = [];

function renderTasks(tasks) {
  // get the list element from the DOM
  const listElement = document.getElementById('todoList');
  // make sure it is empty
  listElement.innerHTML += `<li ${task.completed ? 'class="strike"' : ""}>
  <p>${task.detail}</p>
  <div>
    <span data-function="delete">❎</span>
    <span data-function="complete">✅</span>
  </div>
</li>`;
  // loop through the tasks array. for each of them we need to add the HTML markup for a todo.
}
tasks.forEach(renderTasks);

function newTask() {
  // get the value entered into the #todo input
  const getValue = document.getElementById('todo');  
  // add it to our arrays tasks
  tasks.push(getValue);
  // render out the list.
  renderTasks(tasks);
}
{ detail: task, completed: false}

function removeTask(taskElement) {
  // note the use of Array.filter to remove the element from our task array
  tasks = tasks.filter(
    (task) => task.detail != taskElement.childNodes[0].innerText
  );
  // this line removes the HTML element from the DOM
  taskElement.remove();
}

function completeTask(taskElement) {
  // In this case we need to find the index of the task so we can modify it.
  const taskIndex = tasks.findIndex(
    (task) => task.detail === taskElement.childNodes[0].innerText
  );
  // once we have the index we can modify the complete field.
  // tasks[taskIndex].completed ? false : true is a ternary expression.
  // If the first part is true (left of the ?), then the value on the left of the : will get returned, otherwise the value on the right of the : will be returned.
  tasks[taskIndex].completed = tasks[taskIndex].completed ? false : true;
  // toggle adds a class if it is not there, removes it if it is.
  taskElement.classList.toggle("strike");
  console.log(tasks);
}

function manageTasks(event) {
  // did they click the delete or complete icon?
  console.log(event.target);
  console.log(event.currentTarget);
  // event.target will point to the actual icon clicked on. We need to get the parent li to work with however. HINT: Remember element.closest()? Look it up if you don't
  // because we added 'data-function="delete"' to each icon in a task we can access a dataset property on our target
  console.log(event.closest('#todoList'))
  // use that in a couple of if statements to decide whether to run removeTask or completeTask
  if  
}

// we need to attach listeners to the submit button and the list. Listen for a click, call the 'newTask' function on submit and call the 'manageTasks' function if either of the icons are clicked in the list of tasks.
const submitTask = document.getElementById('submitTask'); 
addEventListener ("click", submitTask);
submitTask.call(newTask);