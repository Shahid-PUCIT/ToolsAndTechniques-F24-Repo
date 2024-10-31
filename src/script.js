// Sticky Navbar
window.addEventListener("scroll", function () {
    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
  });


  // update current year
window.onload = function() {
  const currentYearEl = document.querySelector("#currentYear");
  if(currentYearEl) {currentYearEl.innerText = new Date().getFullYear();}
}