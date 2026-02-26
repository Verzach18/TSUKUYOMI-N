document.addEventListener('DOMContentLoaded', () => {
    // Reveal Elements on Scroll with Window Effect
    const observerOptions = {
        threshold: 0.1
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal');
            }
        });
    }, observerOptions);

    // Track all window-entry elements
    document.querySelectorAll('.window-entry').forEach(el => {
        revealObserver.observe(el);
    });

    // Navigation Button Fix
    const navBtn = document.getElementById('nav-start-btn');
    if (navBtn) {
        navBtn.addEventListener('click', (e) => {
            console.log("Navigating to about.html...");
            setTimeout(() => {
                window.location.href = navBtn.getAttribute('href');
            }, 100);
        });
    }

    // Floating Parallax on Hero
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        const heroBg = document.querySelector('.hero-full');
        if (heroBg) {
            heroBg.style.backgroundPosition = `center ${scrolled * 0.4}px`;
        }
    });

    // Hover effect for photo placeholders
    document.querySelectorAll('.photo-placeholder').forEach(photo => {
        photo.addEventListener('mouseover', () => {
            photo.style.borderColor = 'var(--neon-magenta)';
            photo.style.color = 'var(--neon-magenta)';
        });
        photo.addEventListener('mouseout', () => {
            photo.style.borderColor = '#333';
            photo.style.color = '#444';
        });
    });
});
