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
