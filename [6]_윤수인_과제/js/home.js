const goToSendBtn = document.querySelector(".postbox-button");

goToSendBtn.addEventListener("click", () => {
  location.assign("send.html");
});

fetch("/data.json") // json 파일 읽어오기
  .then((response) => response.json()) // 읽어온 데이터를 json으로 변환
  .then((json) => {
    const data = json.letters; // json에 있는 letters만 받아오기
    const letterBoxes = document.querySelectorAll(".letterBox");

    letterBoxes.forEach((box, index) => {
      if (data[index]) {
        box.innerHTML = createTitle(data[index]);
      } else {
        box.innerHTML = "";
      }
    });

    if (data.length > letterBoxes.length) {
      const midContainer = document.querySelector(".mid");
      for (let i = letterBoxes.length; i < data.length; i++) {
        const newBox = document.createElement("div");
        newBox.classList.add("letterBox");
        newBox.innerHTML = createTitle(data[i]);
        midContainer.appendChild(newBox);
      }
    }

    document.querySelectorAll(".letterTitle").forEach((title) => {
      title.addEventListener("click", () => {
        const postId = title.getAttribute("id");
        location.assign(`detail.html?id=${postId}`);
      });
    });
  });

function createTitle(item) {
  return `<p class="letterTitle" style="margin-top:15px;" id="${item.postId}">${item.title}</p>`;
}
