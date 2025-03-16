function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const languageToggle = document.getElementById("languageToggle");
const translatableElements = document.querySelectorAll(".translatable");

console.log(languageToggle);

languageToggle.addEventListener("change", function () {
  const isJapanese = this.checked;

  translatableElements.forEach((element) => {
    if (isJapanese) {
      console.log("Japanese");
      element.textContent = element.dataset.ja;
    } else {
      console.log("English");
      element.textContent = element.dataset.en;
    }
  });
});
