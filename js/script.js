// Mobile menu toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get the mobile menu button and mobile menu
    const menuButton = document.querySelector('.mobile-menu-button');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    // Toggle mobile menu when button is clicked
    if (menuButton && mobileMenu) {
        menuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
    
    // Add animation classes to elements when they come into view
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.animate-on-scroll');
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight * 0.9) {
                element.classList.add('animate-fade-in');
            }
        });
    };
    
    // Run animation check on load and scroll
    document.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on page load
    
    // Code blocks - auto copy functionality
    const codeBlocks = document.querySelectorAll('code');
    codeBlocks.forEach(block => {
        // Add hover effect to code blocks
        block.parentElement.classList.add('hover-lift');
        
        // Add click to copy functionality
        block.parentElement.addEventListener('click', () => {
            const textToCopy = block.innerText;
            navigator.clipboard.writeText(textToCopy).then(() => {
                // Create and show tooltip
                const tooltip = document.createElement('div');
                tooltip.innerText = 'Copied!';
                tooltip.style.position = 'absolute';
                tooltip.style.top = '-25px';
                tooltip.style.left = '50%';
                tooltip.style.transform = 'translateX(-50%)';
                tooltip.style.backgroundColor = '#4F46E5';
                tooltip.style.color = 'white';
                tooltip.style.padding = '4px 8px';
                tooltip.style.borderRadius = '4px';
                tooltip.style.fontSize = '12px';
                tooltip.style.zIndex = '100';
                
                block.parentElement.style.position = 'relative';
                block.parentElement.appendChild(tooltip);
                
                // Remove tooltip after 2 seconds
                setTimeout(() => {
                    tooltip.remove();
                }, 2000);
            }).catch(err => {
                console.error('Failed to copy: ', err);
            });
        });
    });
    
    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.getAttribute('href') !== '#') {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
});
