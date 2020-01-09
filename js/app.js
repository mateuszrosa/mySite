const bar = document.querySelector(".icon");
const ul = document.querySelector("nav.mobile");
const icon = document.querySelector(".icon");
const hamburger = document.querySelector(".hamburger");
const header = document.querySelector("header");
const about = document.querySelector(".about");
const aboutContainerText = about.querySelector(".container p");
const images = document.querySelectorAll(".img a img");
console.log(images);
let flag;

if (window.pageYOffset >= header.clientHeight) {
  hamburger.classList.add("test");
}

if (
  about.getBoundingClientRect().top <= 200 &&
  !aboutContainerText.classList.contains("showText")
) {
  aboutContainerText.classList.add("showText");
  images.forEach(img => {
    img.classList.add("showImg");
  });
  images[0].classList.add("slideImg");
  images[2].classList.add("slideImg");
}

window.addEventListener("scroll", () => {
  if (
    about.getBoundingClientRect().top <= 100 &&
    !aboutContainerText.classList.contains("showText")
  ) {
    aboutContainerText.classList.add("showText");
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
