for (let i = 0; i< document.querySelectorAll(".drum").length; i++)

document.querySelectorAll(".drum")[i].addEventListener("click", clickHandler);


function clickHandler() {
  alert("drum was clicked")
}



