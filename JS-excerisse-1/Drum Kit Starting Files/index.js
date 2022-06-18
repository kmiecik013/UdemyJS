for (let i = 0; i< document.querySelectorAll(".drum").length; i++)

document.querySelectorAll(".drum")[i].addEventListener("click", clickHandler);


function clickHandler() {
  let buttonInnerHTML = this.innerHTML;
  
switch (buttonInnerHTML) {
  case "w"

  let audio = new Audio("sounds/tom-1.mp3");
  audio.play 
  break;
default;
}

};


