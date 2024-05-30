function backhome() {
    window.location.href = 'home.html';
  }

function sendpost() {
    window.location.href = 'send.html';
  }

function goToPage(buttonClass){
  localStorage.setItem('buttonClass', buttonClass);
  window.location.href = "detail.html";
}