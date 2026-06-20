// Mobile Responsive Drawer Toggle
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenu.classList.toggle('is-active');
});

// Structural Auto-Typing Simulation Loop
const textArray = ["Software Engineering Aspirant", "Frontend Developer", "Computer Science Student"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
    if (count === textArray.length) {
        count = 0;
    }
    currentText = textArray[count];
    letter = currentText.slice(0, ++index);

    document.querySelector(".typing").textContent = letter;
    if (letter.length === currentText.length) {
        setTimeout(() => {
            index = 0;
            count++;
            setTimeout(type, 400);
        }, 2500); 
    } else {
        setTimeout(type, 80);
    }
}());

// Close mobile drawer upon click confirmation
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Advanced 3D Mouse Tracker Tilt Matrix Rule 
const targetCards = document.querySelectorAll('.project-card');

targetCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        
        const cardWidth = rect.width / 2;
        const cardHeight = rect.height / 2;
        
        // Calibrating smooth vector rotational displacement angles
        const degreeX = (cardHeight - mouseY) / 12;
        const degreeY = (mouseX - cardWidth) / 12;
        
        card.style.transform = `perspective(1000px) rotateX(${degreeX}deg) rotateY(${degreeY}deg) scale3d(1.03, 1.03, 1.03)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    });
});

// Asynchronous Scroll Reveal Observer Infrastructure
const revealingTargets = document.querySelectorAll('.skills-box, .project-card, .timeline-item, .cert-card');

const displayObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.12
});

revealingTargets.forEach(target => {
    target.classList.add('reveal');
    displayObserver.observe(target);
});
const themes = [
  "#ff6b6b",
  "#4ecdc4",
  "#6c63ff",
  "#ff9f43",
  "#00d2d3",
  "#e056fd"
];

let currentTheme = 0;

document.getElementById("theme-btn").addEventListener("click", () => {
  currentTheme = (currentTheme + 1) % themes.length;

  document.documentElement.style.setProperty(
    "--primary-color",
    themes[currentTheme]
  );
});