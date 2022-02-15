let email = document.getElementById("emailaddress1");
let password = document.getElementById("password1")
let password2 = document.getElementById("password2")
let button = document.getElementById("sumbutton")

function formValidate() {
   if (email === null) {
       alert("please fill in your email address")
   }
   if (password !== password2) {
       alert("password does not match")
   }
}
