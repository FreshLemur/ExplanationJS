// Валідація форм
// https://65b241b51555b45e3e32ad2e--warm-stroopwafel-e61a10.netlify.app/

const signUp = () => { // Функція для надання підключення input і надання їм подій, щоб вони викликали інші функції.
  const emailInput = document.getElementById("email")
  const passwordInput = document.getElementById("password")
  const passwordConfirmInput = document.getElementById("passwordConfirm")
  emailInput.addEventListener("blur", () => checkSignUpCorrectForEmail());
  emailInput.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
      checkSignUpCorrectForEmail();
    }
  })
  passwordInput.addEventListener("blur", () => checkSignUpCorrectForPassword());
  passwordInput.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
      checkSignUpCorrectForPassword();
    }
  })
  passwordConfirmInput.addEventListener("blur", () => checkSignUpCorrectForCorrectPassword());
  passwordConfirmInput.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
      checkSignUpCorrectForCorrectPassword();
    }
  })
}

const checkSignUpCorrectForEmail = () => {
  const emailInput = document.getElementById("email");
  const error = document.querySelector(".form-email > .error");
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (emailInput.value === "") {
    emailInput.classList.remove("valid");
    emailInput.classList.add("invalid");
    error.innerText = "Email is required";
  } else {
    if (!emailPattern.test(emailInput.value)) {
      emailInput.classList.remove("valid");
      emailInput.classList.add("invalid");
      error.innerText = "Email is incorrect"
    } else {
      emailInput.classList.remove("invalid");
      emailInput.classList.add("valid");
      error.innerText = "";
    }
  }
}

const checkSignUpCorrectForPassword = () => {
  const passwordInput = document.getElementById("password");
  const error = document.querySelector(".form-password > .error");
  const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (passwordInput.value === "") {
    passwordInput.classList.remove("valid");
    passwordInput.classList.add("invalid");
    error.innerText= "Password is required"; 
  } else {
    if(!passwordPattern.test(passwordInput.value)) {
      error.innerText = "Password must contain at least 8 symbols, one digit and one special character"
      passwordInput.classList.remove("valid");
      passwordInput.classList.add("invalid");
    } else {
      passwordInput.classList.remove("invalid");
      passwordInput.classList.add("valid");
      error.innerText = "";
    }
  }


}

const checkSignUpCorrectForCorrectPassword = () => {
  const passwordConfirmInput = document.getElementById("passwordConfirm");
  if (passwordConfirmInput.value === "") {
    const error = document.querySelector(".form-password-confirm > .error");
    error.innerText= "Confirm password is required";
    passwordConfirmInput.classList.add("invalid");
    passwordConfirmInput.classList.remove("valid");
  } else {
    const passwordInput = document.getElementById("password");
    if (passwordConfirmInput.value === passwordInput.value) {
      const error = document.querySelector(".form-password-confirm > .error");
      error.innerText= "";
      passwordConfirmInput.classList.remove("invalid");
      passwordConfirmInput.classList.add("valid");
    } else {
      const error = document.querySelector(".form-password-confirm > .error");
      error.innerText= "Passwords do not match. Please check the data entered and try again.";
      passwordConfirmInput.classList.remove("valid");
      passwordConfirmInput.classList.add("invalid");
    }
  }
}

signUp ()