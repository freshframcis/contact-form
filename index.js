let inputDiv = document.querySelectorAll("#box");
let errorDiv = document.querySelectorAll(".error-state");
let successDiv = document.querySelector(".success-container");
let submitButton = document.getElementById("submitButton");
let form = document.querySelector("form");
let box_change = document.querySelectorAll(".box-change");
let first_name = document.querySelector('.first-name')
let last_name = document.querySelector('.last-name')
function submitKey(event) {
  let isValid = true;
  let email_test = inputDiv[2].value.trim();
  let emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (inputDiv[0].value.trim() === "") {
    errorDiv[0].style.display = "flex";
    isValid = false;
    first_name.textContent = "This field is required"
    inputDiv[0].style.border = "1px solid red";
    event.preventDefault();
  } else {
    inputDiv[0].style.border = "";
    errorDiv[0].style.display = "none";
  }
  if (inputDiv[1].value.trim() === "") {
    errorDiv[1].style.display = "flex";
    isValid = false;
    last_name.textContent = "This field is required"
    inputDiv[1].style.border = "1px solid red";
    event.preventDefault();
  } else {
    inputDiv[1].style.border = "";
    errorDiv[1].style.display = "none";
  }
  if (!emailRegex.test(email_test)) {
    isValid = false;
    errorDiv[2].style.display = "flex";
    inputDiv[2].style.border = "1px solid red";
    event.preventDefault();
  } else {
    inputDiv[2].style.border = "";
    errorDiv[2].style.display = "none";
  }
  if (inputDiv[3].checked === false && inputDiv[4].checked === false) {
    errorDiv[3].style.display = "flex";
    isValid = false;
    box_change[0].style.border = "1px solid red";
    box_change[1].style.border = "1px solid red";
    event.preventDefault();
  } else {
    errorDiv[3].style.display = "none";
    box_change[0].style.border = "";
    box_change[1].style.border = "";
  }
  if (inputDiv[5].value.trim() === "") {
    errorDiv[4].style.display = "flex";
    isValid = false;
    inputDiv[5].style.border = "1px solid red";
    event.preventDefault();
  } else {
    inputDiv[5].style.border = "";
    errorDiv[4].style.display = "none";
  }
  if (inputDiv[6].checked === false) {
    isValid = false;
    errorDiv[5].style.display = "flex";
    event.preventDefault();
  } else {
    errorDiv[5].style.display = "none";
  }
  if (!isValid) {
    successDiv.style.display = "none";
  } else {
    successDiv.style.display = "block";
    form.reset();
    event.preventDefault();
  }
}

submitButton.addEventListener("click", submitKey);
