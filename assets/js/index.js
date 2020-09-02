const inputBox = document.getElementById("inputBox");
const myNodelist = document.getElementsByTagName("LI");
const close = document.getElementsByClassName("close");
const list = document.querySelector('ul');

const  newElement = () => {
  var li = document.createElement("li");
  var inputValue = document.getElementById("inputBox").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);

  document.getElementById("toDoList").appendChild(li);

  document.getElementById("inputBox").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

function main(){
  inputBox.style.display = "none";

  // hide list item if x is clicked
  for (let i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      this.parentElement.style.display = "none";
    }
  }

  // Show the input box when clicked
  addToDoButton.addEventListener("click", function(){
    if (inputBox.style.display === "none") {
      inputBox.style.display = "block";
    } else {
      inputBox.style.display = "none";
      inputBox.style.transition = "background 10s";
    }
  });

  // add the input box value to the todo list when 'enter' is pushed
  inputBox.addEventListener("keypress", function(e){
    if (e.key === 'Enter'){
      newElement();
    }
  });

  // strikethrough list item when clicked
  list.addEventListener('click', function(e) {
     if (e.target.tagName === 'LI') {
     e.target.classList.toggle('checked');
    }
  }, false);

}

main();
