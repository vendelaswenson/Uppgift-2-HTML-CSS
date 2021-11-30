const hamburgerBar = document.querySelector(".ham-container");
const navBar = document.querySelector(".bar");
const sections = document.querySelectorAll(".sec");
const logo = document.querySelector("#logo");
let active = false;

hamburgerBar.addEventListener("click", () => {
  if (!active) {
    active = true;
    navBar.classList.add("barActive");
    for (let i = 0; i < sections.length; i++)
      sections[i].style.display = "initial";
    logo.style.display = "initial";
  } else {
    active = false;
    navBar.classList.remove("barActive");
    for (let i = 0; i < sections.length; i++)
      sections[i].style.display = "none";
    logo.style.display = "none";
  }
});
