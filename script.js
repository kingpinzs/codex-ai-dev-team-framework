// Mobile hamburger menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    hamburgerMenu.addEventListener('click', function() {
        hamburgerMenu.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!hamburgerMenu.contains(event.target) && !mobileMenu.contains(event.target)) {
            hamburgerMenu.classList.remove('active');
            mobileMenu.classList.remove('active');
        }
    });
    
    // Close mobile menu when window is resized to desktop
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            hamburgerMenu.classList.remove('active');
            mobileMenu.classList.remove('active');
        }
    });
});

// Bottom navigation active state
document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all items
            navItems.forEach(nav => nav.classList.remove('active'));
            
            // Add active class to clicked item
            this.classList.add('active');
        });
    });
});

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Add touch feedback for mobile
document.addEventListener('DOMContentLoaded', function() {
    const touchElements = document.querySelectorAll('.nav-item, .hamburger-menu');
    
    touchElements.forEach(element => {
        element.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.95)';
        });
        
        element.addEventListener('touchend', function() {
            this.style.transform = 'scale(1)';
        });
        
        element.addEventListener('touchcancel', function() {
            this.style.transform = 'scale(1)';
        });
    });
});

// Debug function to show screen width (for development)
function showScreenWidth() {
    if (window.location.search.includes('debug=true')) {
        const debugInfo = document.createElement('div');
        debugInfo.style.cssText = `
            position: fixed;
            top: 100px;
            right: 10px;
            background: rgba(0,0,0,0.8);
            color: white;
            padding: 10px;
            border-radius: 5px;
            font-family: monospace;
            font-size: 12px;
            z-index: 1000;
        `;
        
        function updateWidth() {
            debugInfo.textContent = `Width: ${window.innerWidth}px`;
        }
        
        updateWidth();
        window.addEventListener('resize', updateWidth);
        document.body.appendChild(debugInfo);
    }
}

showScreenWidth();