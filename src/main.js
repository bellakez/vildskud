import "./style.css";

// TIL PROGRAM
document
  .querySelector(".dropbtn_hoved_menu")
  .addEventListener("click", myFunctionProgram);

function myFunctionProgram() {
  document.getElementById("myDropdownProgram").classList.toggle("show");
  document.querySelector(".header ul").style.overflow = "visible";
}

// TIL DELTAG
document
  .querySelector(".dropbtn_deltag")
  .addEventListener("click", myFunctionDeltag);

function myFunctionDeltag() {
  document.getElementById("myDropdownDeltag").classList.toggle("show");
  document.querySelector(".header ul").style.overflow = "visible";
}

//OM OS

document.querySelector(".dropbtn_os").addEventListener("click", myFunctionOmos);

function myFunctionOmos() {
  document.getElementById("myDropdownOs").classList.toggle("show");
  document.querySelector(".header ul").style.overflow = "visible";
}

// For at fjerne menuen ved klik
document.querySelector(".menu-btn").addEventListener("click", FunctionFjern);

function FunctionFjern() {
  document.querySelector(".menu ul").classList.toggle("hidden_menu");
  console.log("vis");
}

// COOKIEBOX
const acceptCookie = document.querySelector("#accepter");
const denyCookie = document.querySelector("#afvis");
const cookieboks = document.querySelector("#cookieboks");

acceptCookie.addEventListener("mousedown", fjernCookieBoks);
denyCookie.addEventListener("mousedown", fjernCookieBoks);

function fjernCookieBoks() {
  cookieboks.classList.add("hidden");
  sessionStorage.setItem("fjerncookieboks", true);
}
