const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input"); //loginform이라는 요소 안의 input과 button을 찾는 것임
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
function onLoginSubmit(event){
    event.preventDefault(); //브라우저의 기본동작을 막음
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY,username);//user정보 저장
    paintGreetings(username);
}

function paintGreetings(username){
    greeting.innerText = `${username}의 To Do list ദ്ദി˶˙ᵕ˙˶)`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}
const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);
} else {
    paintGreetings(savedUsername);
}


