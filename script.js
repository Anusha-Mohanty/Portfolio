document.addEventListener("DOMContentLoaded", function () {
  const hireBtn = document.querySelector(".btn-group .btn:first-child"); // Hire button
  const contactBtn = document.querySelector(".btn-group .btn:last-child"); // Contact button
  
  hireBtn.addEventListener("click", function (event) {
      event.preventDefault();
      window.location.href = "mailto:your-email@example.com";
  });
  
  contactBtn.addEventListener("click", function (event) {
      event.preventDefault();
      document.querySelector("#contact").scrollIntoView({ behavior: "smooth" });
  });

  // Form submission handling
  const contactForm = document.querySelector("form");
  contactForm.addEventListener("submit", function (event) {
      event.preventDefault();
      alert("Your message has been sent successfully!");
      contactForm.reset();
  });
});
