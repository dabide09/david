function login () {

 const email = document.getElementById("email").value;
 const password = document.getElementById("password").value;
 const message = document.getElementById("message");

 if (email === "johndavid@gmail.com" && password === "dave0909") {

     window.location.href = "index.html";

 }else{

    message.innerHTML = "Invalid Password or Email";
    message.style.color = "blue";
 }
}