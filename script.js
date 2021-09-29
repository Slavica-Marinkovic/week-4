
var error = document.querySelector(".error");

var email = document.querySelector(".input-email");
var mailFormat = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;


document.getElementById("btn").addEventListener('click', function(e){
    e.preventDefault();
    var emailValue = email.value;

    if (emailValue.match(mailFormat)) {
        error.style.display = "none";
      } else if (emailValue == "") {
        error.innerHTML = "Oops! Please add your email"
        error.style.display = "block";
      } else {  
        error.innerHTML = "Oops! Please check your email"
        error.style.display = "block";
      }
});