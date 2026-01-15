document.addEventListener("DOMContentLoaded", () => {

  /* ===============================
     HAMBURGER MENU
  =============================== */
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });

    document.querySelectorAll(".nav-links a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
      });
    });
  }

  /* ===============================
     SMOOTH SCROLL
  =============================== */
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  /* ===============================
     FADE ON SCROLL
  =============================== */
  const sections = document.querySelectorAll(".fade-section");

  const revealOnScroll = () => {
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      const triggerPoint = window.innerHeight - 100;

      if (sectionTop < triggerPoint) {
        section.classList.add("show");
      }
    });
  };

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();

  /* ===============================
     CONTACT FORM (NO EMAILJS)
  =============================== */
  const form = document.querySelector(".contact-form");

  if (form) {
    form.addEventListener("submit", e => {
      e.preventDefault();
      alert("Thank you 💜 Your message has been sent!");
      form.reset();
    });
  }

});
