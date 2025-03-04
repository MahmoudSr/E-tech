const darkModeToggle = document.getElementById("darkModeToggle");

// Check saved mode preference when the page loads
if (localStorage.getItem("mode") === "dark") {
  document.body.classList.add("dark-mode");
  darkModeToggle.textContent = "☀️";
} else {
  document.body.classList.remove("dark-mode");
  darkModeToggle.textContent = "🌙";
}

// Dark Mode Toggle Event Listener
darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // Save the mode preference in localStorage
  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("mode", "dark");
    darkModeToggle.textContent = "☀️";
    darkModeToggle.style.color = "#fff";
  } else {
    localStorage.setItem("mode", "light");
    darkModeToggle.textContent = "🌙";
    darkModeToggle.style.color = "#000";
  }
});

const hamburger = document.getElementById("hamburger");
const overlay = document.getElementById("overlay");
const navMenu = document.querySelector("#nav-menu");
const menuLinks = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  overlay.style.display = navMenu.classList.contains("active")
    ? "block"
    : "none";
});

overlay.addEventListener("click", () => {
  navMenu.classList.remove("active");
  overlay.style.display = "none";
});

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    overlay.style.display = "none";
  });
});

// Add this script to handle the collapsible FAQ behavior
document.querySelectorAll(".faq-toggle").forEach((button) => {
  button.addEventListener("click", () => {
    const faqItem = button.closest(".faq-item");
    faqItem.classList.toggle("open");
  });
});
