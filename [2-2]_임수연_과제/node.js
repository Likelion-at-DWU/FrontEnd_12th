const inputBox=document.getElementById("input-box");
const list=document.getElementById("list");

function addItem(){
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    let li = document.createElement("li");
    let close = document.createElement("span"); 
    close.textContent="\u00D7"; 
    li.appendChild(checkbox);
    li.appendChild(document.createTextNode(inputBox.value));
    list.appendChild(li);
    li.appendChild(close);

    checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
          li.style.textDecoration = "line-through";
          list.appendChild(li);
        } else {
          li.style.textDecoration = "none";
        }
      });
    
    close.addEventListener("click", ()=>{
        list.removeChild(li);
    })
    inputBox.value="";
}


let resetButton = document.getElementById("reset");
  resetButton.addEventListener("click", () =>{
    list.innerHTML = "";
  });

document.getElementById('input-box').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      addItem();
    }
  });

