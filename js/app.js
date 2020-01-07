const bar = document.querySelector(".icon");
const ul = document.querySelector("nav.mobile");
const icon = document.querySelector(".icon");
const hamburger = document.querySelector(".hamburger");
const header = document.querySelector("header");
const about = document.querySelector(".about");
let flag;

if (window.pageYOffset >= header.clientHeight) {
  hamburger.classList.add("test");
}

console.log(about.getBoundingClientRect().top);

window.addEventListener("scroll", () => {
  if (about.getBoundingClientRect().top <= 400) {
    console.log(window.pageYOffset, about.getBoundingClientRect().top);
    console.log("about");
    about.querySelector(".container").classList.add("slide-right");
  }
});

bar.addEventListener("click", () => {
  ul.classList.toggle("show");
  icon.classList.toggle("active");
  if (ul.classList.contains("show")) {
    hamburger.classList.remove("test");
  } else if (window.pageYOffset >= header.clientHeight) {
    hamburger.classList.add("test");
  }
});

window.addEventListener("scroll", () => {
  if (
    window.pageYOffset >= header.clientHeight / 2 &&
    flag &&
    !ul.classList.contains("show")
  ) {
    hamburger.classList.add("test");
    flag = false;
    return;
  } else if (window.pageYOffset <= header.clientHeight / 2 && !flag) {
    hamburger.classList.remove("test");
    flag = true;
  }
});
