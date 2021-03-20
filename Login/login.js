//Validation Code for Input
const email = document.forms['form']['email'];
const password = document.forms['form']['password'];

const email_error = document.getElementById("email_error");
const password_error = document.getElementById("password_error");


email.addEventListener("textInput", email_Verify);
password.addEventListener('textInput', password_Verify);


function validated() {
 if (email.value.length < 9) {
  email.style.border = "1px solid red";
  email_error.style.display = "block";
  email.focus();
  return false;
 }
 if (password.value.length < 6) {
  password.style.border = "1px solid red";
  password_error.style.display = "block";
  password.focus();
  return false;
 }
}

function email_Verify() {
 if (email.value.length >= 8) {
  email.style.border = "1px solid silver";
  email_error.style.display = "none";
  return true;
 }
}

function password_Verify() {
 if (password.value.length >= 8) {
  password.style.border = "1px solid silver";
  password_error.style.display = "none";
  return true;
 }
}