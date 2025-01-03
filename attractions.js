document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector("header");
  const navbar = document.querySelector(".navbar");
  const brand = document.querySelector(".brand");

  // Change header background on scroll
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      header.style.backgroundColor = "rgba(22, 77, 117, 1)"; // Solid background
      navbar.classList.add("scrolled"); // Add the class to adjust navbar layout and show logo
    } else {
      header.style.backgroundColor = "rgba(22, 77, 117, 0)"; // Transparent background
      navbar.classList.remove("scrolled"); // Remove the class to reset navbar layout and hide logo
    }
  });
});
// Modal Functionality
const openButtons = document.querySelectorAll(".explore-more");
const modals = document.querySelectorAll(".modal");
const closeButtons = document.querySelectorAll(".close");

openButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modalId = button.getAttribute("data-modal");
    document.getElementById(modalId).style.display = "block";
  });
});

closeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modalId = button.getAttribute("data-modal");
    document.getElementById(modalId).style.display = "none";
  });
});

window.addEventListener("click", (event) => {
  modals.forEach((modal) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});
function initializeCarousel(modalId) {
  const modal = document.getElementById(modalId);
  const slides = modal.querySelectorAll('.slides img');
  const textOverlay = modal.querySelector('.text-overlay');
  const prevButton = modal.querySelector('.prev');
  const nextButton = modal.querySelector('.next');
  const dots = modal.querySelectorAll('.dot');
  let currentIndex = 0;

  function updateSlide() {
    slides.forEach((slide, index) => {
      slide.classList.remove('active');
      if (index === 0) {
        textOverlay.style.display = 'none'; // Hide text on non-first slides
      }
    });

    slides[currentIndex].classList.add('active');
    if (currentIndex === 0) {
      textOverlay.style.display = 'block';
    }

    dots.forEach((dot, index) => {
      dot.classList.remove('active');
      if (index === currentIndex) {
        dot.classList.add('active');
      }
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlide();
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlide();
  }

  nextButton.addEventListener('click', nextSlide);
  prevButton.addEventListener('click', prevSlide);

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      currentIndex = index;
      updateSlide();
    });
  });

  updateSlide(); // Initialize
}

// Initialize carousels for all modals
initializeCarousel('modal-naupa');
initializeCarousel('modal-board');
