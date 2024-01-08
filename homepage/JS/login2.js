const logregBox = document.querySelector(".logreg-box");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");

registerLink.addEventListener("click", () => {
  logregBox.classList.add("active");
});

loginLink.addEventListener("click", () => {
  logregBox.classList.remove("active");
});

function validateAndRedirect() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  email = email.trim();
  password = password.trim();

  if (email === "" || password === "") {
    alert("Please fill in all required fields.");
    return false;
  }

  window.location.href = "RinaBen.html";
  return false;
}

function navtoLoginPage() {
  window.open("login.html", "_blank");
}



