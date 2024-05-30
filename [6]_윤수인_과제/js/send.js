const titleInput = document.querySelector(".title-line");
const contentTextarea = document.querySelector(".content");
const sendBtn = document.querySelector(".sendBtn");

sendBtn.addEventListener("click", () => {
  const title = titleInput.value;
  const content = contentTextarea.value;

  console.log("제목:", title);
  console.log("내용:", content);
});

const backBtn = document.querySelector(".backBtn");

backBtn.addEventListener("click", () => {
  location.assign("home.html");
});
