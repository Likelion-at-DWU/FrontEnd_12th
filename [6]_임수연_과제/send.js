function realSend() {
  const inputTitle = document.querySelector("#inputTitle").value;
  const inputContent = document.querySelector("#inputContent").value;
  console.log("제목: " + inputTitle);
  console.log("내용: " + inputContent);
}

function loadDetail() {
  document.body.innerHTML = '<script src="./detail.js"></script>';
  window.location.href = "home.html";
}
