document.addEventListener('DOMContentLoaded', function() {
        const buttonClass = localStorage.getItem('buttonClass');

        if (buttonClass === 'a') {
          title = "첫 편지";
          content = "안뇽안뇽";
        } else if (buttonClass === 'b') {
          title = '🧡마음을 보내요🧡';
          content = "내용내용";
        } else if (buttonClass === 'c') {
          title = "반가워~";
          content = "나는 멋쟁이다";
        } else if (buttonClass === 'd') {
          title = "천재가 쓴 편지😎";
          content = "난 왜 이렇게 똑똑할까";
        } else if (buttonClass === 'e') {
          title = "사자들아";
          content = "파이팅";
        } else if (buttonClass === 'f') {
          title = "심바랑 친구할래";
          content = "난 품바니까";
        } else if (buttonClass === 'g') {
          title = "저메추🤔";
          content = "마라탕";
        } else if (buttonClass === 'h') {
          title = "아 배고파";
          content = "붕어빵계란빵국화빵";
        } else if (buttonClass === 'i') {
          title = "슈퍼이끌림💌";
          content = "유유유유";
        } else if (buttonClass === 'j') {
          title = "네잎클로버🍀";
          content = "행운을 보냅니다";
        }
        
        document.getElementById('title').textContent = title;
        document.getElementById('content').textContent = content;
      });
      
function backhome() {
    window.location.href = 'home.html';
}





