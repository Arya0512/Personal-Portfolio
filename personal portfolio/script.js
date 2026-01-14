const progressBars = document.querySelectorAll(".progress");

window.addEventListener("scroll", () => {
  const triggerPoint = window.innerHeight - 100;
  
  progressBars.forEach(bar => {
    const top = bar.getBoundingClientRect().top;
    if(top < triggerPoint){
      bar.style.width = bar.getAttribute("data-width");
    }
  });
});

const form = document.querySelector(".contact-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank you 💜 Your message has been sent!");
  form.reset();
});


document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});
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

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

/* Close menu when clicking a link */
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

document.addEventListener("DOMContentLoaded", function () {

  /* Smooth scroll */
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      target.scrollIntoView({ behavior: 'smooth' });
    });
  });

  /* Fade on scroll */
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

  /* Hamburger menu */
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
    });
  });
});