const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
        
// Mobile Menu Logic
const menuToggleBtn = document.getElementById('menu-toggle-btn');
const navLinks = document.querySelector('.nav-links');

// NEW: Custom Cursor Elements
const cursorDot = document.querySelector('.cursor-dot');
const cursorOutline = document.querySelector('.cursor-outline');


// 1. Theme Toggle Functionality
themeToggle.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    if (currentTheme === 'dark') {
        body.setAttribute('data-theme', 'light');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    } else {
        body.setAttribute('data-theme', 'dark');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
});

// 2. Mobile Menu Toggle Functionality
if (menuToggleBtn && navLinks) {
    menuToggleBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        
        // Change icon (Hamburger <-> X)
        const icon = menuToggleBtn.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
}

// 3. Close mobile menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            const icon = menuToggleBtn.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
});

// Animated Skill Text Logic
const skillElement = document.getElementById('animated-skill');
const skills = [
    "Microservices", 
    "ETL", 
    "Pyhton & Django",
    "JavaScript & React",
    "HTML & CSS",
    "Scalable Data Solutions", 
    "Backend Engineering", 
    "Java & Spring Boot"
];
let skillIndex = 0;

if (skillElement) {
    setInterval(() => {
        // 1. Fade out the current skill
        skillElement.style.opacity = '0';

        // 2. Wait for the fade-out to complete (500ms, matching CSS transition)
        setTimeout(() => {
            // 3. Update the text content
            skillIndex = (skillIndex + 1) % skills.length;
            skillElement.textContent = skills[skillIndex];
            
            // 4. Fade back in
            skillElement.style.opacity = '1';
        }, 500);

    }, 2000); // Change skill every 2 seconds
}