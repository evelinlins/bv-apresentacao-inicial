// Interactive behavior for BRIVÉN Studio

document.addEventListener('DOMContentLoaded', () => {
  const root = document.documentElement;
  const themeToggleBtn = document.getElementById('theme-toggle');

  // 1. Theme Initialization
  const savedTheme = localStorage.getItem('briven_theme') || 'dark';
  root.setAttribute('data-theme', savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const activeTheme = root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
      const newTheme = activeTheme === 'dark' ? 'light' : 'dark';
      
      root.setAttribute('data-theme', newTheme);
      localStorage.setItem('briven_theme', newTheme);
    });
  }

  // 2. Mobile Menu Drawer Toggle
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('active');
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
      });
    });
  }

  // 3. Modal ExtratoTurbo
  const modal = document.getElementById('extratoturbo-modal');
  window.openModal = function() {
    if (modal) modal.classList.add('active');
  };
  window.closeModal = function() {
    if (modal) modal.classList.remove('active');
  };

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }
});

