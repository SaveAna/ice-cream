var e;(()=>{const e={toggleMenuBtn:document.querySelector("[toggle]"),closeMenuBtn:document.querySelector("[tablet-cross]"),menu:document.querySelector("[menu]"),scroll:document.querySelector("[scroll]")};e.toggleMenuBtn.addEventListener("click",(function(){e.menu.classList.toggle("nav-menu--open"),e.toggleMenuBtn.classList.toggle("burger-toggle--enabled"),e.scroll.classList.toggle("scroll-hidden"),e.toggleMenuBtn.getAttribute("aria-expanded")})),e.closeMenuBtn.addEventListener("click",(function(){e.menu.classList.toggle("nav-menu--open"),e.toggleMenuBtn.classList.toggle("burger-toggle--enabled"),e.scroll.classList.toggle("scroll-hidden"),e.toggleMenuBtn.getAttribute("aria-expanded")})),window.matchMedia("(min-width: 1200px)").addEventListener("change",(t=>{t.matches&&(e.menu.classList.remove("menu--open"),e.scroll.classList.remove("scroll-hidden"),e.toggleMenuBtn.classList.remove("burger-toggle--enabled"),e.toggleMenuBtn.setAttribute("aria-expanded",!1))}))})(),"function"!=typeof(e=window.Element.prototype).matches&&(e.matches=e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||function(e){for(var t=this,o=(t.document||t.ownerDocument).querySelectorAll(e),n=0;o[n]&&o[n]!==t;)++n;return Boolean(o[n])}),"function"!=typeof e.closest&&(e.closest=function(e){for(var t=this;t&&1===t.nodeType;){if(t.matches(e))return t;t=t.parentNode}return null}),document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll(".js-open-modal"),t=document.querySelector(".js-overlay-modal"),o=document.querySelectorAll(".js-modal-close");e.forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault();var o=this.getAttribute("data-modal");document.querySelector('.modal[data-modal="'+o+'"]').classList.add("active"),t.classList.add("active")}))})),o.forEach((function(e){e.addEventListener("click",(function(e){this.closest(".modal").classList.remove("active"),t.classList.remove("active")}))})),document.body.addEventListener("keyup",(function(e){27==e.keyCode&&(document.querySelector(".modal.active").classList.remove("active"),document.querySelector(".overlay").classList.remove("active"))}),!1),t.addEventListener("click",(function(){document.querySelector(".modal.active").classList.remove("active"),this.classList.remove("active")}))}));
//# sourceMappingURL=index.7cbd3cce.js.map
