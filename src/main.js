import "./style.css";

// COOKIEBOX
const acceptCookie = document.querySelector("#accepter");
const denyCookie = document.querySelector("#afvis");
const cookieboks = document.querySelector("#cookieboks");

acceptCookie.addEventListener("mousedown", fjernCookieBoks);
denyCookie.addEventListener("mousedown", fjernCookieBoks);

function fjernCookieBoks() {
  cookieboks.classList.add("hidden");
  sessionStorage.setItem("fjerncookieboks", true);
  //koden nedenunder, gør at boksen aldrig kommer igen, men ved at fjerne kommer den igen ved reload i browser
  // }
  // if (sessionStorage.getItem("fjerncookieboks")) {;
  // cookieboks.classList.add("hidden");
}

// TIL PROGRAM
document
  .querySelector(".dropbtn_hoved_menu")
  .addEventListener("click", myFunctionProgram);

//Når brugeren klikker på menuen, kommer den frem og den kan toggles væk igen
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

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (
    !event.target.matches(
      ".dropbtn_deltag" && ".dropbtn_hoved_menu_program" && ".dropbtn_os"
    )
  ) {
    var dropdowns = document.getElementsByClassName(
      "dropdown-content_deltag" &&
        "dropdown-content_program" &&
        "dropdown-content_os"
    );
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
