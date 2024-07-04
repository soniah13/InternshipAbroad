let signupBtn = document.getElementById("signupBtn");
let signinBtn = document.getElementById("signinBtn");
let nameField = document.getElementById("nameField");
let title = document.getElementById("title");
let confirm = document.getElementById("confirm");

signinBtn.onclick = function (){
    confirm.style.maxHeight = "0";
    title.innerHTML = "Sign In";
    signupBtn.classList.add("disable");
    signinBtn.classList.remove("disable");
}
signupBtn.onclick = function (){
    confirm.style.maxHeight = "62px";
    title.innerHTML = "Sign Up";
    signinBtn.classList.add("disable");
    signupBtn.classList.remove("disable");
}
function openForm (){
    document.getElementById("form").style.display = "block";
}
function closeForm(){
    document.getElementById("form").style.display = "none";
}
