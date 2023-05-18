"use strict";

//DOM Element
const containerEl = document.querySelector(".todo-container");
const toDOEl = document.querySelector(".todolist");

const addTaskBtn = document.querySelector(".addtask");

let taskCompleteBtn = document.querySelectorAll(".tick-icon");
let taskEditBtn = document.querySelectorAll(".edit-icon");
let taskDeleteBtn = document.querySelectorAll(".delete-icon");

const inputTaskEl = document.querySelector(".taskinput");
const taskListEl = document.querySelector(".tasklist-container");
let taskItemEl = document.querySelectorAll(".task-item");
let ifNoTask;

const updateDom = function () {
  taskItemEl = document.querySelectorAll(".task-item");
  taskCompleteBtn = document.querySelectorAll(".tick-icon");
  taskEditBtn = document.querySelectorAll(".edit-icon");
  taskDeleteBtn = document.querySelectorAll(".delete-icon");
};


//action on EditBtn click


//save action

const addtask = function () {
  let taskContent = inputTaskEl.value;

  if (taskContent === "") {
    return;
  } else {
    //cheaking If No task in append
    if (ifNoTask) {
      ifNoTask.remove();
    }

    let task = `<div class="task-item">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            class="tick-icon"
            viewBox="0 0 100 100"
            >
            <path d="M20 50 L40 70 L80 30" fill="none" stroke-width="10" />
            </svg>
            <input type="text" class="task-detail" value="${taskContent}" readonly/>
            <svg
            xmlns="http://www.w3.org/2000/svg"
            class="edit-icon"
            viewBox="0 0 24 24"
            >
            <path
                d="M17.59 3.41L19 2 22 5l-1.59 1.59L17 4.17zM3 17V21h4.42L17.51 9.91l-4.25-4.25L3 17zm17.71-11.29a1 1 0 0 0 0-1.42l-2-2a1 1 0 0 0-1.42 0L16 4.69l3.71 3.71a1 1 0 0 0 0 1.42z"
            />
            </svg>

            <svg
            xmlns="http://www.w3.org/2000/svg"
            class="delete-icon"
            viewBox="0 0 100 100"
            >
            <path
                d="M77.77,25H69V16A2,2,0,0,0,67,14H33a2,2,0,0,0-2,2V25H22.23A2.21,2.21,0,0,0,20,27.23V31H80V27.23A2.21,2.21,0,0,0,77.77,25ZM33,16H67V25H33ZM27,31V78.77A2.23,2.23,0,0,0,29.23,81H70.77A2.23,2.23,0,0,0,73,78.77V31ZM55,73.5a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,55,73.5Zm-10,0A1.5,1.5,0,1,1,44.5,75,1.5,1.5,0,0,1,45,73.5Zm-10,0A1.5,1.5,0,1,1,34.5,75,1.5,1.5,0,0,1,35,73.5Z"
            />
            </svg>
            </div>
`;
    taskListEl.insertAdjacentHTML("beforeend", task);
    inputTaskEl.value = "";
    taskListEl.style.padding = "1rem";
  }

  //updating dom  tree
  updateDom();

  let newTaskDeleteBtn = taskDeleteBtn[taskDeleteBtn.length - 1];
  let newTaskCompleteBtn = taskCompleteBtn[taskCompleteBtn.length - 1];
  let newTaskEditBtn = taskEditBtn[taskEditBtn.length - 1];

  newTaskDeleteBtn.addEventListener("click", function () {
    newTaskDeleteBtn.parentElement.remove();
    updateDom();
    if (taskItemEl.length === 0) {
      ifNoTask = document.createElement("div");
      ifNoTask.setAttribute("class", "notask");
      ifNoTask.textContent = `NO task in assign Today`;
      taskListEl.appendChild(ifNoTask);
    }
  });

  newTaskCompleteBtn.addEventListener("click", function () {
    newTaskCompleteBtn.nextElementSibling.classList.toggle("taskcomplete");
    newTaskCompleteBtn.parentElement.classList.toggle("taskcomplete");
    newTaskCompleteBtn.classList.toggle("checked");
  });

  newTaskEditBtn.addEventListener("click", function () {
    newTaskEditBtn.classList.toggle("checked");
    newTaskEditBtn.previousElementSibling.toggleAttribute("readonly");
    newTaskEditBtn.previousElementSibling.focus();
    newTaskEditBtn.previousElementSibling.classList.toggle("editactive");
  });
};
