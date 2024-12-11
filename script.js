document.addEventListener("DOMContentLoaded", () => {
  const languageSwitcher = document.querySelector(".language-switcher");
  let currentPath = window.location.pathname;
  let language = currentPath.includes("/en/") ? "en" : "de";
  let languageUrl = currentPath;

  if (currentPath.includes("/de/")) {
    languageUrl = currentPath.replace("de", "en");
  } else {
    languageUrl = currentPath.replace("en", "de");
  }

  languageSwitcher.dataset.lang = language;
  languageSwitcher.setAttribute("href", languageUrl);
});
