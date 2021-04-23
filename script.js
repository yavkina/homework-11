let inputPassword = document.getElementById ("inputPassword");
let buttonPassword = document.getElementById ("buttonPassword");
let length = document.getElementById("length");

inputPassword.onfocus = function() {
    document.getElementById("messageLenght").style.display = "block";
}
  
inputPassword.onblur = function() {
    document.getElementById("messageLenght").style.display = "none";
}

inputPassword.onkeyup = function () {
if(inputPassword.value.length >=5 && inputPassword.value.length<21) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
    }
};

inputPassword.submit = function (event) {
  if (inputPassword === 'myFreedom-2011') {
    document.getElementById("messageHello").style.display = "block";
    // error.className = "error active";
    event.preventDefault();
  }
}, false;