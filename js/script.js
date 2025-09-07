// WOW.js initialization
new WOW({
  boxClass: 'wow',
  animateClass: 'animate__animated',
  offset: 0,
  mobile: true,
  live: true
}).init();

// Add new section on button click
document.getElementById("moar").addEventListener("click", function() {
  const newSection = document.createElement("section");
  newSection.className = "wow animate__animated animate__fadeInDown";
  newSection.style.height = "300px";
  newSection.style.margin = "60px 0";
  newSection.style.backgroundColor = "#9b59b6";
  document.getElementById("main").appendChild(newSection);
  // Re-init WOW for new content
  new WOW().init();
});
