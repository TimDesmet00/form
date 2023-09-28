/*
 */
// ciblage des endroit a recuperer ou a envoyer
const userFirstName = document.getElementById("firstname");
const spanFirstName = document.getElementById("display-firstname");
const userAge = document.getElementById("age");
const aHardTruth = document.getElementById("a-hard-truth");
const userPwd = document.getElementById("pwd");
const userVerifPwd = document.getElementById("pwd-confirm");
const darkMode = document.getElementById("toggle-darkmode");

// event keyup

// recuperation et retranscription du first name
userFirstName.addEventListener("keyup", (e) => {
  spanFirstName.innerHTML = e.target.value;
});

// recuperation et verification de l'age
userAge.addEventListener("keyup", (e) => {
  console.log(e.target.value);
  if (e.target.value >= 18) {
    aHardTruth.style.visibility = "visible";
  }
});

// recuperation et verification de la longueur du mot de passe.
// et conparaison entre le mot de passe et la confirmation du mot de passe.
userPwd.addEventListener("keyup", (e) => {
  console.log(e.target.value);
  if (e.target.value.length < 6) {
    userPwd.style.borderColor = "red";
  } else {
    userPwd.style.borderColor = "";
  }
  userVerifPwd.addEventListener("keyup", (e) => {
    if (e.target.value !== userPwd.value) {
      userVerifPwd.style.borderColor = "red";
    } else {
      userVerifPwd.style.borderColor = "";
    }
  });
});

// dark mode basique sur un selecteur
darkMode.addEventListener("change", () => {
  valueDarkMode = darkMode.value;
  if (valueDarkMode === "dark") {
    document.body.style.background = "black";
    document.body.style.color = "white";
  } else {
    document.body.style.background = "white";
    document.body.style.color = "black";
  }
});
