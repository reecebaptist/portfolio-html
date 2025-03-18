function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

var isJapanese = false;

function toggleLanguage(num) {
  isJapanese = document.getElementsByClassName("languageToggle")[num].checked;
  const translatableElements = document.querySelectorAll(".translatable");
  translatableElements.forEach((element) => {
    if (isJapanese) {
      isJapanese = true;
      element.textContent = element.dataset.ja;
    } else {
      isJapanese = false;
      element.textContent = element.dataset.en;
    }
  });
}

function toggleLanguageMob() {
  toggleMenu();
  toggleLanguage(1);
}

function downloadResume() {
  isJapanese
    ? window.open("./assets/Reece_RobertHalf_20250224.pdf")
    : window.open("./assets/Resume_ATS.pdf");
}
