
function switchToDarkMode() {
  document.body.classList.add("dark");
  document.body.classList.remove("contrast");
  document.getElementById("dark-mode-button").classList.add("active");
  document.getElementById("light-mode-button").classList.remove("active");
  document.getElementById("high-contrast-mode-button").classList.remove("active");
  localStorage.setItem("theme", "dark");
}

function switchToLightMode() {
  document.body.classList.remove("dark");
  document.body.classList.remove("contrast");
  document.getElementById("high-contrast-mode-button").classList.remove("active");
  document.getElementById("dark-mode-button").classList.remove("active");
  document.getElementById("light-mode-button").classList.add("active");
  localStorage.setItem("theme", "light");
}

function switchToHighContrastMode() {
  document.body.classList.remove("dark");
  document.body.classList.remove("light");
  document.body.classList.add("contrast");
  document.getElementById("dark-mode-button").classList.remove("active");
  document.getElementById("light-mode-button").classList.remove("active");
  document.getElementById("high-contrast-mode-button").classList.add("active");
  localStorage.setItem("theme", "contrast");
}
// Load the saved theme, or initialize it to light.

const currentTheme = localStorage.getItem("theme");
if (currentTheme === "dark")  switchToDarkMode();
else if (currentTheme === "contrast")  switchToHighContrastMode();
else switchToLightMode();
setTimeout(() => {
  document.body.classList.add("transition");
}, 20);