import "./style.css";

document
  .querySelector(".dropbtn_hoved_menu")
  .addEventListener("click", myFunction);

//Når brugeren klikker på menuen, kommer den frem og den kan toggles væk igen
function myFunction() {
  document.getElementById("myDropdownProgram").classList.toggle("show");
  document.querySelector(".header ul").style.overflow = "visible";
}
