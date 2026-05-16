const taskInput = document.getElementById("taskInput");

const addTaskBtn = document.getElementById("addTaskBtn");

const taskList = document.getElementById("taskList");



let tasks = JSON.parse(localStorage.getItem("tasks")) || [];



function saveTasks() {

    localStorage.setItem("tasks", JSON.stringify(tasks));

}



function displayTasks() {

    taskList.innerHTML = "";



    tasks.forEach((task, index) => {

        const li = document.createElement("li");



        li.innerHTML = `

            <span>${task}</span>

            <div class="task-buttons">

                <button class="edit-btn" onclick="editTask(${index})">

                    Edit

                </button>

                <button class="delete-btn" onclick="deleteTask(${index})">

                    Delete

                </button>

            </div>

        `;



        taskList.appendChild(li);

    });

}



function addTask() {

    const taskText = taskInput.value.trim();



    if(taskText === "") {

        alert("Please enter a task");

        return;

    }



    tasks.push(taskText);



    saveTasks();

    displayTasks();



    taskInput.value = "";

}



function deleteTask(index) {

    tasks.splice(index, 1);



    saveTasks();

    displayTasks();

}



function editTask(index) {

    const updatedTask = prompt("Edit Task", tasks[index]);



    if(updatedTask !== null) {

        tasks[index] = updatedTask;



        saveTasks();

        displayTasks();

    }

}



addTaskBtn.addEventListener("click", addTask);



displayTasks();