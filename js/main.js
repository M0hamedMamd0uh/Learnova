const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    navLinks.forEach((item) => item.classList.remove("active"));

    this.classList.add("active");
  });
});

const coursesNav = document.querySelectorAll(".courses-nav > div");

coursesNav.forEach((link) => {
  link.addEventListener("click", function () {
    coursesNav.forEach((item) => item.classList.remove("active"));

    this.classList.add("active");
  });
});
