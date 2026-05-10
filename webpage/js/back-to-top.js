
window.addEventListener("scroll", () => {
  const back_to_top_btn = document.getElementById("back-to-top");
  
  if (document.body.scrollTop > 450 || document.documentElement.scrollTop > 450) {
    back_to_top_btn.classList.add("show");
  }
  else {
    back_to_top_btn.classList.remove("show");
  }
});