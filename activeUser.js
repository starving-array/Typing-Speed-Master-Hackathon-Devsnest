let activeUser = localStorage.getItem("activeUser") || null;
let userDatabase = JSON.parse(localStorage.getItem("userDatabase")) || [];
let leaderBoardDatabase = JSON.parse(localStorage.getItem("leaderBoard")) || [];

console.log(activeUser);
// activeUser = "Archie"
let account = document.getElementById("account") || null;
let signbutton = document.getElementById("signbutton") || null;
let leaderBoard = document.getElementById("leaderBoard") || null;

if (activeUser != null) {
  account.innerText = activeUser.username;
  signbutton.style.display = "none";
  leaderBoard.style.display = "block";
}

let recordFormat = {
  id: "",
  wordcount: 0,
  accuracy: 0,
  time: "",
};

let accountForm = {
  mobile: "",
  username: "",
  password: "",
};

// sign in
let signinForm = document.getElementById("signinform");
signinForm.addEventListener("submit", function (e) {
  signinAccount(e);
});
function signinAccount(e) {
  e.preventDefault();
  let username = document.getElementById("mobileSignIn");
  let password = document.getElementById("passwordSignIn");
  let signinState = false;
  userDatabase.forEach(function (elem) {
    if (username.value == elem.mobile && password.value == elem.password) {
      localStorage.setItem("activeUser", elem);
      alert("Account logged in");
      window.location.reload();
    }
  });
  console.log(e);
}

// sign up
let signupForm = document.getElementById("signupform");
signinForm.addEventListener("submit", function (e) {
  createAccount(e);
});
function createAccount(e) {
  console.log(e)
  e.preventDefault();
  let mobile = document.getElementById("mobile");
  let username = document.getElementById("username");
  let password = document.getElementById("password");
  accountForm.mobile = mobile.value;
  accountForm.username = username.value;
  accountForm.password = password.value;

  let signinState = false;
  userDatabase.forEach(function (elem) {
    if (mobile.value == elem.mobile) {
      signinState = true;
    }
  });
  userDatabase.append(accountForm);
  alert("Account created");
  if (!signinState) {
    localStorage.setItem("userDatabase", JSON.stringify(userDatabase));
  }
}

function DataPushToLocalServer(userid, Data) {}

function buttonSignUpF() {
  let buttonSignIn = document.getElementById("signinDiv");
  let buttonSignUp = document.getElementById("signupDiv");
  buttonSignUp.style.display = "block";
  buttonSignIn.style.display = "none";
}

function buttonSignInF() {
  let buttonSignIn = document.getElementById("signinDiv");
  let buttonSignUp = document.getElementById("signupDiv");
  buttonSignUp.style.display = "none";
  buttonSignIn.style.display = "block";
}
