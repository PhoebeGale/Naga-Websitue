document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector("header");
  const navbar = document.querySelector(".navbar");
  const brand = document.querySelector(".brand");

  // Change header background on scroll
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      header.style.backgroundColor = "rgb(22, 77, 117)"; // Solid background
      navbar.classList.add("scrolled"); // Add the class to adjust navbar layout and show logo
    } else {
      header.style.backgroundColor = "rgba(22, 77, 117, 0)"; // Transparent background
      navbar.classList.remove("scrolled"); // Remove the class to reset navbar layout and hide logo
    }
  });
});

function showSidebar(){
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'flex'
}

function hideSidebar(){
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'none'
}
