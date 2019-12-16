const bar = document.querySelector(".icon");
const ul = document.querySelector("nav.mobile");
const icon = document.querySelector(".icon");
const header = document.querySelector("header");
let flag;

bar.addEventListener("click", () => {
  ul.classList.toggle("show");
  icon.classList.toggle("active");
});

window.addEventListener("scroll", () => {
  if (window.pageYOffset >= header.clientHeight && flag) {
    console.log("object");
    icon.style.background = "white";
    flag = false;
    return;
  } else if (window.pageYOffset <= header.clientHeight && !flag) {
    icon.style.background = "none";
    flag = true;
  }
});
