(() => {
  const refs = {
    toggleMenuBtn: document.querySelector('[data-toggle]'),
    closeMenuBtn: document.querySelector('[data-tablet-cross]'),
    menu: document.querySelector('[data-menu]'),
    scroll: document.querySelector('[data-scroll]'),
    anchor_1: document.querySelector('[data-nav-link1]'),
    anchor_2: document.querySelector('[data-nav-link2]'),
    anchor_3: document.querySelector('[data-nav-link3]'),
    butBtn: document.querySelector('[data-buy-button]'),
  };

  refs.toggleMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);
  refs.anchor_1.addEventListener('click', toggleMenu);
  refs.anchor_2.addEventListener('click', toggleMenu);
  refs.anchor_3.addEventListener('click', toggleMenu);
  refs.butBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('nav-menu--open');
    refs.toggleMenuBtn.classList.toggle('burger-toggle--enabled');
    refs.scroll.classList.toggle('scroll-hidden');
    refs.toggleMenuBtn.getAttribute('aria-expanded') === 'true' || false;
  }

  window.matchMedia('(min-width: 1200px)').addEventListener('change', e => {
    if (!e.matches) return;
    refs.menu.classList.remove('menu--open');
    refs.scroll.classList.remove('scroll-hidden');
    refs.toggleMenuBtn.classList.remove('burger-toggle--enabled');
    refs.toggleMenuBtn.setAttribute('aria-expanded', false);
  });
})();
