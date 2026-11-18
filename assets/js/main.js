/**
 * customyze.me - Interactions & Theme Toggle (Inspired by mrokon.de)
 */
document.addEventListener('DOMContentLoaded', () => {
  const html = document.documentElement;
  const body = document.body;
  const toggle = document.getElementById('theme-toggle');
  const modeLabel = document.querySelector('.mode-label');

  // --- Theme Toggle Logic ---
  function updateModeLabel() {
    const light = body.classList.contains('light-mode');
    if (modeLabel) {
      modeLabel.textContent = light ? 'Hell' : 'Dunkel';
    }
  }

  function setLightMode() {
    body.classList.add('light-mode');
    html.classList.add('light-mode');
    if (toggle) toggle.checked = true;
    updateModeLabel();
    try { localStorage.setItem('theme', 'light'); } catch (e) {}
  }

  function setDarkMode() {
    body.classList.remove('light-mode');
    html.classList.remove('light-mode');
    if (toggle) toggle.checked = false;
    updateModeLabel();
    try { localStorage.setItem('theme', 'dark'); } catch (e) {}
  }

  if (toggle) {
    toggle.addEventListener('change', function () {
      if (this.checked) {
        setLightMode();
      } else {
        setDarkMode();
      }
    });
  }

  // Initial theme check: saved preference or system preference
  (function initializeTheme() {
    let savedTheme = null;
    try { savedTheme = localStorage.getItem('theme'); } catch (e) {}

    if (savedTheme === 'light') {
      setLightMode();
    } else if (savedTheme === 'dark') {
      setDarkMode();
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      // Default to dark unless user prefers light
      setLightMode();
    } else {
      setDarkMode();
    }
  })();

  // --- Mobile Navigation Toggle ---
  const toggleBtn = document.querySelector('.mobile-nav-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('is-open');
      toggleBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('is-open');
        toggleBtn.setAttribute('aria-expanded', 'false');
      });
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navMenu.classList.contains('is-open')) {
        navMenu.classList.remove('is-open');
        toggleBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // --- Dynamic Current Year ---
  const yearEls = document.querySelectorAll('.current-year');
  const currentYear = new Date().getFullYear();
  yearEls.forEach(el => {
    el.textContent = currentYear;
  });
});
