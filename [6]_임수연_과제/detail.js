const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get("postId");
const title = urlParams.get("title");
const content = urlParams.get("content");

const contentElement = document.createElement("p");
const titleElement = document.createElement("p.title1");

titleElement.innerText = title;
contentElement.innerText = content;

const lcontent = document.getElementById("content");
const ltitle = document.getElementById("title");

ltitle.appendChild(titleElement);
lcontent.appendChild(contentElement);

function loadDetail() {
  document.body.innerHTML = '<script src="./detail.js"></script>';
  window.location.href = "home.html";
}

function realDelete() {
  confirm("정말 삭제하실꺼에여??");
}
