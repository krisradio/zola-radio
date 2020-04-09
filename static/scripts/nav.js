/* nav 
 * Functionality to show/hide the nav pane. 
 * Params: none.
 * Returns: none. 
 * Originally written by the mdBook team. 
 * Source: https://github.com/rust-lang/mdBook/blob/master/src/theme/book.js */
(function nav() {
    var html = document.querySelector("html");
    var nav = document.getElementsByTagName("nav")[0];
    var navLinks = document.querySelectorAll('nav a');
    var navToggleButton = document.getElementById("nav-toggle");
    var firstContact = null;

    function shownav() {
        html.classList.remove('nav-hidden')
        html.classList.add('nav-visible');
        Array.from(navLinks).forEach(function (link) {
            link.setAttribute('tabIndex', 0);
        });
        navToggleButton.setAttribute('aria-expanded', true);
        nav.setAttribute('aria-hidden', false);
        try { localStorage.setItem('mdbook-nav', 'visible'); } catch (e) { }
    }

    function hidenav() {
        html.classList.remove('nav-visible')
        html.classList.add('nav-hidden');
        Array.from(navLinks).forEach(function (link) {
            link.setAttribute('tabIndex', -1);
        });
        navToggleButton.setAttribute('aria-expanded', false);
        nav.setAttribute('aria-hidden', true);
        try { localStorage.setItem('mdbook-nav', 'hidden'); } catch (e) { }
    }

    // Toggle nav
    navToggleButton.addEventListener('click', function navToggle() {
        if (html.classList.contains("nav-hidden")) {
            shownav();
        } else if (html.classList.contains("nav-visible")) {
            hidenav();
        } else {
            if (getComputedStyle(nav)['transform'] === 'none') {
                hidenav();
            } else {
                shownav();
            }
        }
    });
})();