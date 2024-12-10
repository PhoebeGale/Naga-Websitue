document.addEventListener("DOMContentLoaded", function () {
      const header = document.querySelector("header");
      const navLinks = document.querySelectorAll(".nav-link");

      // Change header background on scroll
      window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
          header.style.backgroundColor = "rgba(22, 77, 117, 1)";
        } else {
          header.style.backgroundColor = "rgba(22, 77, 117, 0)";
        }
      });
    });

