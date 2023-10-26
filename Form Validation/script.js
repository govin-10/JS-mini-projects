//input holders
const fullName = document.getElementById("fullName");
let email = document.getElementById("emailId");

//error message holders
let nameError = document.getElementById("name-error");
let emailError = document.getElementById("email-error");

const validIcon = document.getElementById("validIcon");
const emailValidIcon = document.getElementById("email-validIcon");

function validateName() {
  if (fullName.value.length == 0) {
    nameError.innerHTML = `Name cannot be empty.`;
    validIcon.classList.add("default-hide");
    return false;
  } else if (!fullName.value.match(/^[A-Za-z]*\s{1}[A-Za-z]+$/)) {
    nameError.innerHTML = `Please enter the full name. No middlename is required.`;
    validIcon.classList.add("default-hide");
    return false;
  } else {
    nameError.innerHTML = "";
    validIcon.classList.remove("default-hide");
    return true;
  }
}

function validateEmail() {
  if (email.value.length == 0) {
    emailError.innerHTML = `Email cannot be empty.`;
    emailValidIcon.classList.add("default-hide");
    return false;
  } else if (
    !email.value.match(/^[A-Za-z0-9._]+@[A-Za-z0-9.-]+\.[a-z]{2,6}$/)
  ) {
    emailError.innerHTML = `Invalid email.`;
    emailValidIcon.classList.add("default-hide");
    return false;
  } else {
    emailError.innerHTML = "";
    emailValidIcon.classList.remove("default-hide");
    return true;
  }
}
