function restore() {
    var firstInputValue = document.getElementById('firstInputId').value;
    var secondInputValue = document.getElementById('secondInputId').value;
    console.log("편지 제목: ", firstInputValue);
    console.log("입력 내용: ", secondInputValue);
}

function backhome() {
    window.location.href = 'home.html';
  }