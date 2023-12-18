// Name: resume.js
// Autor: PAUL REY M CABAS
// Date: 12-16-2023
document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll(".nav-item");

  function setActiveItem() {
    const scrollPosition = window.scrollY;

    items.forEach((item) => {
      const targetId = item
        .querySelector(".nav-link")
        .getAttribute("href")
        .substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        const sectionTop = targetSection.offsetTop;
        const sectionBottom = sectionTop + targetSection.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          items.forEach((i) => i.classList.remove("active"));
          item.classList.add("active");
        }
      }
    });
  }

  // Add click event listeners to each item
  items.forEach((item) => {
    item.addEventListener("click", () => {
      items.forEach((i) => i.classList.remove("active"));
      item.classList.add("active");
    });
  });

  // Set active item on page load
  setActiveItem();

  // Set active item when hash changes (e.g., navigating to another section)
  window.addEventListener("hashchange", setActiveItem);

  // Set active item on scroll
  window.addEventListener("scroll", setActiveItem);

  // Your existing code for tooltip initialization
  $('[data-toggle="tooltip"]').tooltip({
    delay: { show: 500, hide: 100 },
  });

  // Your existing code for toggleSidebar and toggleIconClass functions
  var sidebar = document.querySelector(".sidebar");
  var toggleIcon = document.getElementById("toggleIcon");

  toggleIcon.className = sidebar.classList.contains("collapsed")
    ? "fas fa-bars"
    : "fas fa-times";

  document
    .getElementById("sidebarToggle")
    .addEventListener("click", function () {
      toggleSidebar();
      toggleIconClass();
    });

  // Add click event listener to the navigation links
  var navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      var targetId = this.getAttribute("href").substring(1);
      var targetElement = document.getElementById(targetId);

      if (targetElement) {
        var targetPosition =
          window.innerWidth <= 992
            ? targetElement.offsetTop - 50
            : targetElement.offsetTop;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });

        toggleSidebar(); // Call toggleSidebar to close the sidebar
        toggleIconClass(); // Update the icon to menu after clicking a navigation link
      }
    });
  });

  function toggleSidebar() {
    var sidebar = document.querySelector(".sidebar");
    sidebar.classList.toggle("collapsed");
  }

  function toggleIconClass() {
    var sidebar = document.querySelector(".sidebar");
    var toggleIcon = document.getElementById("toggleIcon");
    toggleIcon.className = sidebar.classList.contains("collapsed")
      ? "fas fa-bars"
      : "fas fa-times";
  }
});


