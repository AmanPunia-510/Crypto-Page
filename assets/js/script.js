const item = document.querySelector(".navbar-items");
const menu = document.querySelector(".toggle");

menu.addEventListener("click", () => {
  item.classList.toggle("show");
  let contain = document.querySelector("body");
let index = document.querySelector(".js-z");
  if (item.classList.contains("show")) {
    contain.style.position = "fixed";
    contain.style.top = "0";
    contain.style.left = "0";
    contain.style.width = "100%";
    index.classList.remove("z-2");

  } else {
    contain.style.position = "unset";
    index.classList.add("z-2");
  }
});
