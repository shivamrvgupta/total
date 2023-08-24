let input = document.querySelector(".input input");
let myBox = document.querySelector(".input .box");
let maxLength = input.getAttribute("maxlength");
console.log(maxLength)

input.oninput = function () {
  myBox.style.width = `${(this.value.length * 100) / maxLength }%`;
  this.value.length > maxLength - 2 ? myBox.style.backgroundColor  = "red" : myBox.style.backgroundColor  = "blue" ;
}



// // Get all input fields
// const inputFields = document.querySelectorAll('.user-box input');

// // Add event listeners to each input field
// inputFields.forEach(input => {
//     input.addEventListener('focus', () => {
//         input.parentNode.classList.add('active');
//     });

//     input.addEventListener('blur', () => {
//         if (input.value === '') {
//             input.parentNode.classList.remove('active');
//         }
//     });

//     // Check input values on page load
//     if (input.value !== '') {
//         input.parentNode.classList.add('active');
//     }
// });
