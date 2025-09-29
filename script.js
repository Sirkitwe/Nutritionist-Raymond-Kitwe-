// Wait until the page loads
document.addEventListener("DOMContentLoaded", () => {
  
  // Show a welcome message when someone visits
  alert("Welcome to my Nutrition Research Portfolio 🚀");

  // Add a simple highlight effect when clicking on nav links
  const navLinks = document.querySelectorAll("header nav a");
  
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navLinks.forEach(l => l.style.color = "white"); // reset others
      link.style.color = "yellow"; // highlight selected
    });
  });
  
});
