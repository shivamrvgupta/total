let input = document.querySelector(".input input");
let myBox = document.querySelector(".input .box");
let maxLength = input.getAttribute("maxlength");
console.log(maxLength)

input.oninput = function () {
  myBox.style.width = `${(this.value.length * 100) / maxLength }%`;
  this.value.length > maxLength - 2 ? myBox.style.backgroundColor  = "red" : myBox.style.backgroundColor  = "blue" ;
}