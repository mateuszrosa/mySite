const bar = document.querySelector("i");
const ul = document.querySelector("nav.mobile ul");
bar.addEventListener("click", () => {
  ul.classList.toggle("show");
  console.log("object");
});
