document.addEventListener("DOMContentLoaded", function () {
  const goSend = () => {
    const title = document.getElementById("letterTitleInput").value;
    const content = document.getElementById("contentInput").value;
    console.log("제목:", title);
    console.log("내용:", content);
  };

  const sendBtn = document.getElementById("sendBtn");
  sendBtn.addEventListener("click", goSend);

  var backBtn = document.getElementById("backBtn");
  backBtn.addEventListener("click", function () {
    window.location.href = "home.html";
  });
});
