
const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "8363475001" && password === "Aliena") {
        alert("You have successfully stopped the takeover.");
        location.href = "https://grexcode.github.io/marshackathon/robottakeover/itisover.html";
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})
