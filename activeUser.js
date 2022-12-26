let activeUser = localStorage.getItem("activeUser") || null;
console.log(activeUser);
// activeUser = "Archie"
let account = document.getElementById("account");
let signbutton = document.getElementById("signbutton");
let leaderBoard = document.getElementById("leaderBoard");

if (activeUser != null) {
  account.innerText = activeUser;
  signbutton.style.display = "none";
  leaderBoard.style.display = "block";
}

let form = document.getElementById("signinform");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log(e);
});
function createAccount(name, password) {
  let sevenDays = JSON.parse(localStorage.getItem("sevenDaysData")) || []; //array
  localStorage.setItem("location", JSON.stringify(locationStoreByCity));
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


