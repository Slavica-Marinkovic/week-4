
var error = document.querySelector(".error");

var email = document.querySelector(".input-email");


document.getElementById("btn").addEventListener('click', function(e){
    e.preventDefault();
    var emailValue = email.value;

    if (emailValue.indexOf("@") > -1) {
        error.style.display = "none";
      } else if (emailValue == "") {
        error.innerHTML = "Oops! Please add your email"
        error.style.display = "block";
      } else {  
        error.innerHTML = "Oops! Please check your email"
        error.style.display = "block";
      }
});