"use strict";

document.addEventListener('DOMContentLoaded', () => {

    const input = document.getElementById("input");
    const addBtn = document.getElementById("addBtn");
    const appContent = document.getElementById("appContent");
    const inputClear = document.getElementById("inputClear");

    const addTask = () => {
        if (input.value.length > 0) {
            const taskContainer = document.createElement("div");
            taskContainer.classList.add("tasks-container");

            const tasksContent = document.createElement("p");
            tasksContent.textContent = input.value;

            const taskRemover = document.createElement("i");
            taskRemover.classList.add("fa-solid", "fa-circle-xmark", "task-remover");
            taskRemover.addEventListener("click", () => {
                taskContainer.remove();
            });

            taskContainer.appendChild(tasksContent);
            taskContainer.appendChild(taskRemover);
            appContent.appendChild(taskContainer);
            input.value = "";

        } else {
            alert("You can't add an empty task!")
            input.value = "";
        }
    };

    addBtn.addEventListener("click", () => {
        addTask();
    });
    input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            addTask();
        }
    });
    inputClear.addEventListener("click", () => {
        input.value = "";
    })
});
