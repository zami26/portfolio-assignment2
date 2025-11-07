// NAVBAR SCROLL EFFECT - Added shadow when scrolling
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Mobile menu toggle (also updates aria-expanded)
const toggleBtn = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

toggleBtn.addEventListener('click', () => {
  const expanded = toggleBtn.getAttribute('aria-expanded') === 'true';
  toggleBtn.setAttribute('aria-expanded', String(!expanded));
  navLinks.classList.toggle('active');
});

// Close menu when a nav link is clicked (mobile)
document.querySelectorAll("#nav-links a").forEach(a => {
  a.addEventListener('click', () => {
    navLinks.classList.remove('active');
    toggleBtn.setAttribute('aria-expanded', 'false');
  });
});

// --- SKILL BARS ANIMATION (fixed) ---
// We store target percent in data-value on each .progress-bar
const skillsBox = document.querySelector('.skills-box');
const progressBars = document.querySelectorAll('.progress-bar');

if (skillsBox && progressBars.length) {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        progressBars.forEach(bar => {
          const value = bar.getAttribute('data-value') || '0%';
          // set width to the target value -> CSS transition animates it
          bar.style.width = value;
        });
        obs.unobserve(entry.target); // run once
      }
    });
  }, { threshold: 0.25 });

  observer.observe(skillsBox);
}


//connect with me section..

document.querySelector("form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.querySelector('input[type="text"]').value;
  const email = document.querySelector('input[type="email"]').value;
  const message = document.querySelector("textarea").value;

  const response = await fetch("https://portfolio-assignment2-qu0y.onrender.com", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, message })
  });

  const result = await response.json();
  alert(result.message);
});

