!function(){var e;!function(){var e={toggleMenuBtn:document.querySelector("[data-toggle]"),closeMenuBtn:document.querySelector("[data-tablet-cross]"),menu:document.querySelector("[data-menu]"),scroll:document.querySelector("[data-scroll]"),anchor_1:document.querySelector("[data-nav-link1]"),anchor_2:document.querySelector("[data-nav-link2]"),anchor_3:document.querySelector("[data-nav-link3]"),butBtn:document.querySelector("[data-buy-button]")};function t(){e.menu.classList.toggle("nav-menu--open"),e.toggleMenuBtn.classList.toggle("burger-toggle--enabled"),e.scroll.classList.toggle("scroll-hidden"),e.toggleMenuBtn.getAttribute("aria-expanded")}e.toggleMenuBtn.addEventListener("click",t),e.closeMenuBtn.addEventListener("click",t),e.anchor_1.addEventListener("click",t),e.anchor_2.addEventListener("click",t),e.anchor_3.addEventListener("click",t),e.butBtn.addEventListener("click",t),window.matchMedia("(min-width: 1200px)").addEventListener("change",(function(t){t.matches&&(e.menu.classList.remove("menu--open"),e.scroll.classList.remove("scroll-hidden"),e.toggleMenuBtn.classList.remove("burger-toggle--enabled"),e.toggleMenuBtn.setAttribute("aria-expanded",!1))}))}(),"function"!=typeof(e=window.Element.prototype).matches&&(e.matches=e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||function(e){for(var t=this,n=(t.document||t.ownerDocument).querySelectorAll(e),o=0;n[o]&&n[o]!==t;)++o;return Boolean(n[o])}),"function"!=typeof e.closest&&(e.closest=function(e){for(var t=this;t&&1===t.nodeType;){if(t.matches(e))return t;t=t.parentNode}return null}),document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll(".js-open-modal"),t=document.querySelector(".js-overlay-modal"),n=document.querySelectorAll(".js-modal-close");e.forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault();var n=this.getAttribute("data-modal");document.querySelector('.modal[data-modal="'+n+'"]').classList.add("active"),t.classList.add("active")}))})),n.forEach((function(e){e.addEventListener("click",(function(e){this.closest(".modal").classList.remove("active"),t.classList.remove("active")}))})),document.body.addEventListener("keyup",(function(e){27==e.keyCode&&(document.querySelector(".modal.active").classList.remove("active"),document.querySelector(".overlay").classList.remove("active"))}),!1),t.addEventListener("click",(function(){document.querySelector(".modal.active").classList.remove("active"),this.classList.remove("active")}))}));new Swiper(".mySwiper",{spaceBetween:25,loop:!0,pagination:{el:".swiper-pagination",clickable:!0}}),new Swiper(".gallery__swiper",{spaceBetween:30,loop:!0,centeredSlides:!0,autoplay:{delay:4e3,disableOnInteraction:!1}});var t=new IntersectionObserver((function(e){e.forEach((function(e){e.isIntersecting&&e.target.classList.add("element-show")}))}),{threshold:[.5]}),n=document.querySelectorAll(".element-animation"),o=!0,c=!1,a=void 0;try{for(var r,l=n[Symbol.iterator]();!(o=(r=l.next()).done);o=!0){var i=r.value;t.observe(i)}}catch(e){c=!0,a=e}finally{try{o||null==l.return||l.return()}finally{if(c)throw a}}}();
//# sourceMappingURL=index.3cdf297c.js.map