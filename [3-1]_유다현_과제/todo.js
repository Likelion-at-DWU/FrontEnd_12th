const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoKind = document.getElementById("todo-kind");
const toDoList = document.getElementById("todo-list");

function paintToDo(){
    const newTodo = toDoInput.value; //input의 현재 value를 newTodo에 복사
    const selKind = toDoKind.value;
    const selDate = document.getElementById("todo-date").value;

    if(toDoInput.value===""){
        alert("투두리스트의 내용을 입력해주세요.");
    }else{
        //새로운 리스트 생성
        let li = document.createElement("li");

        // 투두 날짜, 종류, 내용 텍스트 생성
        let todoText = `${selDate} / ${selKind} / ${newTodo}\t`;
        li.textContent = todoText;

        toDoList.appendChild(li); // 목록에 리스트 추가

        // 삭제 버튼 생성
        let close = document.createElement("span");
        close.textContent = "\u00D7";

        // 리스트에 삭제 버튼 추가
        li.appendChild(close);

        // 삭제 버튼 누를 시 해당 리스트 제거
        close.onclick = function() {
            toDoList.removeChild(li);
            close.remove();
        }
    }
    toDoInput.value="";
}
