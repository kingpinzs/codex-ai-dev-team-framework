// DOM elements
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navItems = document.querySelectorAll('.nav-item');
const sections = document.querySelectorAll('.section');

// Toggle mobile menu
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking on a nav link
navMenu.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// Active navigation item highlighting
function setActiveNavItem() {
    const scrollPosition = window.scrollY + 100; // Offset for header
    
    sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            // Remove active class from all nav items
            navItems.forEach(item => item.classList.remove('active'));
            
            // Add active class to corresponding nav item
            const activeNavItem = document.querySelector(`.nav-item[href="#${sectionId}"]`);
            if (activeNavItem) {
                activeNavItem.classList.add('active');
            }
        }
    });
}

// Listen for scroll events to update active navigation
window.addEventListener('scroll', setActiveNavItem);

// Set initial active state
document.addEventListener('DOMContentLoaded', setActiveNavItem);

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = target.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Handle responsive design changes
function handleResize() {
    if (window.innerWidth > 768) {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    }
}

window.addEventListener('resize', handleResize);

// Add touch support for better mobile experience
let touchStartY = 0;
let touchEndY = 0;

document.addEventListener('touchstart', (e) => {
    touchStartY = e.changedTouches[0].screenY;
});

document.addEventListener('touchend', (e) => {
    touchEndY = e.changedTouches[0].screenY;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const swipeDistance = touchStartY - touchEndY;
    
    // Swipe up to hide mobile menu
    if (swipeDistance > swipeThreshold && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    }
}

// Keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// Initialize app
function init() {
    console.log('Codex AI Dev Team Framework Demo initialized');
    setActiveNavItem();
}

// Run initialization when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}