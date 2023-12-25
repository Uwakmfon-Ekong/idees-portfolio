const menus = document.querySelector(".navList ul");
const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");

menuBtn.addEventListener("click",() => {
  menus.classList.toggle("display")
})
closeBtn.addEventListener("click", () => {
  menus.classList.remove("display");
});


var typed = new Typed(".multipletext", {
  strings: ["18 years old", "data analyst", "social media marketer"],
  typeSpeed: 50,
  backSpeed: 50,
  backdelay: 1000,
  loop: true,
});