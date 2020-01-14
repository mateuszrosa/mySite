const bar = document.querySelector(".icon");
const ul = document.querySelector("nav.mobile");
const icon = document.querySelector(".icon");
const hamburger = document.querySelector(".hamburger");
const header = document.querySelector("header");
const about = document.querySelector(".about");
const aboutContainerText = about.querySelector(".container p");
const images = document.querySelectorAll(".img a img");
const photo = document.querySelector(".about .me .image");
const logos = document.querySelectorAll(".logos img");
const skills = document.querySelector(".skills");
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
  images[0].classList.add("slideRightImg");
  images[2].classList.add("slideRightImgLate");

  images[1].classList.add("slideLeftImg");
  images[3].classList.add("slideLeftImgLate");

  photo.classList.add("showImg");
}

window.addEventListener("scroll", () => {
  if (
    about.getBoundingClientRect().top <= 100 &&
    !aboutContainerText.classList.contains("showText")
  ) {
    aboutContainerText.classList.add("showText");
    images[0].classList.add("slideRightImg");
    images[2].classList.add("slideRightImgLate");

    images[1].classList.add("slideLeftImg");
    images[3].classList.add("slideLeftImgLate");

    photo.classList.add("showImg");
  } else if (
    skills.getBoundingClientRect().top <= 100 &&
    !logos[0].classList.contains("slideRightImg")
  ) {
    logos[0].classList.add("fadeIn");
    logos[2].classList.add("fadeInLate");
    logos[4].classList.add("fadeInLater");

    logos[1].classList.add("fadeIn");
    logos[3].classList.add("fadeInLate");
    logos[5].classList.add("fadeInLater");
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
