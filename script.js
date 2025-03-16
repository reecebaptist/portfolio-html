function toggleMenu() {
  console.log("2");
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function toggleLanguage(num) {
  console.log("3");
  const isJapanese =
    document.getElementsByClassName("languageToggle")[num].checked;
  const translatableElements = document.querySelectorAll(".translatable");
  console.log(isJapanese);
  translatableElements.forEach((element) => {
    if (isJapanese) {
      element.textContent = element.dataset.ja;
    } else {
      element.textContent = element.dataset.en;
    }
  });
}

function toggleLanguageMob() {
  console.log("1");
  toggleMenu();
  toggleLanguage(1);
}

function downloadResume() {
  const isJapanese = document.getElementById("languageToggle").checked;
  isJapanese
    ? window.open("./assets/Reece_RobertHalf_20250224.pdf")
    : window.open("./assets/Resume_ATS.pdf");
}
