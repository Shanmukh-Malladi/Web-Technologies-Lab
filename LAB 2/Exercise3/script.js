
function addTask() {
    var input = document.getElementById("taskInput");
    var taskName = input.value;

    if (taskName === "") {
        alert("Please enter a task name!");
        return;
    }

    var card = document.createElement("div");
    var uniqueId = "task-" + new Date().getTime(); 
    
    card.id = uniqueId;
    card.className = "task-card";
    card.draggable = true; 
    
    
    card.innerHTML = "<strong>" + taskName + "</strong>";
    
   
    card.ondragstart = drag;

    
    document.getElementById("todo").appendChild(card);

    
    input.value = "";
}


function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
    event.preventDefault();
    
    var data = event.dataTransfer.getData("text");
    var draggedElement = document.getElementById(data);
    var targetColumn = event.target;
    
    while (targetColumn.className !== "column") {
        targetColumn = targetColumn.parentNode;
    }

    targetColumn.appendChild(draggedElement);

    if (targetColumn.id === "completed") {
        draggedElement.classList.add("completed-task");
        
        
        setTimeout(function() {
            alert("Task Completed Successfully");
        }, 100);
    } else {
        draggedElement.classList.remove("completed-task");
    }
}