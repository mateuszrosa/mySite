const bar = document.querySelector(".icon");
const ul = document.querySelector("nav.mobile");
const icon = document.querySelector(".icon");
const hamburger = document.querySelector(".hamburger");
const header = document.querySelector("header");
let flag;
const loader = document.querySelector("#loader-wrapper");

setTimeout(() => {
  loader.style.display = "none";
}, 2000);

if (window.pageYOffset >= header.clientHeight) {
  hamburger.classList.add("test");
}

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
