document.addEventListener("DOMContentLoaded", function () {
  var data = [
    { postId: 1, title: "첫 편지", content: "안뇽안뇽" },
    { postId: 2, title: "🧡마음을 보내요🧡", content: "내용내용" },
    { postId: 3, title: "반가워~", content: "나는 멋쟁이다" },
    { postId: 4, title: "천재가 쓴 편지😎", content: "난 왜 이렇게 똑똑할까" },
    { postId: 5, title: "사자들아", content: "파이팅" },
    { postId: 6, title: "심바랑 친구할래", content: "난 품바니까" },
    { postId: 7, title: "저메추🤔", content: "마라탕" },
    { postId: 8, title: "아 배고파", content: "붕어빵계란빵국화빵" },
    { postId: 9, title: "슈퍼이끌림💌", content: "유유유유" },
    { postId: 10, title: "네잎클로버🍀", content: "행운을 보냅니다" },
  ];

  var params = new URLSearchParams(window.location.search);
  var postId = parseInt(params.get("postId"), 10);

  console.log("postId:", postId);

  var letter = data.find(function (item) {
    return item.postId === postId;
  });

  console.log("letter:", letter);

  if (letter) {
    document.getElementById("title").textContent = letter.title;
    document.getElementById("contentBox").textContent = letter.content;
  }

  var backBtn = document.getElementById("backBtn");
  backBtn.addEventListener("click", function () {
    window.location.href = "home.html";
  });
});
