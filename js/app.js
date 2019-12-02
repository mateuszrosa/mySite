const bar = document.querySelector(".icon");
const ul = document.querySelector("nav.mobile ul");
bar.addEventListener("click", () => {
  ul.classList.toggle("show");
});
