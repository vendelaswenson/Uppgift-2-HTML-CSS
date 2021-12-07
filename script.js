const hamburgerBar = document.querySelector(".ham-container");
const navBar = document.querySelector(".bar");
const sections = document.querySelectorAll(".sec");
const logo = document.querySelector("#logo");
let active = false;

hamburgerBar.addEventListener("click", () => {
  if (!active) {
    active = true;
    navBar.style.display = "flex";
    navBar.classList.add("barActive");
    hamburgerBar.classList.add("activeBtn");
    for (let i = 0; i < sections.length; i++)
      sections[i].style.display = "initial";
    logo.style.display = "initial";
  } else {
    active = false;
    navBar.classList.remove("barActive");
    hamburgerBar.classList.remove("activeBtn");
    navBar.style.display = "none";
    for (let i = 0; i < sections.length; i++)
      sections[i].style.display = "none";
    logo.style.display = "none";
  }
});
