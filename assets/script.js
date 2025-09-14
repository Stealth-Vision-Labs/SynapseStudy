(function () {
  const toggle = document.getElementById('subjectsToggle');
  const menu = document.getElementById('subjectsMenu');
  if (!toggle || !menu) return;

  function closeMenu() {
    menu.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }

  function openMenu() {
    menu.classList.add('open');
    toggle.setAttribute('aria-expanded', 'true');
  }

  toggle.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = menu.classList.contains('open');
    if (isOpen) closeMenu();
    else openMenu();
  });

  // Close when clicking outside
  document.addEventListener('click', () => closeMenu());

  // Keep menu open while interacting inside
  menu.addEventListener('click', (e) => e.stopPropagation());
})();
