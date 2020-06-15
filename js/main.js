const btnSwitch = document.querySelector("#switch");
btnSwitch.addEventListener("click", cambioClase);
function cambioClase() {
  document.body.classList.toggle("dark");
  document.getElementsByClassName("wave")[0].classList.toggle("dark");
  btnSwitch.classList.toggle("active");
  document.getElementsByTagName("header")[0].classList.toggle("dark");
  document.getElementsByClassName("sobre-nosotros")[0].classList.toggle("dark");
  document.getElementsByClassName("portafolio")[0].classList.toggle("dark");
  document.getElementsByClassName("titulo")[2].classList.toggle("dark");
  document.getElementsByClassName("card")[0].classList.toggle("dark");
  document.getElementsByClassName("card")[1].classList.toggle("dark");
  document.getElementsByClassName("about-services")[0].classList.toggle("dark");
}
