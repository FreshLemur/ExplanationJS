function save() {
  const saveBtn = document.querySelector(".save-btn");

  saveBtn.addEventListener("click", () => {
    const userName = document.getElementById("user-name").value;
    const userAge = document.getElementById("user-age").value;
    if (userName !== "" && userAge !== "") {
      localStorage.setItem("SavedUserName", userName);
      localStorage.setItem("SavedUserAge", userAge);
      updateLastUserData();
    } else {
      alert("User name or user age is clean")
    }
  });

  // Для спрацювання при натиску Enter
  const userNameInput = document.getElementById("user-name");
  userNameInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      saveBtn.click(); // Симуляція Btn при натиску на Enter.
    }
  });

  updateLastUserData(); // Оновлення відразу при завантаженні сторінки
}

function updateLastUserData() {
  const lastUserNameElement = document.querySelector(".last-user-name");
  const lastUserAgeElement = document.querySelector(".last-user-age");
  lastUserNameElement.innerText = localStorage.getItem("SavedUserName") || "No data";
  lastUserAgeElement.innerText = localStorage.getItem("SavedUserAge") || "No data";
}

save();
