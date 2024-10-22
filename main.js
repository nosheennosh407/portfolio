const nav = document.querySelector("nav");

// nav scroll event

document.addEventListener("scroll", () => {
  if (window.scrollY < 1) {
    nav.classList.remove("navfixed");
  }

  if (window.scrollY >= 1) {
    nav.classList.add("navfixed");
  }
});

console.log(nav);

// event

const left = document.querySelector(".lef");

window.addEventListener("load", () => {
  left.style.transform = "translate(650px)";
  left.style.transition = "all 2s";
});

const link = document.querySelector(".links");

const Icon = document.querySelector("#ic");

Icon.addEventListener("click", () => {
  link.classList.toggle("active");
});

const flex = document.querySelector(".links");

const hide = document.querySelector("#icon");

hide.addEventListener("click", () => {
  flex.classList.toggle("active");
});

// let sidelist = document.querySelector(".sidebar");
// console.log(sidelist);

// sidelist.style.display = "none";
// function toggleMenu() {
//   if (sidelist.style.display == "none") {
//     sidelist.style.display = "flex";
//   } else {
//     sidelist.style.display = "none";
//   }
// }
