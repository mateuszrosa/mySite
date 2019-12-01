const bar = document.querySelector("i");
const ul = document.querySelector("nav.mobile ul");
bar.addEventListener("click", () => {
  ul.classList.add("show");
  console.log("object");
});
