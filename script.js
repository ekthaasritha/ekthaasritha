let button = document.getElementById("addBtn");

button.addEventListener("click", function () {

    let input = document.getElementById("task");

    let task = input.value;

    if (task === "") {
        alert("Enter a task!");
        return;
    }

    let li = document.createElement("li");

    li.innerText = task + " ";

    let deleteBtn = document.createElement("button");

    deleteBtn.innerText = "Delete";

    deleteBtn.addEventListener("click", function () {
        li.remove();
    });

    li.appendChild(deleteBtn);

    document.getElementById("taskList").appendChild(li);

    input.value = "";

});