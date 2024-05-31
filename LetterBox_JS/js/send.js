document.addEventListener("DOMContentLoaded", () => {
  const titleInput = document.querySelector(".titleInput");
  const contentInput = document.querySelector(".contentInput");
  const sendBtn = document.querySelector(".sendBtn");

  sendBtn.addEventListener("click", () => {
    const title = titleInput.value;
    const content = contentInput.value;

    console.log("제목:", title);
    console.log("내용:", content);
  });
});
