const todoInputElem = document.querySelector('.todo-input');
const todoListElem = document.querySelector('.todo-list');
const todopulBtn = document.querySelector('.pulBtn');
const clearAll = document.getElementById("Clear-All");


let todos = [];
let id = 0;

const setTodos = (newTodos) => {
    todos = newTodos;
}

const getAllTodos = () => {
    return todos;
}

const appendTodos = (text) => {
    const newId = id++;
    // 스프레드 연산자 사용해서
    const newTodos = [...getAllTodos(), {id: newId, isCompleted: false, content: text }] 
    setTodos(newTodos)
    paintTodos();
}

// delBtn 버튼 click시 실행 : 입력받은 todo의 id값
const deleteTodo = (todoId) => {
    const newTodos = getAllTodos().filter(todo => todo.id !== todoId );
    setTodos(newTodos);
    paintTodos()
}

const completeTodo = (todoId) => {
    const newTodos = getAllTodos().map(todo => todo.id === todoId ? {...todo,  isCompleted: !todo.isCompleted} : todo )
    setTodos(newTodos);
    paintTodos();
}

//할 일 입력하면 paintTodos()함수로 목록에 HTML 그리기
const paintTodos = () => {
    todoListElem.innerHTML = ''; //todoListElem 요소 안의 HTML 초기화
    const allTodos = getAllTodos(); // todos 배열 가져오기
    
    // "todo-item"에 해당하는 HTML을 그려서 "todo-list"에 추가하기
    allTodos.forEach(todo => { 
      const todoItemElem = document.createElement('li');
      todoItemElem.classList.add('todo-item');
      
      const checkboxElem = document.createElement('div');
      checkboxElem.classList.add('checkbox');
      checkboxElem.addEventListener('click', () => completeTodo(todo.id)) // 'click'이벤트 발생 시, 완료 처리
  
      const todoElem = document.createElement('div');
      todoElem.classList.add('todo');
      todoElem.innerText = todo.content;
  
      const delBtnElem = document.createElement('button');
      delBtnElem.classList.add('delBtn');
      delBtnElem.addEventListener('click',  () => deleteTodo(todo.id)) // 'click'이벤트 발생 시, 해당 할 일 삭제
      delBtnElem.innerHTML = 'x';
  
      if(todo.isCompleted) {
        todoItemElem.classList.add('checked');
        checkboxElem.innerText = '✔';
      }
  
      todoItemElem.appendChild(checkboxElem);
      todoItemElem.appendChild(todoElem);
      todoItemElem.appendChild(delBtnElem);
      todoListElem.appendChild(todoItemElem);
    })
  }

const init = () => {
        // 입력창에 할 일 입력하고 엔터 이벤트
    todoInputElem.addEventListener('keypress', (e) =>{
        if (e.key === 'Enter') {
            if (todoInputElem.value === '') { //엔터키 눌렀을 때 비었는지 체크
                alert("You must write something!"); //비었으면 경고문
            } else {
                appendTodos(e.target.value); // 할 일 추가
                todoInputElem.value = ''; // 입력창 초기화
            }
        }
    })
    // 입력창에 할 일 입력하고 추가 버튼에 클릭 이벤트 
    todopulBtn.addEventListener('click',  () => { 
        if (todoInputElem.value === '') { // click했을 때 비었는지 확인
            alert("You must write something!"); // 비었으면 경고문
        } else {
            appendTodos(todoInputElem.value); // 할 일 추가
            todoInputElem.value = ''; // 입력창 초기화
        }
    })
    clearAll.addEventListener("click", () =>{ //Clear All 버튼 누르면 초기화
        todos = [];
        todoListElem.innerHTML = '';
    });
}

init()