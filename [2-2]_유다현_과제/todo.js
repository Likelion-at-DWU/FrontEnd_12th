const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoKind = document.getElementById("todo-kind");
const toDoList = document.getElementById("todo-list");

function paintToDo() {
    const newTodo = toDoInput.value; 
    const selKind = toDoKind.value;
    const selDate = document.getElementById("todo-date").value;

    if (toDoInput.value === "") {
        alert("투두리스트의 내용을 입력해주세요.");
    } else {
        let li = document.createElement("li");

        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        li.appendChild(checkbox);
        checkbox.classList.add("checkbox");

        let todoText = document.createElement("span");
        todoText.textContent = `${selDate} / ${selKind} / ${newTodo}\t`;
        li.appendChild(todoText);

        toDoList.appendChild(li);

        checkbox.addEventListener('change', function () {
            if (this.checked) {
                todoText.style.textDecoration = "line-through";
            } else {
                todoText.style.textDecoration = "none";
            }
        });

        let close = document.createElement("span");
        close.textContent = "\u00D7";
        close.classList.add("close");

        li.appendChild(close);

        close.onclick = function () {
            toDoList.removeChild(li);
            close.remove();
        };

        toDoInput.value = "";

    }
}


