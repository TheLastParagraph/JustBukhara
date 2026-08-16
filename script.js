document.addEventListener('DOMContentLoaded', () => {
    // 1. Scroll Animations using Intersection Observer
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: stop observing once it has become visible
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-up');
    fadeElements.forEach(el => observer.observe(el));

    // Navigation Component Loader
    async function loadComponents() {
        try {
            // Load Header
            const headerPlaceholder = document.getElementById('header-placeholder');
            if (headerPlaceholder) {
                const headerRes = await fetch('header.html');
                if (headerRes.ok) {
                    const headerHtml = await headerRes.text();
                    headerPlaceholder.outerHTML = headerHtml;
                }
            }

            // Load Footer
            const footerPlaceholder = document.getElementById('footer-placeholder');
            if (footerPlaceholder) {
                const footerRes = await fetch('footer.html');
                if (footerRes.ok) {
                    const footerHtml = await footerRes.text();
                    footerPlaceholder.outerHTML = footerHtml;
                }
            }

            // Set active states and themes
            const path = window.location.pathname;
            const isHome = path.endsWith('index.html') || path.endsWith('/');
            
            // Highlight nav link
            const pageName = isHome ? 'index' : path.split('/').pop().replace('.html', '');
            const activeLink = document.querySelector(`nav a[data-page="${pageName}"]`);
            if (activeLink) {
                if (!isHome) {
                    activeLink.classList.add('active');
                    activeLink.style.background = 'var(--clr-dark)';
                    activeLink.style.color = 'var(--clr-white)';
                } else {
                    activeLink.classList.add('active');
                }
            }

            // Apply specific styles if NOT home (for about.html and products.html)
            if (!isHome) {
                const navLinks = document.querySelector('.nav-links');
                if (navLinks) {
                    navLinks.style.background = 'rgba(0,0,0,0.05)';
                    navLinks.style.borderColor = 'rgba(0,0,0,0.1)';
                    document.querySelectorAll('.nav-links a:not(.active)').forEach(a => a.style.color = 'var(--clr-text)');
                }
                const mainLogo = document.getElementById('main-logo');
                if (mainLogo) mainLogo.style.color = 'var(--clr-dark)';
                
                const contactBtn = document.getElementById('contact-btn');
                if (contactBtn) {
                    contactBtn.style.background = 'var(--clr-dark)';
                    contactBtn.style.color = 'var(--clr-white)';
                }
                
                const hamburgerSpans = document.querySelectorAll('#main-hamburger span');
                hamburgerSpans.forEach(span => span.style.backgroundColor = 'var(--clr-dark)');
            }

            // Re-bind Hamburger menu toggle
            const hamburger = document.querySelector('.hamburger');
            const navLinksContainer = document.querySelector('.nav-links');

            if (hamburger && navLinksContainer) {
                hamburger.addEventListener('click', () => {
                    hamburger.classList.toggle('active');
                    navLinksContainer.classList.toggle('active');
                });
            }
        } catch (error) {
            console.error('Error loading components:', error);
        }
    }

    // Initialize components
    loadComponents();

    // 3. Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
                
                // Hide mobile menu if open
                if (window.innerWidth <= 768) {
                    document.querySelectorAll('.nav-links').forEach(nav => {
                        nav.classList.remove('active');
                    });
                }
            }
        });
    });
});
