// Smooth Scrolling
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector(link.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll Animation Trigger
const sections = document.querySelectorAll('.section');

function revealSections() {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight - 100) {
            section.classList.add('active');
        }
    });
}

window.addEventListener('scroll', revealSections);
revealSections(); // Activate sections on load

// Generate Floating Particles
function createParticles(num) {
    const container = document.body;
    for (let i = 0; i < num; i++) {
        let particle = document.createElement("div");
        particle.classList.add("particle");
        particle.style.left = `${Math.random() * 100}vw`;
        particle.style.top = `${Math.random() * 100}vh`;
        particle.style.animationDuration = `${Math.random() * 5 + 3}s`;
        particle.style.opacity = Math.random();
        container.appendChild(particle);
    }
}
createParticles(50);