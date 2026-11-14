
// Contact Form
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const formMessage = document.getElementById("formMessage");

    if (name === "" || email === "" || message === "") {
        formMessage.textContent = "Please fill in all fields!";
        formMessage.style.color = "red";
        return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        formMessage.textContent = "Please enter a valid email!";
        formMessage.style.color = "red";
        return;
    }

    formMessage.textContent = "Thank you! Your message is ready.";
    formMessage.style.color = "green";

    contactForm.reset();
});


// To-Do List
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", function() {

    const task = taskInput.value.trim();

    if (task === "") {
        alert("Please enter a task!");
        return;
    }

    const li = document.createElement("li");

    const taskText = document.createElement("span");
    taskText.textContent = task;

    // Complete task by clicking its text
    taskText.addEventListener("click", function() {
        taskText.style.textDecoration =
            taskText.style.textDecoration === "line-through"
            ? "none" : "line-through";
    });

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    deleteBtn.style.marginLeft = "15px";

    deleteBtn.addEventListener("click", function() {
        li.remove();
    });

    li.appendChild(taskText);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);

    taskInput.value = "";
});
