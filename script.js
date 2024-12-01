document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.querySelector('.menu-text');
    const navBrand = document.querySelector('.nav-brand');
    const menuOverlay = document.querySelector('.menu-overlay');
    
    const toggleMenu = () => {
        // Start menu animation immediately
        if (menuOverlay.style.display === 'none' || !menuOverlay.style.display) {
            menuOverlay.style.display = 'block';
            document.body.classList.add('menu-open'); // Add class when opening
            requestAnimationFrame(() => {
                menuOverlay.classList.add('active');
            });
        } else {
            menuOverlay.classList.remove('active');
            document.body.classList.remove('menu-open'); // Remove class when closing
            setTimeout(() => {
                menuOverlay.style.display = 'none';
            }, 500);
        }

        // Handle text change separately
        menuButton.style.opacity = '0';
        setTimeout(() => {
            menuButton.textContent = menuButton.textContent === 'Menu' ? 'Close' : 'Menu';
            menuButton.style.opacity = '1';
        }, 300);
    };
    
    menuButton.addEventListener('click', toggleMenu);
    navBrand.addEventListener('click', (e) => {
        e.preventDefault();
        toggleMenu();
    });
});