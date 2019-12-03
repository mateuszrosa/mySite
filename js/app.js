const bar = document.querySelector(".icon");
const ul = document.querySelector("nav.mobile");
const icon = document.querySelector(".icon");
bar.addEventListener("click", () => {
  ul.classList.toggle("show");
  icon.classList.toggle("active");
});
