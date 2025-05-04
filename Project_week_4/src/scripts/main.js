let listCounter = 1;
let inputFields = []; // Array to store dynamically added input fields

function addNewTaskField() {
  const newTaskField = document.createElement("input");
  newTaskField.type = "text";
  newTaskField.classList.add("taskField");
  newTaskField.placeholder = "Enter here";
  newTaskField.style.padding = "2px";
  newTaskField.style.marginBottom = "5px";

  // Generate a unique ID for each dynamically added input field
  const uniqueId = `dynamicTaskField${listCounter}`;
  newTaskField.id = uniqueId;

  const taskContainer = document.getElementById("task");
  const addButton = document.getElementById("taskAddButton");

  taskContainer.insertBefore(newTaskField, addButton);

  // Add the new input field to the array
  inputFields.push(newTaskField);

  // Increment listCounter for the next input field
  listCounter++;
}

function downloadUserInput() {
window.print();
}


function SaveTask() {
  // Iterate over each input field and check its value
  for (let i = 0; i < inputFields.length; i++) {
    let taskField = inputFields[i];

    if (taskField && taskField.value.trim() !== "") {
      let listItem = document.createElement("li");
      listItem.textContent = taskField.value;

      let listId = `savedTaskList${i + 1}`;
      let savedTaskList = document.getElementById(listId);

      if (!savedTaskList) {
        savedTaskList = document.createElement("ul");
        savedTaskList.id = listId;
        document.getElementById("savedTaskContainer").appendChild(savedTaskList);
      }

      savedTaskList.appendChild(listItem);

      taskField.value = "";
    } else {
      alert("Please enter a task before saving.");
      return; // Stop processing if a task is not entered
    }
  }

  document.getElementById("task-input").style.display = "none";
  document.getElementById("task-output").style.display = "block";
}
