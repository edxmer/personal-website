
function switchToDarkMode() {
  document.body.classList.add("dark");
  document.getElementById("dark-mode-button").classList.add("active");
  document.getElementById("light-mode-button").classList.remove("active");
  localStorage.setItem("theme", "dark");
}

function switchToLightMode() {
  document.body.classList.remove("dark");
  document.getElementById("dark-mode-button").classList.remove("active");
  document.getElementById("light-mode-button").classList.add("active");
  localStorage.setItem("theme", "light");
}


// Load the saved theme, or initialize it to light.

const currentTheme = localStorage.getItem("theme");
if (currentTheme === "dark")  switchToDarkMode();
else switchToLightMode();
setTimeout(() => {
  document.body.classList.add("transition");
}, 20);