const hamburgerBar = document.querySelector(".ham-container");
const navBar = document.querySelector(".bar");
let active = true;

hamburgerBar.addEventListener("click", () => {
  if (!active) {
    active = true;
    navBar.classList(".add");
  } else {
    active = false;
    navBar.classList(".remove");
  }
});
