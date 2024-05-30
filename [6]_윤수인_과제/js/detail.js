const backBtn = document.querySelector(".backBtn");

backBtn.addEventListener("click", () => {
  location.assign("home.html");
});

const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get("id");

fetch("/data.json")
  .then((response) => response.json())
  .then((json) => {
    const data = json.letters;
    const post = data.find((item) => item.postId === parseInt(postId));
    if (post) {
      document.getElementById("title").textContent = post.title;
      document.getElementById("content").textContent = post.content;
    } else {
      console.log("Post not found");
    }
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
