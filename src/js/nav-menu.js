(() => {
  const refs = {
    toggleMenuBtn: document.querySelector('[toggle]'),
    closeMenuBtn: document.querySelector('[tablet-cross]'),
    menu: document.querySelector('[menu]'),
    scroll: document.querySelector('[scroll]'),
  };

  refs.toggleMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', closeMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('nav-menu--open');
    refs.toggleMenuBtn.classList.toggle('burger-toggle--enabled');
    refs.scroll.classList.toggle('scroll-hidden');
    refs.toggleMenuBtn.getAttribute('aria-expanded') === 'true' || false;
  }

  function closeMenu() {
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

// -----------
// $(document).ready(function () {
//   $('#menu').on('click', 'a', function (event) {
//     event.preventDefault();

//     var id = $(this).attr('href'),
//       top = $(id).offset().top;

//     $('body,html').animate({ scrollTop: top }, 1500);
//   });
// });
